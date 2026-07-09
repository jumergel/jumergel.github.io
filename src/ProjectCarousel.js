// MiniHero.jsx
import { useEffect, useRef, useState } from "react";

export default function MiniHero({ slides, height = "58vh", interval = 5000 }) {
  const [i, setI] = useState(0),
    n = slides.length,
    go = (d) => setI((i + d + n) % n);

  const pausedRef = useRef(false);
  const [hoverSide, setHoverSide] = useState(null);
  const containerRef = useRef(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const bubblePos = useRef({ x: 0, y: 0 });
  const [bubbleXY, setBubbleXY] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;

    const loop = () => {
      bubblePos.current.x = lerp(bubblePos.current.x, mousePos.current.x, 0.06);
      bubblePos.current.y = lerp(bubblePos.current.y, mousePos.current.y, 0.06);

      setBubbleXY({
        x: bubblePos.current.x,
        y: bubblePos.current.y,
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    if (!interval || n <= 1) return;
    const t = setInterval(() => {
      if (!pausedRef.current) setI((prev) => (prev + 1) % n);
    }, interval);
    return () => clearInterval(t);
  }, [interval, n]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mousePos.current = { x, y };

    const third = rect.width / 3;
    if (x < third) setHoverSide('left');
    else if (x > third * 2) setHoverSide('right');
    else setHoverSide(null);
  };

  const handleMouseLeave = () => {
    setHoverSide(null);
    pausedRef.current = false;
  };

  const handleClick = () => {
    if (hoverSide === 'left') go(-1);
    else if (hoverSide === 'right') go(1);
  };

  return (
    <div
      ref={containerRef}
      className="mini-hero"
      style={{ height, cursor: hoverSide ? 'pointer' : 'default' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={handleMouseLeave}
      onFocusCapture={() => (pausedRef.current = true)}
      onBlurCapture={() => (pausedRef.current = false)}
      onClick={handleClick}
    >
      {slides.map((s, k) => (
        <div
          key={s.id}
          className={`carousel-slide ${k === i ? "on" : ""}`}
          style={{ backgroundImage: `url(${s.imageUrl})` }}
        >
          <div className="carousel-scrim" />
          <div className="carousel-content">
            <h2 className="carousel-title">{s.title}</h2>
            {s.description && <p className="carousel-description">{s.description}</p>}
            {s.techLine && <p className="carousel-tech">{s.techLine}</p>}
          </div>
        </div>
      ))}

      {hoverSide && (
        <div style={{
          position: 'absolute',
          left: bubbleXY.x,
          top: bubbleXY.y,
          transform: 'translate(-50%, -50%)',
          background: 'white',
          color: '#1f2227',
          borderRadius: '50px',
          padding: '0.6rem 1.4rem',
          fontWeight: 400,
          fontSize: '0.95rem',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          zIndex: 10,
        }}>
          {hoverSide === 'left' ? 'Previous' : 'Next'}
        </div>
      )}

      <div className="carousel-dots">
        {slides.map((_, k) => (
          <button
            key={k}
            className={`carousel-dot ${k === i ? "on" : ""}`}
            onClick={() => setI(k)}
            aria-label={`Go to slide ${k + 1}`}
          />
        ))}
      </div>
    </div>
  );
}