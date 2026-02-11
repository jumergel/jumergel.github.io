import { Container } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";
import "../../shared-styling.css";

export default function Piano() {
  return (
    <Container className=" page-styling py-5">
      <h2 className="mb-4 ">My Piano</h2>

      <p className="piano-text">
        Check out my videos here!
      </p>
      <div className="item-styling">

        <a
            href="https://www.youtube.com/watch?v=Qjk8iVr3QZ0&list=PLrhjlVPa_TboZsFVKOmCLWaiHHVZRgvOc"
            target="_blank"
            rel="noopener noreferrer"
            className="piano-youtube-link"
            aria-label="YouTube playlist"
        >
            <FaYoutube /></a>
        </div>

      <h2 className="piano-section">Pieces I've Learned</h2>
      <p>Chopin Nocturne in C# Minor — Chopin</p>
      <p>Jeux D’eau — Ravel</p>
      <p>Prelude — Blumenfeld</p>
      <p>River Flows in You — Yiruma</p>
      <p>Unrest — ?</p>
      <p>The Swan (piano & cello duet)</p>

      <h2 className="piano-section">Currently Learning</h2>
      <p>Summertime — Pianos of Cha’an (Gershwin arrangement)</p>

      {/*audio (autoplay may be blocked by browser) */}
      {/* 
      <audio autoPlay loop>
        <source src={pianoAudio} type="audio/mp3" />
      </audio>
      */}
    </Container>
  );
}
