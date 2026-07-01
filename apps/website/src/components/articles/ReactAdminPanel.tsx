import React from 'react';
import Link from 'next/link';
import { Button } from '@zenixui/components';
import { DocsBlueprintCard } from '../DocsBlueprintCard';

export function ReactAdminPanel() {
  return (
    <div className="article-content" style={{ fontSize: '1.125rem', lineHeight: 1.8, opacity: 0.9 }}>
      <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2rem' }}>
        Admin panels are the control rooms of modern applications. Unlike consumer-facing web apps, admin panels prioritize data density, high-speed interactions, and complex state management. In this article, we dive into the core principles of building robust, enterprise-grade React admin panels that don't crumble under the weight of massive data tables.
      </p>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>1. The Role of the Admin Panel</h2>
      <p>
        An admin panel is fundamentally different from a marketing site or a standard B2C application. While consumer apps focus on engagement and emotional design, admin panels are utility-driven. Users spend hours in these interfaces managing users, fulfilling orders, and analyzing metrics. The architecture must prioritize performance and predictability.
      </p>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>2. High-Performance Data Tables</h2>
      <p>
        The heart of any admin panel is the data table. Rendering 1,000 rows of DOM elements will bring any browser to its knees. To build an enterprise-grade table, you must implement virtualization (windowing).
      </p>
      <pre style={{ padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: '8px', fontSize: '0.875rem', overflowX: 'auto' }}>
{`import { useVirtualizer } from '@tanstack/react-virtual';

export function VirtualizedUsersTable({ users }) {
  const parentRef = React.useRef(null);
  
  const rowVirtualizer = useVirtualizer({
    count: users.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35, // 35px per row
  });

  return (
    <div ref={parentRef} style={{ height: '400px', overflow: 'auto' }}>
      <div style={{ height: \`\${rowVirtualizer.getTotalSize()}px\`, position: 'relative' }}>
        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
          <div key={virtualRow.index} style={{
            position: 'absolute', top: 0, left: 0, width: '100%',
            height: \`\${virtualRow.size}px\`,
            transform: \`translateY(\${virtualRow.start}px)\`
          }}>
            {users[virtualRow.index].name}
          </div>
        ))}
      </div>
    </div>
  );
}`}
      </pre>
      <p>
        Libraries like <code>@tanstack/react-table</code> paired with virtualization ensure that only the rows currently visible on the screen are rendered in the DOM, keeping memory usage low and scrolling buttery smooth.
      </p>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>3. Complex State Management</h2>
      <p>
        Admin panels often require syncing state across the URL, the local cache, and the remote server. For instance, filtering a user list by "Status: Active" should immediately update the URL so the view can be shared or bookmarked.
      </p>
      <p>
        Rely on URL search parameters as your single source of truth for filters, pagination, and sorting. Use libraries like React Query or SWR to handle server state, caching, and background invalidation.
      </p>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>4. Role-Based Access Control (RBAC)</h2>
      <p>
        Not every user should see every button. You need a centralized way to handle permissions without scattering <code>if (user.role === 'admin')</code> throughout your entire codebase.
      </p>
      <pre style={{ padding: '1.5rem', background: 'var(--zx-elevated)', borderRadius: '8px', fontSize: '0.875rem', overflowX: 'auto' }}>
{`// Create a generic permission boundary
export function RequirePermission({ permission, children, fallback = null }) {
  const { hasPermission } = useAuth();
  
  if (!hasPermission(permission)) {
    return fallback;
  }
  
  return children;
}

// Usage in your admin panel
<RequirePermission permission="users:delete">
  <Button variant="destructive">Delete User</Button>
</RequirePermission>`}
      </pre>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>5. Design Systems and Density</h2>
      <p>
        Consumer apps love whitespace. Admin panels hate it. When designing your components, you need a highly dense design system that can display maximum information without feeling cluttered.
      </p>
      <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
        <DocsBlueprintCard id="ocean-dashboard" title="Admin Panel Architecture" category="Ocean Dashboard" />
      </div>
      <p style={{ marginTop: '1rem', fontSize: '0.875rem', opacity: 0.6, textAlign: 'center' }}>A highly structured layout prevents cognitive overload when analyzing complex data.</p>
      
      <p style={{ marginTop: '2rem' }}>
        Implement strict grid systems and rely heavily on typography hierarchy rather than large borders or padding to separate information.
      </p>

      <h2 style={{ marginTop: '3rem', fontSize: '2rem' }}>Conclusion</h2>
      <p>
        A great React admin panel is a feat of engineering. You are building complex data tables, managing intricate state synchronized with the URL, handling strict permissions, and designing for maximum data density.
      </p>

      <hr style={{ margin: '4rem 0', borderColor: 'var(--zx-elevated)' }} />

      <div style={{ background: 'var(--zx-surface)', border: '1px solid var(--zx-elevated)', padding: '3rem', borderRadius: '16px', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 1rem', fontSize: '2rem' }}>Need an admin panel yesterday?</h2>
        <p style={{ margin: '0 auto 2rem', opacity: 0.8, maxWidth: '600px', fontSize: '1.125rem' }}>
          Stop wasting weeks building data tables, sidebars, and authentication boundaries. Deploy a production-ready React Admin Panel blueprint that incorporates all these best practices out of the box.
        </p>
        <code style={{ display: 'inline-block', padding: '1rem 2rem', background: 'var(--zx-background)', borderRadius: '8px', marginBottom: '2rem', color: 'var(--zx-primary)', fontSize: '1.125rem', fontWeight: 600, border: '1px solid var(--zx-elevated)' }}>
          npx zenix-ui add midnight-dashboard
        </code>
        <div>
          <Link href="/blueprints/midnight-dashboard" style={{ textDecoration: 'none' }}>
            <Button size="lg">Preview Admin Blueprint</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
