const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Move Launchpad if it exists in home
if (fs.existsSync('apps/website/src/components/home/Launchpad')) {
  execSync('mv apps/website/src/components/home/Launchpad apps/website/src/components/launchpad');
}
// 2. Move BlueprintGallery if it exists in home
if (fs.existsSync('apps/website/src/components/home/BlueprintGallery')) {
  execSync('mv apps/website/src/components/home/BlueprintGallery apps/website/src/components/blueprints');
}

function replaceImports(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  // Fix imports from page.tsx
  content = content.replace(/from '\.\.\/components\/home\/Launchpad'/g, "from '../components/launchpad'");
  content = content.replace(/from '\.\.\/components\/home\/BlueprintGallery'/g, "from '../components/blueprints'");
  
  // Inside launchpad/index.tsx
  if (filePath.includes('launchpad/index.tsx')) {
    content = content.replace(/\.\.\/\.\.\/preview/g, '../preview');
    content = content.replace(/\.\.\/\.\.\/\.\.\/lib/g, '../../lib');
  }

  // Inside blueprints/BlueprintCard.tsx
  if (filePath.includes('blueprints/BlueprintCard.tsx')) {
    content = content.replace(/\.\.\/\.\.\/preview/g, '../preview');
    content = content.replace(/\.\.\/\.\.\/\.\.\/lib/g, '../../lib');
  }
  
  // Inside blueprints/index.tsx
  if (filePath.includes('blueprints/index.tsx')) {
    content = content.replace(/\.\.\/\.\.\/\.\.\/lib/g, '../../lib');
  }

  fs.writeFileSync(filePath, content);
}

replaceImports('apps/website/src/app/page.tsx');
replaceImports('apps/website/src/app/launchpad/page.tsx');
replaceImports('apps/website/src/components/launchpad/index.tsx');
replaceImports('apps/website/src/components/blueprints/BlueprintCard.tsx');
replaceImports('apps/website/src/components/blueprints/index.tsx');

console.log('Done refactoring');
