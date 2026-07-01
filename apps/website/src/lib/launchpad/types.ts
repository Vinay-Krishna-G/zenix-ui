
export interface Industry {
  id: string;
  name: string;
}

export interface Aesthetic {
  id: string;
  name: string;
  description: string;
}

export interface Identity {
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
  blueprintIdMap: Partial<Record<string, string>>;
}

export interface Experience {
  id: string;
  personality: string;
  name: string;
  industryId: string;
  promise: string;
  marketingCopy: string;
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
  launches: string;
  tags: string[]; // e.g. "Trending", "Editor's Pick"
  similarExperiences: string[];
}
