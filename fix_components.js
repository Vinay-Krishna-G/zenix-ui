const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        filelist.push(dir + '/' + file);
      }
    }
  });
  return filelist;
};

const files = walkSync('./packages/blueprints/src', []);
files.push('./apps/website/src/app/blueprints/[id]/BlueprintClientView.tsx');
files.push('./apps/website/src/app/page.tsx');

let updatedMdContent = '';

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Fix Surface variants
  content = content.replace(/<Surface[^>]*variant=["'](?:card|glass|navbar|footer|hero)["'][^>]*>/g, (match) => {
    return match.replace(/variant=["'](?:card|glass|navbar|footer|hero)["']/, 'variant="elevated"');
  });

  // Fix Button variants
  content = content.replace(/<Button[^>]*variant=["'](?:glass|organic|cyber|default)["'][^>]*>/g, (match) => {
    if (match.includes('"glass"')) return match.replace(/variant=["']glass["']/, 'variant="secondary"');
    if (match.includes('"organic"')) return match.replace(/variant=["']organic["']/, 'variant="ghost"');
    if (match.includes('"cyber"')) return match.replace(/variant=["']cyber["']/, 'variant="outline"');
    if (match.includes('"default"')) return match.replace(/variant=["']default["']/, 'variant="primary"');
    return match;
  });

  // Fix Input variants (remove variant completely)
  content = content.replace(/<Input([^>]*)\s+variant=["'][^"']*["']/g, '<Input$1');

  // Fix Badge variants
  content = content.replace(/<Badge[^>]*variant=["'](?:glass|terminal|organic)["'][^>]*>/g, (match) => {
    return match.replace(/variant=["'][^"']*["']/, 'variant="subtle"');
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
    updatedMdContent += `\n# File\n${file}\n\n\`\`\`tsx\n${content}\n\`\`\`\n`;
  }
}

// Add our previously modified components to updated.md too
const componentFiles = [
  './packages/components/src/atoms/Button.tsx',
  './packages/components/src/atoms/Input.tsx',
  './packages/components/src/atoms/Badge.tsx',
  './packages/components/src/primitives/Surface.tsx'
];

for (const file of componentFiles) {
  let content = fs.readFileSync(file, 'utf8');
  updatedMdContent = `\n# File\n${file}\n\n\`\`\`tsx\n${content}\n\`\`\`\n` + updatedMdContent;
}

const artifactDir = '/Users/vinnu/.gemini/antigravity-ide/brain/2e9d502c-95c0-4718-93c0-2159dd0659fd';
fs.writeFileSync(path.join(artifactDir, 'updated.md'), updatedMdContent);
console.log('Generated updated.md');

