import { FrameworkTemplatesView } from '../../components/FrameworkTemplatesView';

export const metadata = {
  title: 'React Templates | ZenixUI',
  description: 'Production-ready React templates with Tailwind CSS and ZenixUI. Copy, paste, and customize in seconds.',
};

export default function ReactTemplatesPage() {
  return <FrameworkTemplatesView frameworkId="react" frameworkName="React" />;
}
