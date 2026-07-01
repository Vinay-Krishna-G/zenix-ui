import { Launchpad } from '../../components/launchpad';

export const metadata = {
  title: 'Launchpad | ZenixUI',
  description: 'Design and generate complete digital experiences.',
};

export default function LaunchpadPage() {
  // Global layout.tsx already provides the navigation bar.
  // Do NOT add a second <nav> here.
  return <Launchpad />;
}
