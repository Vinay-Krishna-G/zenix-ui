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
      return NextResponse.json({ error: 'Blueprint not found' }, { status: 404 });
    }

    const { sourceCode, files, ...metadata } = blueprint;
    metadata.downloadUrl = `/api/v1/blueprints/${id}/source`;

    return NextResponse.json(metadata);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load blueprint' }, { status: 500 });
  }
}
