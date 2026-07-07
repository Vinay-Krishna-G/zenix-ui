import type { BlockDefinition } from './contracts/experience';

class BlockRegistry {
  private blocks: Map<string, Map<string, BlockDefinition>>;

  constructor() {
    this.blocks = new Map();
  }

  public register(definition: BlockDefinition) {
    if (!this.blocks.has(definition.type)) {
      this.blocks.set(definition.type, new Map());
    }
    this.blocks.get(definition.type)!.set(definition.variant, definition);
  }

  public get(type: string, variant: string): BlockDefinition | undefined {
    return this.blocks.get(type)?.get(variant);
  }

  public getAllTypes(): string[] {
    return Array.from(this.blocks.keys());
  }

  public getVariantsForType(type: string): string[] {
    const variants = this.blocks.get(type);
    return variants ? Array.from(variants.keys()) : [];
  }
}

export const blockRegistry = new BlockRegistry();
