export type Industry = 
  | 'Healthcare' | 'Education' | 'Business' | 'Ecommerce' 
  | 'Creator' | 'Interactive' | 'Dashboard' | 'Community' | 'Personal';

export type Aesthetic = 
  | 'Minimal' | 'Glass' | 'Terminal' | 'Neo Brutalism' 
  | 'Apple' | 'Editorial' | 'Cyberpunk';

export interface BrandPack {
  id: string;
  name: string;
  mood: string;
  image: string;
  usedFor: string[];
  colors: {
    primary: string;
    surface: string;
    background: string;
  };
}

export interface Variant {
  id: string;
  name: string;
  // This maps a Variant + Aesthetic combination to a real Blueprint ID in the registry
  blueprintIdMap: Partial<Record<Aesthetic, string>>;
}

export interface Experience {
  id: string;
  name: string;
  industry: Industry;
  description: string;
  perfectFor: string[];
  averageSetupTime: string;
  variants: Variant[];
  includes: {
    outcomes: string[];
    technicalDetails: {
      files: number;
      components: number;
      sections: number;
    }
  };
  coverImage: string;
  rating: number;
  similarExperiences: string[];
}
