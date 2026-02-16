// MiniHero.jsx
import { useEffect, useRef, useState } from "react";

export default function MiniHero({ slides, height = "58vh", interval = 5000 }) {
  const [i, setI] = useState(0),
    n = slides.length,
    go = (d) => setI((i + d + n) % n);

  // NEW: autoplay + pause on hover/focus
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!interval || n <= 1) return;

    const t = setInterval(() => {
      if (!pausedRef.current) setI((prev) => (prev + 1) % n);
    }, interval);

    return () => clearInterval(t);
  }, [interval, n]);

  return (
    <div
      className="mini-hero"
      style={{ height }}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onFocusCapture={() => (pausedRef.current = true)}
      onBlurCapture={() => (pausedRef.current = false)}
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

      <button className="carousel-arrow l" onClick={() => go(-1)} aria-label="Previous slide">
        ‹
      </button>
      <button className="carousel-arrow r" onClick={() => go(1)} aria-label="Next slide">
        ›
      </button>

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

