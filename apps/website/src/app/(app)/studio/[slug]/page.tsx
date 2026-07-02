import { notFound } from 'next/navigation';
import { EXPERIENCES } from '../../../../lib/experiences';
import { StudioClient } from './StudioClient';

export default async function StudioPage({ params }: { params: { slug: string } }) {
  const experience = EXPERIENCES.find(e => e.id === params.slug);
  
  if (!experience) {
    return notFound();
  }

  return <StudioClient experience={experience} />;
}
