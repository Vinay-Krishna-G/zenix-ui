const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  if (!fs.existsSync(dir)) return filelist;
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

let files = walkSync('./packages/blueprints/src', []);
files = files.concat(walkSync('./apps/website/src', []));
files = files.concat(walkSync('./apps/playground/src', []));

let updatedMdContent = fs.existsSync('/Users/vinnu/.gemini/antigravity-ide/brain/2e9d502c-95c0-4718-93c0-2159dd0659fd/updated.md') 
  ? fs.readFileSync('/Users/vinnu/.gemini/antigravity-ide/brain/2e9d502c-95c0-4718-93c0-2159dd0659fd/updated.md', 'utf8') 
  : '';

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  content = content.replace(/<Surface([^>]*)\s+variant=["'](?:card|glass|navbar|footer|hero)["']/g, '<Surface$1 variant="elevated"');
  content = content.replace(/<Button([^>]*)\s+variant=["'](?:glass|organic|cyber|default)["']/g, (match, p1) => {
    if (match.includes('"glass"')) return `<Button${p1} variant="secondary"`;
    if (match.includes('"organic"')) return `<Button${p1} variant="ghost"`;
    if (match.includes('"cyber"')) return `<Button${p1} variant="outline"`;
    if (match.includes('"default"')) return `<Button${p1} variant="primary"`;
    return match;
  });

  content = content.replace(/<(Input|Textarea)([^>]*)\s+variant=["'][^"']*["']/g, '<$1$2');

  content = content.replace(/<Badge([^>]*)\s+variant=["'](?:glass|terminal|organic)["']/g, '<Badge$1 variant="subtle"');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
    if (!updatedMdContent.includes(`\n# File\n${file}\n`)) {
       updatedMdContent += `\n# File\n${file}\n\n\`\`\`tsx\n${content}\n\`\`\`\n`;
    }
  }
}

const artifactDir = '/Users/vinnu/.gemini/antigravity-ide/brain/2e9d502c-95c0-4718-93c0-2159dd0659fd';
fs.writeFileSync(path.join(artifactDir, 'updated.md'), updatedMdContent);
console.log('Generated updated.md');
