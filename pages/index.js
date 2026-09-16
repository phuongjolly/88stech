import React from 'react';
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
      alignItems: 'center',
      justifyContent: 'center',
      color: '#00d2ff',
      fontFamily: 'monospace',
      letterSpacing: '0.2em'
    }}>
      INITIALIZING ENGINE...
    </div>
  )
});

export default function Index() {
  return <PresentationDeck />;
}
