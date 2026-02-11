import { Container } from "react-bootstrap";
import { FaFilm } from "react-icons/fa";
import "../../shared-styling.css";
import "./Movies.css";
import letterboxdLogo from "../../images/letterboxd.png";


export default function Movies() {
  return (
    <Container className="page-styling py-5">
      <h2 className="mb-4">Movies</h2>

      <p className="piano-text">Check out my letterboxd!</p>

      <div className="item-styling" style={{ marginBottom: "1.5rem" }}>
        <a
          href="https://letterboxd.com/lysitsa/"
          target="_blank"
          rel="noopener noreferrer"
          className="piano-youtube-link"
          aria-label="Letterboxd profile"
          style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
        >
          <img
            src={letterboxdLogo}
            alt="letterboxd"
            style={{ width: "50px", height: "auto" }}
          />
          <span style={{ fontSize: "1.1rem" }}>Letterboxd</span>
          <FaFilm />
        </a>
      </div>


      <div className="category life">
        <p>Amelie</p>
        <p>Life is Beautiful</p>
        <p>The Shawshank Redemption</p>
        <p>Asteroid City</p>
        <p>CHAPPiE</p>
        <p>Good Will Hunting</p>
        <p>The Hunt for the Wilderpeople</p>
        <p>Little Miss Sunshine</p>
        <p>Eternal Sunshine of the Spotless Mind</p>
        <p>Lion</p>
        <p>The Fountain</p>
      </div>


      <div className="category psychological-thriller">
        <p>Shutter Island</p>
        <p>Requiem for a Dream</p>
        <p>Anthropoid</p>
        <p>Tulip Fever</p>
        <p>Gone Girl</p>
        <p>Legends of the Fall</p>
        <p>System Crasher</p>
        <p>Interstellar</p>
        <p>Fight Club</p>
        <p>The Green Mile</p>
        <p>Adrift</p>
        <p>A Simple Favor</p>
        <p>Perfume</p>
        <p>Cold Mountain</p>
        <p>Inception</p>
        <p>The Silence of the Lambs</p>
        <p>The Girl with All the Gifts</p>
        <p>Dunkirk</p>
        <p>Oppenheimer</p>
        <p>American Psycho</p>
        <p>Black Swan</p>
        <p>The Promised Land</p>
        <p>The Spy who Dumped Me</p>
      </div>


      <div className="category heartwarming-comedy">
        <p>The Breakfast Club</p>
        <p>Forrest Gump</p>
        <p>I Am Dragon</p>
        <p>Moonstruck</p>
        <p>I WeirDO</p>
        <p>50 First Dates</p>
        <p>How to Lose a Guy in 10 Days</p>
        <p>The Holdovers</p>
        <p>Overboard</p>
      </div>


      <div className="category surf">
        <p>Surf&apos;s Up</p>
        <p>Chasing Mavericks</p>
        <p>Point Break</p>
        <p>View from a Blue Moon</p>
        <p>Surfer, Dude</p>
        <p>The Endless Summer</p>
        <p>Soul Surfer</p>
      </div>


      <div className="category romance">
        <p>Falling Into Place</p>
        <p>La La Land</p>
        <p>Titanic</p>
        <p>Sleepless in Seattle</p>
      </div>


      <div className="category true-story">
        <p>One Flew over the Cuckoo&apos;s Nest</p>
        <p>The Wolf of Wall Street</p>
        <p>Memoirs of a Geisha</p>
        <p>Chernobyl 1986</p>
        <p>Les Choristes</p>
        <p>Sully</p>
        <p>O Brother, Where art Thou</p>
        <p>American Animals</p>
      </div>


      <div className="category artistic">
        <p>Hugo</p>
        <p>Ponyo</p>
      </div>
    </Container>
  );
}
