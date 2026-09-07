import React, { useEffect, useRef, useState } from 'react';

export default function CyberCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  const requestRef = useRef(null);
  // Track instantaneous mouse coordinates
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  // Track smoothed ring coordinates
  const ringPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect coarse pointer (touch device) on mount
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    // 1. Instantly update the dot and track target for the ring
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    // 2. Click states
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // 3. Hover detection over interactive elements
    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // 4. Window bounds detection
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // 5. High-performance Render Loop for the Ring
    const updateRing = () => {
      // Calculate delta
      const dx = mouse.current.x - ringPos.current.x;
      const dy = mouse.current.y - ringPos.current.y;
      
      // Interpolate with a snappy lerp factor (0.25 feels premium)
      ringPos.current.x += dx * 0.25;
      ringPos.current.y += dy * 0.25;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      requestRef.current = requestAnimationFrame(updateRing);
    };
    
    requestRef.current = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isVisible]);

  // Premium transitions and transforms
  const ringSize = isHovering ? 48 : isClicking ? 20 : 32;
  const ringBorder = isHovering ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.3)';
  const ringBg = isClicking ? 'rgba(0, 242, 254, 0.2)' : isHovering ? 'rgba(0, 242, 254, 0.05)' : 'transparent';
  const dotScale = isHovering ? 'scale(0)' : isClicking ? 'scale(1.5)' : 'scale(1)';

  if (isTouch) return null;

  return (
    <>
      <div 
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${ringSize}px`,
          height: `${ringSize}px`,
          border: ringBorder,
          borderRadius: '50%',
          backgroundColor: ringBg,
          pointerEvents: 'none',
          zIndex: 99999999, // Below ClickSpark, above everything else
          opacity: isVisible ? 1 : 0,
          willChange: 'transform, width, height, background-color, border',
          transition: 'width 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.2s, border 0.2s, opacity 0.3s',
        }}
      />
      <div 
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 100000000,
          opacity: isVisible ? 1 : 0,
          boxShadow: '0 0 10px rgba(0, 242, 254, 0.8)',
          willChange: 'transform, opacity',
          transition: 'opacity 0.3s',
        }}
      >
        <div style={{
           width: '100%', 
           height: '100%', 
           borderRadius: '50%', 
           backgroundColor: 'inherit',
           transform: dotScale,
           transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }} />
      </div>
    </>
  );
}
