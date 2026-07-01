import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { blueprints } from '../src/registry';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const monorepoRoot = path.join(__dirname, '../../..'); // from scripts to root
const distDir = path.join(__dirname, '../dist');

async function buildRegistry() {
  console.log('Building blueprint registry...');
  
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const idSet = new Set<string>();

  const registry = blueprints.map(bp => {
    // 1. Validate required fields
    if (!bp.id || !bp.title || !bp.category || !bp.theme || !bp.sourcePath) {
      console.error(`[Validation Error] Blueprint is missing critical metadata: ${JSON.stringify(bp)}`);
      process.exit(1);
    }

    // 2. Detect duplicate IDs
    if (idSet.has(bp.id)) {
      console.error(`[Validation Error] Duplicate Blueprint ID detected: ${bp.id}`);
      process.exit(1);
    }
    idSet.add(bp.id);

    const fullPath = path.join(monorepoRoot, bp.sourcePath);
    let sourceCode = '';
    
    // 3. Verify source file exists
    if (!fs.existsSync(fullPath)) {
      console.error(`[Validation Error] Source file does not exist for ${bp.id}: ${fullPath}`);
      process.exit(1);
    }

    try {
      sourceCode = fs.readFileSync(fullPath, 'utf-8');
      
      // 4. Verify the export exists in the source code
      const exportRegex = new RegExp(`export (?:default )?(?:function|const|let|var) ${bp.title.replace(/\s+/g, '')}`);
      if (!exportRegex.test(sourceCode)) {
         console.warn(`[Validation Warning] Export ${bp.title.replace(/\s+/g, '')} might be missing in ${fullPath}`);
      }
    } catch (err) {
      console.error(`[Validation Error] Failed to read source code for blueprint: ${bp.id} at ${fullPath}`);
      process.exit(1);
    }

    return {
      id: bp.id,
      title: bp.title,
      description: bp.description,
      category: bp.category,
      theme: bp.theme,
      tags: bp.tags,
      dependencies: (() => {
        const match = sourceCode.match(/export\s+const\s+metadata\s*=\s*({[\s\S]*?});/);
        if (match) {
          try {
            // Using a simple Function constructor to evaluate the JSON-like object string
            const obj = new Function('return ' + match[1])();
            return obj.dependencies || bp.dependencies || [];
          } catch (e) {
            return bp.dependencies || [];
          }
        }
        return bp.dependencies || [];
      })(),
      devDependencies: bp.devDependencies || [],
      files: [
        {
          name: path.basename(fullPath),
          content: sourceCode
        }
      ],
      // Retain sourceCode for any legacy reference
      sourceCode
    };
  });

  const outputPath = path.join(distDir, 'registry.json');
  fs.writeFileSync(outputPath, JSON.stringify(registry, null, 2));
  
  console.log(`Successfully built registry.json with ${registry.length} blueprints.`);
}

buildRegistry();
