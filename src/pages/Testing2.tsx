import React, { useEffect, useRef, useState } from 'react';
import './Testing2.css';

export function Testing2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Word reveal logic
    const headline = document.getElementById('t2-headline');
    if (headline) {
      headline.innerHTML = '';
      const text = "We build secure offline messaging that keeps your conversations truly private.";
      const words = text.split(' ');
      words.forEach(function(word, i) {
        const span = document.createElement('span');
        span.className = 't2-word-reveal';
        span.textContent = word;
        span.style.animationDelay = (1 + i * 0.05) + 's';
        headline.appendChild(span);
        // add space
        headline.appendChild(document.createTextNode(' '));
      });
    }

    // Spotlight reveal
    const SPOTLIGHT_R = 260;
    const canvas = canvasRef.current;
    const imgLayer = imgLayerRef.current;
    if (!canvas || !imgLayer) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const mouse = { x: -999, y: -999 };
    const smooth = { x: -999, y: -999 };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;

    const loop = () => {
      smooth.x += (mouse.x - smooth.x) * 0.1;
      smooth.y += (mouse.y - smooth.y) * 0.1;

      // Parallax effect for the image wrapper
      const parallaxWrapper = document.getElementById('t2-parallax-wrapper');
      if (parallaxWrapper) {
        const moveX = (smooth.x - window.innerWidth / 2) * -0.015;
        const moveY = (smooth.y - window.innerHeight / 2) * -0.015;
        parallaxWrapper.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createRadialGradient(smooth.x, smooth.y, 0, smooth.x, smooth.y, SPOTLIGHT_R);
      grad.addColorStop(0, 'rgba(255,255,255,0.85)');
      grad.addColorStop(0.2, 'rgba(255,255,255,0.75)');
      grad.addColorStop(0.5, 'rgba(255,255,255,0.4)');
      grad.addColorStop(0.8, 'rgba(255,255,255,0.1)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');

      ctx.beginPath();
      ctx.arc(smooth.x, smooth.y, SPOTLIGHT_R, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      const dataUrl = canvas.toDataURL();
      imgLayer.style.webkitMaskImage = 'url(' + dataUrl + ')';
      (imgLayer.style as any).maskImage = 'url(' + dataUrl + ')';
      imgLayer.style.webkitMaskSize = '100% 100%';
      (imgLayer.style as any).maskSize = '100% 100%';

      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="t2-hero-container">
      {/* SPLASH */}
      <div className="t2-splash" id="splash">
        <div className="t2-splash-row t2-splash-row-top">
          <div className="t2-splash-box"></div><div className="t2-splash-box"></div><div className="t2-splash-box"></div><div className="t2-splash-box"></div><div className="t2-splash-box"></div>
        </div>
        <div className="t2-splash-row t2-splash-row-bottom">
          <div className="t2-splash-box"></div><div className="t2-splash-box"></div><div className="t2-splash-box"></div><div className="t2-splash-box"></div><div className="t2-splash-box"></div>
        </div>
      </div>



      {/* HERO */}
      <main className="t2-hero">
        {/* Big text behind image */}
        <div className="t2-hero-big-text t2-creator-text-animate">
          <h2>Privacy</h2>
        </div>

        {/* Parallax Wrapper for images */}
        <div id="t2-parallax-wrapper" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
          {/* Base image */}
          <div className="t2-hero-base-img t2-hero-image-animate"
               style={{ backgroundImage: "url('/base.jpeg')" }}>
          </div>

          {/* Reveal layer */}
          <canvas ref={canvasRef} className="t2-reveal-canvas"></canvas>
          <div ref={imgLayerRef} className="t2-hero-reveal-img"
               style={{ backgroundImage: "url('/fire.jpeg')" }}>
          </div>
        </div>

        {/* Floating Pills (Cloud of features) */}
        <div className="t2-floating-pills">
          <div className="t2-pill testing-liquid-glass"><span className="t2-pill-dot"></span> Trusted by Apple</div>
          <div className="t2-pill testing-liquid-glass"><span className="t2-pill-dot"></span> AES-256 Encryption</div>
          <div className="t2-pill testing-liquid-glass"><span className="t2-pill-dot"></span> Zero-Knowledge</div>
          <div className="t2-pill testing-liquid-glass"><span className="t2-pill-dot"></span> Peer-to-Peer Mesh</div>
          <div className="t2-pill testing-liquid-glass"><span className="t2-pill-dot"></span> Trusted by Google</div>
          <div className="t2-pill testing-liquid-glass"><span className="t2-pill-dot"></span> No Central Servers</div>
          <div className="t2-pill testing-liquid-glass"><span className="t2-pill-dot"></span> Open Source</div>
          <div className="t2-pill testing-liquid-glass"><span className="t2-pill-dot"></span> End-to-End Secure</div>
          <div className="t2-pill testing-liquid-glass"><span className="t2-pill-dot"></span> Metadata Protected</div>
        </div>

        {/* Content */}
        <div className="t2-hero-content">
          <div className="t2-hero-content-inner">
            <h1 className="t2-hero-headline" id="t2-headline"></h1>
            <button className="t2-cta-btn t2-cta-animate">
              <span className="t2-cta-btn-bg"></span>
              <span className="t2-cta-btn-text">Get Early Access</span>
              <span className="t2-cta-btn-circle">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L13 5M13 5H6M13 5V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </main>
      
      {/* Spacer to give breathing room before the next section */}
      <div style={{ height: '25vh', backgroundColor: '#000000', width: '100%' }}></div>
    </div>
  );
}
