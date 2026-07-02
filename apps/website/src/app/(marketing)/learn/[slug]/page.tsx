import { notFound } from 'next/navigation';
import { articles } from '../../../../data/articles';
import Link from 'next/link';
import { SaasDashboardNextjs } from '../../../../components/articles/SaasDashboardNextjs';
import { ReactAdminPanel } from '../../../../components/articles/ReactAdminPanel';
import { PortfolioVite } from '../../../../components/articles/PortfolioVite';
import { BestReactTemplates } from '../../../../components/articles/BestReactTemplates';

export async function generateStaticParams() {
  return articles.map(article => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles.find(a => a.slug === resolvedParams.slug);
  
  if (!article) return {};

  return {
    title: `${article.title} | ZenixUI Learn`,
    description: article.description,
  };
}

function getArticleComponent(slug: string) {
  switch(slug) {
    case 'how-to-build-a-saas-dashboard-in-nextjs':
      return <SaasDashboardNextjs />;
    case 'how-to-build-a-react-admin-panel':
      return <ReactAdminPanel />;
    case 'how-to-create-a-portfolio-website-with-vite':
      return <PortfolioVite />;
    case 'best-react-dashboard-templates-2026':
      return <BestReactTemplates />;
    default:
      return null;
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles.find(a => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/learn" style={{ display: 'inline-block', marginBottom: '2rem', opacity: 0.7, textDecoration: 'none', color: 'inherit' }}>
        ← Back to Learn Hub
      </Link>
      
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', opacity: 0.7, fontSize: '0.875rem' }}>
          <span>{article.publishedAt}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 1rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
          {article.title}
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, margin: 0 }}>
          {article.description}
        </p>
      </div>

      <article>
        {getArticleComponent(article.slug)}
      </article>

      <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--zx-elevated)' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Read Next</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {articles.filter(a => a.slug !== article.slug).slice(0, 3).map(a => (
            <Link key={a.slug} href={`/learn/${a.slug}`} style={{ color: 'var(--zx-primary)', textDecoration: 'none', fontWeight: 500 }}>
              {a.title} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
