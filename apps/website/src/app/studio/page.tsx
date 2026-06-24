import { Metadata } from 'next';
import ThemeStudioClient from './ThemeStudioClient';

export const metadata: Metadata = {
  title: 'Theme Studio | ZenixUI',
  description: 'Design your own ZenixUI theme. Customize accent colors, typography, border radiuses, and density scales, then export the JSON configuration.',
};

export default function StudioPage() {
  return <ThemeStudioClient />;
}
