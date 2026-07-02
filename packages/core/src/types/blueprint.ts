export interface ThemeTokens {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
}

export enum RenderMode {
  Thumbnail = 'thumbnail',
  Interactive = 'interactive',
  Production = 'production',
}

export enum Viewport {
  Desktop = 'desktop',
  Tablet = 'tablet',
  Mobile = 'mobile',
}

export type BlueprintProps<TContent = unknown> = Readonly<{
  theme: ThemeTokens;
  content: TContent;
  mode: RenderMode;
  viewport: Viewport;
}>;

export interface BlueprintMetadata {
  id: string;
  title: string;
  category: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  supportsDark: boolean;
  supportsRTL: boolean;
  supportsAnimations: boolean;
  defaultViewport: Viewport;
  aspectRatio: string;
}
