import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Section Library | ZenixUI — React Headers, Footers, and More',
  description:
    'Install any React section independently — glassmorphism headers, multi-column footers, newsletter forms. One CLI command. No configuration. Works with Next.js, Vite, and Remix.',
};

export default function SectionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
