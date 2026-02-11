import { Container, Row, Col } from "react-bootstrap";
import "../../shared-styling.css";
import "./GraphicDesign.css";

// Your images are in: public/graphic-design/*
const gisFlyers = [
  { src: "/graphic-design/littleRevealFlyer.png", alt: "Big Little Reveal Flyer 1" },
  { src: "/graphic-design/bigReveal1.png", alt: "Big Little Reveal Flyer 2" },
  { src: "/graphic-design/networking1.png", alt: "Networking Event Flyer" },
  { src: "/graphic-design/aetna1.png", alt: "Aetna Meeting Flyer" },
  { src: "/graphic-design/newYorkLife1.png", alt: "New York Life Meeting Flyer" },
  { src: "/graphic-design/bidNightFlyer.png", alt: "Big Night Flyer" },
  { src: "/graphic-design/animalShelterFlyer.png", alt: "Animal Shelter Event Flyer" },
  { src: "/graphic-design/volunteeringFlyer.png", alt: "Volunteering Flyer" },
  { src: "/graphic-design/notepadDesign.png", alt: "GIS Notepad Design" },
];

const locFlyers = [
  { src: "/graphic-design/mtBonnell.png", alt: "Sunset Flyer" },
  { src: "/graphic-design/enchantedRock.png", alt: "Enchanted Rock Campout Flyer" },
  { src: "/graphic-design/zilkerSocial.png", alt: "Zilker Park Flyer" },
  { src: "/graphic-design/pedernales.png", alt: "Pedernales Backpacking Flyer" },
  { src: "/graphic-design/mcKinney.png", alt: "McKinney Campout Flyer" },
  { src: "/graphic-design/fishingTrip.png", alt: "Fishing Trip Flyer" },
  { src: "/graphic-design/LOCschedule2025.png", alt: "LOC Schedule Flyer" },
  { src: "/graphic-design/joinLOC.png", alt: "Join LOC Flyer" },
  { src: "/graphic-design/pickleball5.png", alt: "Pickleball Flyer" },
  { src: "/graphic-design/greenbeltHike.png", alt: "Greenbelt Hike Flyer" },
];

function FlyerGrid({ items }) {
  return (
    <Row className="g-4">
      {items.map((item, idx) => (
        <Col key={`${item.src}-${idx}`} xs={12} sm={6} md={4}>
          <div className="flyer-card">
            <img className="flyer-img" src={item.src} alt={item.alt} loading="lazy" />
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default function GraphicDesign() {
  return (
    <Container className="page-styling py-5">
      {/* This wrapper is what limits width to ~70% and centers */}
      <div className="graphicdesign-wrap">
        <h2 className="mb-2">Graphic Design</h2>
        <p className="piano-text mb-4">
          Disclaimer: These flyers are made using Canva (free version).
        </p>

        <div className="item-styling mb-5">
          <h3 className="mb-3">Gamma Iota Sigma Marketing Director</h3>
          <FlyerGrid items={gisFlyers} />
        </div>

        <div className="item-styling">
          <h3 className="mb-3">Longhorn Outdoors Club Officer</h3>
          <FlyerGrid items={locFlyers} />
        </div>
      </div>
    </Container>
  );
}
