import { articles } from '../../data/articles';
import Link from 'next/link';
import { Surface, Badge } from '@zenixui/components';

export const metadata = {
  title: 'Learn | ZenixUI',
  description: 'Guides, Tutorials, and Resources for building Modern Web Experiences.',
};

export default function LearnIndexPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.04em' }}>
          Learn Hub
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
          Architecture guides, deep-dives, and best practices for building production-grade web applications.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
        {articles.map(article => (
          <Link key={article.slug} href={`/learn/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Surface variant="card" style={{ padding: '2rem', border: '1px solid var(--zx-elevated)', transition: 'transform 0.2s', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', textTransform: 'capitalize' }}>
                  {article.category}
                </span>
                {article.framework && (
                  <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-sm)', textTransform: 'capitalize' }}>
                    {article.framework}
                  </span>
                )}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 1rem', lineHeight: 1.2 }}>{article.title}</h3>
              <p style={{ fontSize: '0.875rem', opacity: 0.7, margin: '0 0 2rem', flex: 1 }}>{article.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', opacity: 0.5, borderTop: '1px solid var(--zx-border)', paddingTop: '1rem' }}>
                <span>{article.author}</span>
                <span>{article.readTime}</span>
              </div>
            </Surface>
          </Link>
        ))}
      </div>
    </div>
  );
}
