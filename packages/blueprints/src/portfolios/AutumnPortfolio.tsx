import React from 'react';
import { Surface, Container, Stack, Grid, Pattern } from '@zenixui/components';
import { BlueprintProps, RenderMode } from '@zenixui/core';

export interface AutumnPortfolioContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  essays: {
    title: string;
    viewAllText: string;
    articles: Array<{
      date: string;
      title: string;
      desc: string;
    }>;
  };
  contact: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const mockAutumnPortfolioContent: AutumnPortfolioContent = {
  hero: {
    title: "Hi, I'm Elena.",
    subtitle: "I weave stories through code.",
    description: "A creative developer and writer exploring the intersection of digital environments and human emotion."
  },
  about: {
    title: "My Journey",
    paragraphs: [
      "I started my career as a traditional graphic designer before discovering the endless possibilities of the web. I realized that the browser isn't just a document viewer—it's a canvas for interactive storytelling.",
      "Today, I focus on building digital spaces that feel warm, organic, and deeply personal, moving away from harsh rectangles into something more human."
    ]
  },
  essays: {
    title: "Recent Essays",
    viewAllText: "View All →",
    articles: [
      { date: 'Oct 12, 2026', title: 'The Death of the Rectangle', desc: 'Why modern web design must embrace organic shapes and natural flows.' },
      { date: 'Sep 04, 2026', title: 'Atmosphere in UI', desc: 'Using light, shadow, and motion to create emotional resonance.' },
      { date: 'Aug 22, 2026', title: 'Designing for Comfort', desc: 'A case study on building interfaces that reduce cognitive load and anxiety.' }
    ]
  },
  contact: {
    title: "Let's talk.",
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    buttonText: "Say Hello"
  }
};

export function AutumnPortfolio(props: Readonly<BlueprintProps<AutumnPortfolioContent | null>>) {
  // Gracefully fallback to mock content if not provided by the engine yet
  const data = props.content || mockAutumnPortfolioContent;

  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* HERO SECTION */}
      <Pattern.Root padded style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <Container size="md">
          <Pattern.Content gap="xl">
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', margin: 0, fontFamily: 'var(--zx-font-serif, serif)', fontWeight: 400, color: 'var(--zx-primary)', lineHeight: 1.1 }}>
              {data.hero.title}<br />{data.hero.subtitle}
            </h1>
            <p style={{ fontSize: '1.5rem', opacity: 0.8, lineHeight: 1.8, maxWidth: '650px', margin: 0 }}>
              {data.hero.description}
            </p>
          </Pattern.Content>
        </Container>
      </Pattern.Root>

      {/* ABOUT ME */}
      <Pattern.Root padded>
        <Grid columns={2} gap="xl" style={{ alignItems: 'center' }}>
          <Surface variant="card" style={{ height: '500px', borderRadius: '4rem 1rem 4rem 1rem', background: 'var(--zx-elevated)', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 70%, var(--zx-accent), transparent 50%)', opacity: 0.2 }} />
          </Surface>
          <div style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--zx-font-serif, serif)', fontWeight: 400, margin: '0 0 1.5rem' }}>{data.about.title}</h2>
            {data.about.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: 1.8, marginBottom: i === data.about.paragraphs.length - 1 ? 0 : '1.5rem' }}>
                {p}
              </p>
            ))}
          </div>
        </Grid>
      </Pattern.Root>

      {/* WRITING / ESSAYS */}
      <Pattern.Root padded>
        <Pattern.Content gap="xl">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--zx-elevated)', paddingBottom: '1rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--zx-font-serif, serif)', fontWeight: 400, margin: 0 }}>{data.essays.title}</h2>
            <span style={{ opacity: 0.7, cursor: props.mode === RenderMode.Interactive ? 'pointer' : 'default' }}>{data.essays.viewAllText}</span>
          </div>
          
          <Stack gap="lg">
            {data.essays.articles.map((article, i) => (
              <Surface key={i} variant="card" style={{ padding: '2.5rem', borderRadius: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', transition: 'transform 0.2s', cursor: props.mode === RenderMode.Interactive ? 'pointer' : 'default' }}>
                <div style={{ width: '100px', opacity: 0.5, fontSize: '0.9rem', flexShrink: 0 }}>{article.date}</div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--zx-font-serif, serif)', fontWeight: 400, margin: '0 0 0.5rem' }}>{article.title}</h3>
                  <p style={{ margin: 0, opacity: 0.7, lineHeight: 1.6 }}>{article.desc}</p>
                </div>
              </Surface>
            ))}
          </Stack>
        </Pattern.Content>
      </Pattern.Root>

      {/* CONTACT */}
      <Pattern.Root padded>
        <Container size="md">
          <Surface variant="glass" style={{ padding: '5rem 4rem', borderRadius: '4rem', textAlign: 'center', background: 'var(--zx-elevated)' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--zx-font-serif, serif)', fontWeight: 400, margin: '0 0 1.5rem' }}>{data.contact.title}</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '3rem' }}>{data.contact.description}</p>
            <button style={{ padding: '1.25rem 3.5rem', borderRadius: '3rem', border: 'none', background: 'var(--zx-accent)', color: 'var(--zx-background)', fontSize: '1.1rem', cursor: props.mode === RenderMode.Interactive ? 'pointer' : 'default' }}>
              {data.contact.buttonText}
            </button>
          </Surface>
        </Container>
      </Pattern.Root>
    </div>
  );
}
