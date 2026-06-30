import { useState } from "react";
import { Container } from "react-bootstrap";
import "../../shared-styling.css";
import BackButton from '../../components/BackButton';

function BookEntry({ title, author, essay }) {
  const [open, setOpen] = useState(false);
  const hasEssay = Boolean(essay);

  return ( 
    <div className={`accordion-entry${hasEssay ? " has-content" : ""}`}>     
      <div
        className="accordion-row"
        onClick={() => hasEssay && setOpen((o) => !o)}
        style={{ cursor: hasEssay ? "pointer" : "default" }}
      >
        <p className="accordion-label">
          <em>{title}</em> — {author}
        </p>
        {hasEssay && (
          <span
            className="accordion-chevron"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            aria-hidden="true"
          >
            &#8964;
          </span>
        )}
      </div>
      {hasEssay && open && (
        <div className="accordion-body">
          {essay.map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
          ))}
        </div>
      )}
    </div>
  );
}

const currentlyReading = [
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    essay: [
      "<b>Part 5 Chapter 1:</b> The common perspective on religion is that religion is for determining the truth or purpose of life. Many atheists bring the counterpoint that religious texts cannot be a definite truth. In this light, Tolstoy suggests an alternative perspective to religion; that religion is first primarily emotional and psychological scaffolding for life, rather than ideas that must be contended to the last detail. Tolsoy embellishes this idea by introducing the perspective of a child. For a child to feel safe and develop to their full potential, he or she needs extreme stability in youth. A flourishing child will quickly mature and start grappling with ideas of life and death, however, this jeopardizes the sense of security that is still critical for the child. When the parents provide religion as an answer, the child is spared from facing the terrifying reality of our world as a meaningless space. The child is able to feel comfortable within the net of the family until he or she feels ready to face the chaos that is the universe. The same is true for one as they approach death, or for  those who are faced with impossible and unexpected challenges, or for the one who must face great loss and seemingly arbitrary suffering forced upon them.. and so, Tolstoy suggests that one's relationship to religion is at its greatest importance in these critical moments, and that one should hold an open mind even when one is strong, both to those others who need religion, and to oneself, in the scenario that one may also need a pillar of support or direction in their life, and if not for oneself, than for one's surrounding family and friends. ",
      "Thus, the role of religion changes as you live life, but it's usefulness never becomes fully obsolete." 
    ],
  },
  {
    title: "The Master",
    author: "Stanislaw Lem",
  },
];

const recentlyRead = [
  {title: "Solaris", author: "Stanislaw Lem",},
  { title: "The Master & Margarita", author: "Elena S. Bulgakova and Mikhail Bulgakov", },
  { title: "Operating Systems: Three Easy Pieces", author: "Andrea & Remzi Arpaci-Dusseau",},
  {title: "Dune", author: "Frank Herbert",},
  {title: "White Nights", author: "Dostoevsky",},
  {title: "Flowers for Algernon", author: "Daniel Keyes",},
];

const pastFavorites = [
  { title: "1984", author: "George Orwell" },
  { title: "Animal Farm", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Looking for Alaska", author: "John Green" },
  { title: "My Sister's Keeper", author: "Jodi Picoult" },
  {title: "Notes from the Underground", author: "Dostoevsky",},
  {title: "Slaughterhouse-Five", author: "Kurt Vonnegut",},
  { title: "The Adventures of Huckleberry Finn", author: "Mark Twain" },
  { title: "The Alchemist", author: "Paulo Coelho" },
  { title: "The Boy in the Striped Pajamas", author: "John Boyne" },
  { title: "The Death of a Salesman", author: "Arthur Miller" },
  { title: "The Girl with All the Gifts", author: "Mike Carey" },
  { title: "The Glass Menagerie", author: "Tennessee Williams" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "The Futurological Congress", author: "Stanislaw Lem" },
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
  { title: "The Stranger", author: "Albert Camus" },
  { title: "The Strain", author: "Hogan & del Toro" },
  { title: "When Breath Becomes Air", author: "Paul Kalanithi" },
];

export default function Reading() {
  return (
    <div className="page-styling">
    <BackButton />
    <Container className="py-5">
      <h1 className="mb-4 text-center">Favorite Books</h1>

      <h2 className="subtitle">Currently Reading</h2>
      {currentlyReading.map((b) => (
        <BookEntry key={b.title} {...b} />
      ))}

      <h2 className="subtitle">Recently Read</h2>
      {recentlyRead.map((b) => (
        <BookEntry key={b.title} {...b} />
      ))}

      <h2 className="subtitle">Past Favorites</h2>
      <div className="reading-columns">
        {pastFavorites.map((b) => (
          <BookEntry key={b.title} {...b} />
        ))}
      </div>
    </Container></div>
  );
}
