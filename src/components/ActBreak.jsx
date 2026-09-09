import React from 'react';
import { Slide } from './Slide.jsx';
import BlurText from './react-bits/BlurText/BlurText.jsx';
import DecryptedText from './react-bits/DecryptedText/DecryptedText.jsx';

export const ActBreak = ({ active, actNumber, title, subtitle, color, icon }) => {
  return (
    <Slide active={active} color={color} alignCenter>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1rem' }}>
        <h2 className={`title-massive text-gradient grad-${color} stagger d-1`} style={{ fontSize: '1.5rem', letterSpacing: '8px', textTransform: 'uppercase', opacity: 0.8 }}>
          {active ? <DecryptedText text={actNumber} speed={80} maxIterations={2} sequential={true} animateOn="view" /> : actNumber}
        </h2>
        
        <div style={{ position: 'relative' }}>
          <i className={`fa-solid ${icon} stagger d-2`} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '14rem', opacity: 0.15, color: `var(--${color})`, filter: `drop-shadow(0 0 20px rgba(var(--${color}-rgb), 0.5))` }}></i>
          <h1 className="stagger d-3" style={{ position: 'relative', fontSize: '5rem', fontWeight: 800, margin: 0, textShadow: `0 0 40px rgba(var(--${color}-rgb), 0.3)` }}>
            {title}
          </h1>
        </div>

        {active && (
          <BlurText 
            text={subtitle} 
            delay={300} 
            animateBy="words" 
            direction="bottom" 
            className={`stagger d-4`} 
            style={{ fontSize: '1.2rem', color: 'var(--text-dim)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '1rem' }}
          />
        )}
      </div>
    </Slide>
  );
};
