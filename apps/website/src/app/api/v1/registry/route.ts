import { NextResponse } from 'next/server';
import registryData from '@zenixui/blueprints/dist/registry.json';

export async function GET() {
  try {
    const registry = registryData as any[];
    const metadata = registry.map((bp) => ({
      id: bp.id,
      title: bp.title,
      description: bp.description,
      category: bp.category,
      theme: bp.theme,
      tags: bp.tags,
      previewImage: bp.previewImage,
      downloadUrl: `/api/v1/blueprints/${bp.id}/source`
    }));
    return NextResponse.json(metadata);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load registry metadata' }, { status: 500 });
  }
}
