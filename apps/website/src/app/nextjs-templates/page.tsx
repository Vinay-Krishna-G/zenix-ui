import { FrameworkTemplatesView } from '../../components/FrameworkTemplatesView';

export const metadata = {
  title: 'Next.js Templates | ZenixUI',
  description: 'Production-ready Next.js templates with Tailwind CSS and ZenixUI. Copy, paste, and customize in seconds.',
};

export default function NextjsTemplatesPage() {
  return <FrameworkTemplatesView frameworkId="nextjs" frameworkName="Next.js" />;
}
