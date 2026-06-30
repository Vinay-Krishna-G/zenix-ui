export function extractDependencies(content: string): string[] {
  const deps: string[] = [];
  // Match: import { Button, Surface } from '@zenixui/components'
  const zenixImportRegex = /import\s+\{([^}]+)\}\s+from\s+['"]@zenixui\/components['"]/g;
  let match;
  while ((match = zenixImportRegex.exec(content)) !== null) {
    const importedItems = match[1].split(',').map(i => i.trim()).filter(Boolean);
    for (const item of importedItems) {
      // Remove aliases like `Button as ZenixButton`
      const baseComponent = item.split(' as ')[0].trim();
      deps.push(baseComponent);
    }
  }
  return deps;
}
