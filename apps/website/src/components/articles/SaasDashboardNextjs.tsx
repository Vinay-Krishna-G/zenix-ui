import React from 'react';
import Link from 'next/link';
import { Button } from '@zenixui/components';
import { DocsBlueprintCard } from '../DocsBlueprintCard';

export function SaasDashboardNextjs() {
  return (
    <div className="article-content" style={{ fontSize: '1.125rem', lineHeight: 1.8, opacity: 0.9 }}>
      <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2rem' }}>
        Building a modern SaaS dashboard requires more than just fetching data and throwing it into a table. You need a scalable routing architecture, secure authentication boundaries, fast initial loads, and an intuitive layout. In this guide, we will explore how to structure a production-grade SaaS dashboard using Next.js 15, the App Router, and React Server Components.
      </p>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>1. Project Structure and Route Groups</h2>
      <p>
        The Next.js App Router allows you to organize your codebase using Route Groups (folders wrapped in parentheses). This is incredibly powerful for SaaS applications because it allows you to separate the authentication flow from the authenticated dashboard without affecting the URL structure.
      </p>
      <pre style={{ padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: '8px', fontSize: '0.875rem', overflowX: 'auto' }}>
{`app/
  (auth)/
    layout.tsx      // Minimal layout (no sidebar)
    login/page.tsx
    register/page.tsx
  (dashboard)/
    layout.tsx      // Contains Sidebar, Header, Session Check
    page.tsx        // The main dashboard overview
    settings/page.tsx`}
      </pre>
      <p>
        In the structure above, any user navigating to <code>/login</code> will hit the <code>(auth)</code> group, while navigating to <code>/</code> or <code>/settings</code> will hit the <code>(dashboard)</code> group.
      </p>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>2. The Authentication Boundary</h2>
      <p>
        Your <code>(dashboard)/layout.tsx</code> acts as the fortress wall. Since it's a Server Component, you can verify the user's session securely on the server before sending a single byte of the dashboard UI to the client. This prevents layout shifts and unauthorized "flashes" of content.
      </p>
      <pre style={{ padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: '8px', fontSize: '0.875rem', overflowX: 'auto' }}>
{`import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import { Sidebar } from '@/components/Sidebar';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar user={session.user} />
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}`}
      </pre>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>3. The Dashboard Shell Architecture</h2>
      <p>
        Dashboard layouts are challenging because they must balance dense information with clean aesthetics. A standard approach uses a fixed sidebar navigation with a flexible main content area.
      </p>
      <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
        <DocsBlueprintCard id="zenix-dashboard" title="Zenix Dashboard Architecture" category="Dashboard" />
      </div>
      <p style={{ marginTop: '1rem', fontSize: '0.875rem', opacity: 0.6, textAlign: 'center' }}>Example: The Zenix Dashboard Blueprint showcasing a dense, data-rich shell.</p>
      
      <p style={{ marginTop: '2rem' }}>
        When designing the Sidebar, ensure it collapses smoothly on mobile devices. Use CSS Grid or Flexbox to maintain fixed constraints for the sidebar while allowing the main content to fill the remaining viewport.
      </p>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>4. Data Fetching and React Suspense</h2>
      <p>
        SaaS dashboards are data-heavy. If you await all database queries at the page level, the user will stare at a blank screen until the slowest query resolves. Instead, leverage React Suspense to stream individual components.
      </p>
      <pre style={{ padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: '8px', fontSize: '0.875rem', overflowX: 'auto' }}>
{`import { Suspense } from 'react';
import { RevenueChart, RevenueSkeleton } from '@/components/RevenueChart';
import { RecentUsers, UsersSkeleton } from '@/components/RecentUsers';

export default function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Suspense fallback={<RevenueSkeleton />}>
        <RevenueChart />
      </Suspense>
      <Suspense fallback={<UsersSkeleton />}>
        <RecentUsers />
      </Suspense>
    </div>
  );
}`}
      </pre>
      <p>
        By isolating data fetching into the components themselves (e.g., <code>RevenueChart</code> performs its own <code>await fetchRevenue()</code>), the page shell loads instantly, and the widgets pop in as their data resolves.
      </p>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>5. Theme Systems and Dark Mode</h2>
      <p>
        Modern SaaS tools are expected to support deep theme customization. Hardcoding colors using Tailwind utility classes (e.g., <code>bg-blue-500</code>) becomes a maintenance nightmare. Instead, use CSS variables for your design tokens.
      </p>
      <pre style={{ padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: '8px', fontSize: '0.875rem', overflowX: 'auto' }}>
{`:root {
  --background: #ffffff;
  --surface: #f8fafc;
  --primary: #0ea5e9;
  --text-main: #0f172a;
}

[data-theme='dark'] {
  --background: #0f172a;
  --surface: #1e293b;
  --primary: #38bdf8;
  --text-main: #f8fafc;
}`}
      </pre>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>Conclusion</h2>
      <p>
        Building a production-ready SaaS dashboard from scratch requires hundreds of hours of architectural planning, accessibility testing, and component engineering. You have to handle responsive sidebars, robust routing boundaries, Suspense fallbacks, and a comprehensive theme engine.
      </p>

      <hr style={{ margin: '4rem 0', borderColor: 'var(--zx-elevated)' }} />

      <div style={{ background: 'var(--zx-surface)', border: '1px solid var(--zx-elevated)', padding: '3rem', borderRadius: '16px', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 1rem', fontSize: '2rem' }}>Skip the boilerplate. Start building your product.</h2>
        <p style={{ margin: '0 auto 2rem', opacity: 0.8, maxWidth: '600px', fontSize: '1.125rem' }}>
          Instead of building this entire structure manually, you can start with the Zenix Dashboard blueprint. It includes a responsive shell, dark mode, layout animations, and the exact App Router structure detailed in this guide.
        </p>
        <code style={{ display: 'inline-block', padding: '1rem 2rem', background: 'var(--zx-background)', borderRadius: '8px', marginBottom: '2rem', color: 'var(--zx-primary)', fontSize: '1.125rem', fontWeight: 600, border: '1px solid var(--zx-elevated)' }}>
          npx zenix-ui add zenix-dashboard
        </code>
        <div>
          <Link href="/blueprints/zenix-dashboard" style={{ textDecoration: 'none' }}>
            <Button size="lg">Preview Dashboard Blueprint</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
