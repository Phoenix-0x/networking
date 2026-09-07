import React, { useState, useEffect, useRef } from 'react';
import { config } from './config.js';
import { slides } from './presentations/Networking.jsx';
import SystemInitIntro from './components/SystemInitIntro.jsx';
import ShutdownSequence from './components/ShutdownSequence.jsx';
import ConfirmShutdown from './components/ConfirmShutdown.jsx';
import FloatingToolkit from './components/Toolkit/FloatingToolkit.jsx';
import AmbientBackground from './components/AmbientBackground.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import ClickSpark from './components/react-bits/Animations/ClickSpark/ClickSpark.jsx';
import { audio } from './utils/audioEngine';

function App() {
  const totalSlides = slides.length;

  const [currentSlide, setCurrentSlide] = useState(() => {
    const saved = localStorage.getItem("networking_slide_index");
    let initial = saved ? parseInt(saved, 10) : 0;
    if (initial >= totalSlides) initial = 0;
    return initial;
  });

  const [introFinished, setIntroFinished] = useState(() => {
    const saved = localStorage.getItem("networking_slide_index");
    const initial = saved ? parseInt(saved, 10) : 0;
    return initial > 0;
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const [shutdownActive, setShutdownActive] = useState(false);

  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    localStorage.setItem("networking_slide_index", currentSlide);
    
    
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    if (currentSlide < totalSlides - 1) {
      audio.init();
      audio.playSlideChange(true);
      setIsAnimating(true);
      setCurrentSlide(s => s + 1);
    }
  };

  const prevSlide = () => {
    if (isAnimating) return;
    if (currentSlide > 0) {
      audio.init();
      audio.playSlideChange(false);
      setIsAnimating(true);
      setCurrentSlide(s => s - 1);
    }
  };

  useEffect(() => {
    const initFullscreen = () => {
      if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
      document.removeEventListener('click', initFullscreen);
      document.removeEventListener('keydown', initFullscreen);
      document.removeEventListener('touchstart', initFullscreen);
    };

    document.addEventListener('click', initFullscreen);
    document.addEventListener('keydown', initFullscreen);
    document.addEventListener('touchstart', initFullscreen);

    const handleKeyDown = (e) => {
      if (!introFinished) return;
      if (["ArrowRight", " ", "PageDown"].includes(e.key)) {
        e.preventDefault();
        nextSlide();
      }
      if (["ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        prevSlide();
      }
    };

    const handleTouchStart = (e) => {
      touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      if (!introFinished) return;
      const touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;
      if (touchEndX < touchStartX.current - swipeThreshold) {
        nextSlide();
      }
      if (touchEndX > touchStartX.current + swipeThreshold) {
        prevSlide();
      }
    };

    const handleContextMenu = (e) => e.preventDefault();

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener('click', initFullscreen);
      document.removeEventListener('keydown', initFullscreen);
      document.removeEventListener('touchstart', initFullscreen);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [isAnimating, currentSlide, totalSlides, introFinished]);

  const handleShutdownComplete = () => {
    localStorage.removeItem("networking_slide_index");
    setShutdownActive(false);
    setCurrentSlide(0);
    setIntroFinished(false);
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;
  const currentSlideObj = slides[currentSlide] || slides[0];
  const themeColor = config.theme.colors[currentSlideObj.color] || config.theme.colors.cyan;

  return (
    <ClickSpark
      sparkColor={themeColor.primary}
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={500}
    >
      <CustomCursor />
      
      {/* System Init Intro (boot screen) */}
      {!introFinished && <SystemInitIntro onComplete={() => setIntroFinished(true)} />}

      {/* Shutdown confirmation modal */}
      {showConfirm && (
        <ConfirmShutdown
          onConfirm={() => { setShowConfirm(false); setShutdownActive(true); }}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      {/* Shutdown sequence overlay */}
      {shutdownActive && <ShutdownSequence onComplete={handleShutdownComplete} />}

      {/* Ambient Background */}
      <AmbientBackground themeColor={themeColor.primary} />

      {/* UI Overlay */}
      <div className="progress-container">
        <div id="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      {/* System Controls (Top Right) */}
      {introFinished && (
        <div style={{ position: 'fixed', top: '24px', right: '32px', zIndex: 10000, display: 'flex', gap: '12px' }}>
          <button
            onClick={() => {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(console.error);
              } else {
                if (document.exitFullscreen) document.exitFullscreen();
              }
            }}
            style={{
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'rgba(15, 15, 18, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)',
              color: 'rgba(255, 255, 255, 0.6)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)', transition: 'all 0.2s ease'
            }}
            onMouseOver={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'rgba(25, 25, 30, 0.6)'; }}
            onMouseOut={e => { e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(15, 15, 18, 0.4)'; }}
            title="Toggle Fullscreen"
          >
            <i className="fa-solid fa-expand"></i>
          </button>
          
          <button
            onClick={() => setShowConfirm(true)}
            style={{
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.2)',
              color: 'var(--rose)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)', transition: 'all 0.2s ease'
            }}
            onMouseOver={e => { e.currentTarget.style.background = 'rgba(244, 63, 94, 0.2)'; e.currentTarget.style.borderColor = 'rgba(244, 63, 94, 0.4)'; }}
            onMouseOut={e => { e.currentTarget.style.background = 'rgba(244, 63, 94, 0.1)'; e.currentTarget.style.borderColor = 'rgba(244, 63, 94, 0.2)'; }}
            title="Terminate Session"
          >
            <i className="fa-solid fa-power-off"></i>
          </button>
        </div>
      )}

      <div className="virtual-controls">
        <button className="control-btn" id="btn-prev" onClick={prevSlide}><i className="fa-solid fa-chevron-left"></i></button>
        <button className="control-btn" id="btn-next" onClick={nextSlide}><i className="fa-solid fa-chevron-right"></i></button>
      </div>

      {/* Presentation Deck — only mount after intro so IntersectionObserver fires correctly */}
      {introFinished && (
        <div id="deck">
          {slides.map((slideObj, index) => {
            const SlideComponent = slideObj.component;
            const isLast = index === slides.length - 1;
            return (
              <SlideComponent
                key={index}
                active={index === currentSlide}
                {...(isLast ? { onTerminate: () => setShowConfirm(true) } : {})}
              />
            );
          })}
        </div>
      )}
      
      {/* Interactive Toolkit (Assistive Touch) */}
      {introFinished && <FloatingToolkit currentSlide={currentSlide} />}
    </ClickSpark>
  );
}

export default App;
