const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'apps/website/src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(directory);
let updatedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Replace imports
  content = content.replace(/lib\/launchpad/g, 'lib/experiences');
  
  // Replace hrefs
  content = content.replace(/href="\/launchpad"/g, 'href="/experiences"');
  
  // Replace text
  content = content.replace(/Open Launchpad/g, 'Browse Experiences');
  content = content.replace(/Launchpad/g, 'Experiences');
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedFiles++;
    console.log(`Updated: ${file}`);
  }
});

console.log(`\nFinished updating ${updatedFiles} files.`);
