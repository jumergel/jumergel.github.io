import { Container } from "react-bootstrap";
import "../../shared-styling.css";

export default function Reading() {
  return (
    <Container className="basic py-5 page-styling">
      
      <h1 className="mb-4 text-center">Favorite Books</h1>

      {/* Currently Reading */}
      <h2 className="reading-section">Currently Reading</h2>
      <p><em>The Master</em> — Stanislaw Lem</p>


      {/* Recently Read */}
      <h2 className="reading-section">Recently Read</h2>
      <p><em>Solaris</em> — Stanislaw Lem</p>
      <p><em>The Master & Margarita</em> — Elena S. Bulgakova and Mikhail Bulgakov</p>
      <p><em>Operating Systems: Three Easy Pieces</em> — Andrea & Remzi Arpaci-Dusseau</p>
      <p><em>Dune</em> — Frank Herbert</p>

      {/* Favorites */}
      <h2 className="reading-section">Past Favorites</h2>

      <div className="reading-columns">
        <p><em>1984</em> — George Orwell</p>
        <p><em>Animal Farm</em> — George Orwell</p>
        <p><em>Brave New World</em> — Aldous Huxley</p>
        <p><em>Fahrenheit 451</em> — Ray Bradbury</p>
        <p><em>Looking for Alaska</em> — John Green</p>
        <p><em>My Sister's Keeper</em> — Jodi Picoult</p>
        <p><em>Notes from the Underground</em> — Dostoevsky</p>
        <p><em>Slaughterhouse-Five</em> — Kurt Vonnegut</p>
        <p><em>The Adventures of Huckleberry Finn</em> — Mark Twain</p>
        <p><em>The Alchemist</em> — Paulo Coelho</p>
        <p><em>The Boy in the Striped Pajamas</em> — John Boyne</p>
        <p><em>The Death of a Salesman</em> — Arthur Miller</p>
        <p><em>The Girl with All the Gifts</em> — Mike Carey</p>
        <p><em>The Glass Menagerie</em> — Tennessee Williams</p>
        <p><em>The Great Gatsby</em> — F. Scott Fitzgerald</p>
        <p><em>The Futurological Congress</em> — Stanislaw Lem</p>
        <p><em>The Picture of Dorian Gray</em> — Oscar Wilde</p>
        <p><em>The Stranger</em> — Albert Camus</p>
        <p><em>The Strain</em> — Hogan & del Toro</p>
        <p><em>When Breath Becomes Air</em> — Paul Kalanithi</p>
      </div>

    </Container>
  );
}
