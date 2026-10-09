import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamically import PresentationDeck with SSR disabled for clean client-side wheel and 3D animations
const PresentationDeck = dynamic(() => import('@/components/Presentation/PresentationDeck'), {
  ssr: false,
  loading: () => (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#040814',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#00d2ff',
      fontFamily: 'monospace',
      letterSpacing: '0.2em'
    }}>
      <div style={{ marginBottom: '1rem', fontSize: '0.85rem' }}>88&apos;S TECHNOLOGIES INC.</div>
      <div>INITIALIZING ENGINE...</div>
    </div>
  )
});

const COMPANY_DESCRIPTION = "88's Technologies Inc. is an independent software company based in Coquitlam, British Columbia, Canada. We build mobile apps, games, and AI-driven experiences — including QuestMandarin, an AI-powered Mandarin learning RPG, and the iOS apps HSK Prep (Learn Chinese), Block Puzzle, and Unqueue.";

export default function Index() {
  return (
    <>
      <Head>
        <meta name="description" content={COMPANY_DESCRIPTION} />
        <meta property="og:title" content="88's Technologies | Accelerating The Future" />
        <meta property="og:description" content={COMPANY_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://88stechnologies.com/" />
      </Head>

      <PresentationDeck />

      {/*
        Company profile rendered into the HTML so search engines and reviewers
        can verify the company. The 3D deck above remains the visual hero.
      */}
      <section
        aria-label="About 88's Technologies Inc."
        style={{
          backgroundColor: '#040814',
          color: '#c9d6e3',
          padding: '4rem 1.5rem',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}
      >
        <div style={{ maxWidth: 880, margin: '0 auto' }}>
          <h1 style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '1rem' }}>
            88&apos;s Technologies Inc.
          </h1>
          <p style={{ lineHeight: 1.7, marginBottom: '2rem' }}>{COMPANY_DESCRIPTION}</p>

          <h2 style={{ color: '#00d2ff', fontSize: '1.15rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>
            PRODUCTS
          </h2>
          <ul style={{ lineHeight: 2, marginBottom: '2rem', paddingLeft: '1.25rem' }}>
            <li>
              <a href="https://questmandarin.com" style={{ color: '#00d2ff' }}>QuestMandarin</a>
              {' '}— AI-driven Mandarin learning RPG (coming soon on iOS)
            </li>
            <li>HSK Prep (Learn Chinese) — iOS app</li>
            <li>Block Puzzle — iOS app</li>
            <li>Unqueue - Reclaim my Youth — iOS app</li>
            <li>MeowSort — cat-sorting puzzle game (coming soon)</li>
          </ul>

          <h2 style={{ color: '#00d2ff', fontSize: '1.15rem', letterSpacing: '0.15em', marginBottom: '1rem' }}>
            CONTACT
          </h2>
          <address style={{ fontStyle: 'normal', lineHeight: 2 }}>
            1224 Oxbow Way, Coquitlam, BC V3E 1M9, Canada<br />
            <a href="mailto:info@88stechnologies.com" style={{ color: '#00d2ff' }}>info@88stechnologies.com</a><br />
            <a href="tel:+17782316571" style={{ color: '#00d2ff' }}>+1 (778) 231-6571</a>
          </address>

          <nav style={{ marginTop: '2rem' }}>
            <a href="/about/" style={{ color: '#00d2ff', marginRight: '1.5rem' }}>About</a>
            <a href="/contact/" style={{ color: '#00d2ff' }}>Contact</a>
          </nav>
        </div>
      </section>
    </>
  );
}
