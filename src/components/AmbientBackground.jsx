import React from 'react';
import Aurora from './react-bits/Backgrounds/Aurora/Aurora';
import LightRays from './react-bits/Backgrounds/LightRays/LightRays';
import DriftingOrbs from './DriftingOrbs';
import { config } from '../config.js';

export default function AmbientBackground({ themeColor }) {
  const baseColor = themeColor || '#00FFF0';
  
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden', pointerEvents: 'none', background: 'var(--bg-base)' }}>
      
      {/* Base Aurora - Subdued, dark, ambient */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, opacity: 0.12, mixBlendMode: 'lighten' }}>
        <Aurora 
          colorStops={['#1e1b4b', baseColor, '#030712']} 
          amplitude={0.5} 
          blend={0.9} 
        />
      </div>

      {/* Physics-driven, dynamically sized drifting glowing Orbs (Big, Medium, Small) */}
      <DriftingOrbs baseColor={baseColor} count={3} />

      {/* Light Rays - Sweeping lighting effects using screen blend mode for pure light addition */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3, opacity: 0.12, mixBlendMode: 'screen' }}>
        <LightRays 
          raysOrigin="bottom-center" 
          raysColor={baseColor} 
          raysSpeed={0.15} 
          pulsating={true} 
          followMouse={false} 
        />
      </div>
      
    </div>
  );
}
