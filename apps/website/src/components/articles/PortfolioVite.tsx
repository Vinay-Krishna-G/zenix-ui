import React from 'react';
import Link from 'next/link';
import { Button } from '@zenixui/components';

export function PortfolioVite() {
  return (
    <div className="article-content" style={{ fontSize: '1.125rem', lineHeight: 1.8, opacity: 0.9 }}>
      <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2rem' }}>
        A developer's portfolio is their digital handshake. It needs to be fast, highly interactive, and visually stunning. While Next.js is incredible for large applications, sometimes you just need a blazing fast Single Page Application (SPA) with zero server overhead. In this guide, we will build a minimal, high-performance portfolio using Vite, React, and modern CSS techniques.
      </p>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>1. Why Vite for Portfolios?</h2>
      <p>
        Vite leverages native ES modules to provide an instantly starting development server. For a portfolio—which is usually a statically hosted site with complex client-side animations rather than server-side data fetching—Vite provides the absolute best developer experience with zero configuration required.
      </p>
      <pre style={{ padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: '8px', fontSize: '0.875rem', overflowX: 'auto' }}>
{`npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install
npm run dev`}
      </pre>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>2. Structuring for Visual Impact</h2>
      <p>
        Unlike a dashboard, a portfolio relies on visual storytelling. Your layout should guide the user through your narrative: Hero Section (Who are you?), Work Experience (What have you done?), Projects (Show me), and Contact (Let's talk).
      </p>
      <img src="/previews/zenix-portfolio.png" alt="Zenix Portfolio Architecture" style={{ width: '100%', borderRadius: '12px', marginTop: '2rem', border: '1px solid var(--zx-elevated)' }} />
      <p style={{ marginTop: '1rem', fontSize: '0.875rem', opacity: 0.6, textAlign: 'center' }}>A strong typography hierarchy creates an immediate sense of professionalism.</p>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>3. Advanced Micro-Interactions</h2>
      <p>
        A static page is easily forgotten. A page that reacts to the user feels alive. Implement subtle micro-interactions like mouse-following glows or smooth scroll reveals using Framer Motion or pure CSS.
      </p>
      <pre style={{ padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: '8px', fontSize: '0.875rem', overflowX: 'auto' }}>
{`import { motion } from 'framer-motion';

export function RevealSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}`}
      </pre>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>4. CSS Glassmorphism and Depth</h2>
      <p>
        Layering is critical in modern web design. Use CSS <code>backdrop-filter</code> to create glass-like elements that blur the content beneath them. This creates a sense of depth and hierarchy without relying on heavy drop shadows.
      </p>
      <pre style={{ padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: '8px', fontSize: '0.875rem', overflowX: 'auto' }}>
{`.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}`}
      </pre>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>5. SEO Optimization in SPAs</h2>
      <p>
        The downside of an SPA is that crawlers execute JavaScript differently. Ensure your <code>index.html</code> contains robust meta tags. If your portfolio has multiple pages (e.g., individual project case studies), consider using Vite SSG or switching to an Astro/Next.js setup for better indexing. However, for a single-page resume, standard meta tags are sufficient.
      </p>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>Conclusion</h2>
      <p>
        A great portfolio is a delicate balance of performance, aesthetic restraint, and technical capability. By leveraging Vite, Framer Motion, and modern CSS, you can build a digital handshake that leaves a lasting impression.
      </p>

      <hr style={{ margin: '4rem 0', borderColor: 'var(--zx-elevated)' }} />

      <div style={{ background: 'var(--zx-surface)', border: '1px solid var(--zx-elevated)', padding: '3rem', borderRadius: '16px', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 1rem', fontSize: '2rem' }}>Need an incredible portfolio right now?</h2>
        <p style={{ margin: '0 auto 2rem', opacity: 0.8, maxWidth: '600px', fontSize: '1.125rem' }}>
          Don't spend your weekend tweaking CSS animations. Install a fully-engineered Vite portfolio blueprint featuring smooth scrolling, glassmorphism, and responsive layouts out of the box.
        </p>
        <code style={{ display: 'inline-block', padding: '1rem 2rem', background: 'var(--zx-background)', borderRadius: '8px', marginBottom: '2rem', color: 'var(--zx-primary)', fontSize: '1.125rem', fontWeight: 600, border: '1px solid var(--zx-elevated)' }}>
          npx zenix-ui add ocean-portfolio
        </code>
        <div>
          <Link href="/blueprints/ocean-portfolio" style={{ textDecoration: 'none' }}>
            <Button size="lg">Preview Portfolio Blueprint</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
