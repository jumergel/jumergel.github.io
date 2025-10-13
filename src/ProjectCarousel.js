// MiniHero.jsx
import { useState } from "react";

export default function MiniHero({ slides, height = "58vh" }) {
  const [i, setI] = useState(0), n = slides.length, go = d => setI((i+d+n)%n);
  return (
    <div className="mini-hero" style={{ height }}>
      {slides.map((s, k) => (
        <div key={s.id} className={`carousel-slide ${k===i?"on":""}`} style={{ backgroundImage:`url(${s.imageUrl})` }}>
          <div className="carousel-scrim" />
          <div className="carousel-content">
            <h2 className="carousel-title">{s.title}</h2>
            {s.description && <p className="carousel-description">{s.description}</p>}
            {s.techLine && <p className="carousel-tech">{s.techLine}</p>}
          </div>
        </div>
      ))}
      <button className="carousel-arrow l" onClick={()=>go(-1)}>‹</button>
      <button className="carousel-arrow r" onClick={()=>go(1)}>›</button>
      <div className="carousel-dots">
        {slides.map((_, k)=><button key={k} className={`carousel-dot ${k===i?"on":""}`} onClick={()=>setI(k)} />)}
      </div>
    </div>
  );
}
