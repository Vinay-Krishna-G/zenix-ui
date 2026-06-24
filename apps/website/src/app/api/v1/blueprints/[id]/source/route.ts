import { NextRequest, NextResponse } from 'next/server';
import registryData from '@zenixui/blueprints/dist/registry.json';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const registry = registryData as any[];
    const blueprint = registry.find((bp) => bp.id === id);

    if (!blueprint) {
      return new NextResponse('Blueprint not found', { status: 404 });
    }

    // In the future this could return a tarball or a JSON of multiple files
    // For now we return the files array as JSON since that's more robust
    return NextResponse.json(blueprint.files || [{ name: `${blueprint.title.replace(/\s+/g, '')}.tsx`, content: blueprint.sourceCode }]);
  } catch (error) {
    return new NextResponse('Failed to load source code', { status: 500 });
  }
}
