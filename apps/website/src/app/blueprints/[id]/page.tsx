import fs from 'node:fs';
import path from 'node:path';
import { getBlueprint } from '@zenixui/blueprints';
import { notFound } from 'next/navigation';
import { BlueprintClientView } from './BlueprintClientView';

export default async function BlueprintDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blueprint = getBlueprint(id);
  
  if (!blueprint) {
    notFound();
  }

  // Read actual source code
  // Website runs from apps/website, so we go up two levels to reach monorepo root
  const fullPath = path.join(process.cwd(), '../..', blueprint.sourcePath);
  let sourceCode = '';
  try {
    sourceCode = fs.readFileSync(fullPath, 'utf-8');
  } catch (err) {
    sourceCode = `// Error reading file: ${fullPath}\n// Check if path exists.`;
  }

  return <BlueprintClientView id={id} sourceCode={sourceCode} />;
}
