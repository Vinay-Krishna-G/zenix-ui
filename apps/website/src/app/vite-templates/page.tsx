import { FrameworkTemplatesView } from '../../components/FrameworkTemplatesView';

export const metadata = {
  title: 'Vite Templates | ZenixUI',
  description: 'Production-ready Vite templates with Tailwind CSS and ZenixUI. Copy, paste, and customize in seconds.',
};

export default function ViteTemplatesPage() {
  return <FrameworkTemplatesView frameworkId="vite" frameworkName="Vite" />;
}
