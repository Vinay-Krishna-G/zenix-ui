export function rewriteImports(
  content: string,
  reusedComponents: string[],
  alias: string
): string {
  if (reusedComponents.length === 0) return content;

  let rewritten = content;

  // We are rewriting: import { Button, Surface } from '@zenixui/components'
  // Let's do it simply by injecting new imports and removing them from the old import block.
  
  const zenixImportRegex = /import\s+\{([^}]+)\}\s+from\s+['"]@zenixui\/components['"];?/g;
  
  rewritten = rewritten.replace(zenixImportRegex, (match, importsStr) => {
    const imports = importsStr.split(',').map((i: string) => i.trim()).filter(Boolean);
    const zenixRemaining: string[] = [];
    const localInjected: string[] = [];
    
    for (const imp of imports) {
      const baseComponent = imp.split(' as ')[0].trim();
      if (reusedComponents.includes(baseComponent)) {
        // Map to shadcn standard (kebab/lower case file name)
        const fileName = baseComponent.toLowerCase();
        localInjected.push(`import { ${imp} } from "${alias}/${fileName}";`);
      } else {
        zenixRemaining.push(imp);
      }
    }
    
    let replacement = localInjected.join('\n');
    if (zenixRemaining.length > 0) {
      if (replacement.length > 0) replacement += '\n';
      replacement += `import { ${zenixRemaining.join(', ')} } from "@zenixui/components";`;
    }
    
    return replacement;
  });

  return rewritten;
}
