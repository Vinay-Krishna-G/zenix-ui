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

export const RenderMode = {
  Thumbnail: 'thumbnail',
  Interactive: 'interactive',
  Production: 'production',
} as const;
export type RenderMode = typeof RenderMode[keyof typeof RenderMode];

export const Viewport = {
  Desktop: 'desktop',
  Tablet: 'tablet',
  Mobile: 'mobile',
} as const;
export type Viewport = typeof Viewport[keyof typeof Viewport];

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
