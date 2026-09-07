import React, { useEffect, useRef } from 'react';

// Hex to RGB helper to apply opacity in gradients
const hexToRgb = (hex) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? `${parseInt(m[1], 16)}, ${parseInt(m[2], 16)}, ${parseInt(m[3], 16)}` : '0, 242, 254';
};

export default function DriftingOrbs({ baseColor = '#00f2fe', count = 3 }) {
  const containerRef = useRef(null);
  const orbsRef = useRef([]);
  const orbElementsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Initialize physics state
    const orbs = [];
    for (let i = 0; i < count; i++) {
      // Create variable sizes: 1 huge, 1 medium, 1 small
      let radius;
      if (i === 0) radius = height * 0.45; // Big AF (near half screen height)
      else if (i === 1) radius = height * 0.25; // Medium
      else radius = height * 0.12; // Small

      orbs.push({
        id: i,
        x: Math.random() * (width - radius * 2) + radius,
        y: Math.random() * (height - radius * 2) + radius,
        vx: (Math.random() - 0.5) * 1.2, // Very slow drifting velocity
        vy: (Math.random() - 0.5) * 1.2,
        baseRadius: radius,
        radius: radius,
        pulsePhase: Math.random() * Math.PI * 2, // Expansion/contraction phase
        pulseSpeed: 0.003 + Math.random() * 0.005 // Gentle pulsing
      });
    }
    orbsRef.current = orbs;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let animationId;
    let lastTime = performance.now();

    const loop = (time) => {
      animationId = requestAnimationFrame(loop);
      const dt = Math.min((time - lastTime) / 16.66, 2); // normalize to ~60fps
      lastTime = time;

      const currentOrbs = orbsRef.current;
      const elements = orbElementsRef.current;

      // Update positions and boundaries
      for (let i = 0; i < currentOrbs.length; i++) {
        let orb = currentOrbs[i];

        // Pulse logic (expand/contract elastically)
        orb.pulsePhase += orb.pulseSpeed * dt;
        const scale = 1 + Math.sin(orb.pulsePhase) * 0.15; // +/- 15% size variation
        orb.radius = orb.baseRadius * scale;

        // Position update
        orb.x += orb.vx * dt;
        orb.y += orb.vy * dt;

        // Wall collisions
        if (orb.x - orb.radius < 0) {
          orb.x = orb.radius;
          orb.vx *= -1;
        } else if (orb.x + orb.radius > width) {
          orb.x = width - orb.radius;
          orb.vx *= -1;
        }

        if (orb.y - orb.radius < 0) {
          orb.y = orb.radius;
          orb.vy *= -1;
        } else if (orb.y + orb.radius > height) {
          orb.y = height - orb.radius;
          orb.vy *= -1;
        }
      }

      // Circle vs Circle Collisions
      for (let i = 0; i < currentOrbs.length; i++) {
        for (let j = i + 1; j < currentOrbs.length; j++) {
          let o1 = currentOrbs[i];
          let o2 = currentOrbs[j];
          let dx = o2.x - o1.x;
          let dy = o2.y - o1.y;
          let dist = Math.hypot(dx, dy);
          let minDist = o1.radius + o2.radius;

          if (dist < minDist) {
            // Resolve overlap (prevent sticking)
            let angle = Math.atan2(dy, dx);
            let overlap = minDist - dist;
            let pushX = Math.cos(angle) * overlap * 0.5;
            let pushY = Math.sin(angle) * overlap * 0.5;
            o1.x -= pushX;
            o1.y -= pushY;
            o2.x += pushX;
            o2.y += pushY;

            // Elastic collision
            let nx = dx / dist;
            let ny = dy / dist;
            let p = 2 * (o1.vx * nx + o1.vy * ny - o2.vx * nx - o2.vy * ny) / 2;
            o1.vx -= p * nx;
            o1.vy -= p * ny;
            o2.vx += p * nx;
            o2.vy += p * ny;
          }
        }
      }

      // Update DOM
      for (let i = 0; i < currentOrbs.length; i++) {
        const el = elements[i];
        if (el) {
          const orb = currentOrbs[i];
          
          if (!el.dataset.sized) {
            el.style.width = `${orb.baseRadius * 2}px`;
            el.style.height = `${orb.baseRadius * 2}px`;
            el.dataset.sized = 'true';
          }

          const x = orb.x - orb.baseRadius; // Center anchor
          const y = orb.y - orb.baseRadius;
          const scale = orb.radius / orb.baseRadius;
          
          el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        }
      }
    };

    animationId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [count]);

  const rgbColor = hexToRgb(baseColor);

  return (
    <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }}>
      {Array.from({ length: count }).map((_, i) => {
        // Create slight static hue shifts so they aren't identical colors, but still strictly respect the base theme mood
        const hueShift = i === 0 ? 0 : (i === 1 ? 25 : -15);
        // Vary the opacity based on size (biggest is most transparent)
        const opacity = i === 0 ? 0.25 : (i === 1 ? 0.35 : 0.45);
        
        return (
          <div
            key={i}
            ref={el => orbElementsRef.current[i] = el}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              borderRadius: '50%',
              opacity: opacity,
              background: `radial-gradient(circle at center, rgba(${rgbColor}, 1) 0%, rgba(${rgbColor}, 0) 65%)`,
              filter: `blur(80px) hue-rotate(${hueShift}deg)`, // Heavy blur for faded edges
              willChange: 'transform'
            }}
          />
        );
      })}
    </div>
  );
}
