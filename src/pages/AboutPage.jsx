import { useNavigate } from "react-router-dom";

const coverageItems = [
  { label: "Ten Bhūmis (Daśabhūmi)", id: "ten-bhumis" },
  { label: "Six Pāramitās", id: "six-paramitas" },
  { label: "Ten Pāramitās", id: "ten-paramitas" },
  { label: "Four Dhyānas", id: "four-dhyanas" },
  { label: "Four Formless Absorptions", id: "four-formless-absorptions" },
  { label: "Four Immeasurables (Brahmavihāra)", id: "four-immeasurables" },
  { label: "Nine Stages of Śamatha", id: "nine-stages-of-shamatha" },
  { label: "Five Paths (Pañcamārga)", id: "five-paths" },
  { label: "Four Noble Truths", id: "four-noble-truths" },
  { label: "Noble Eightfold Path", id: "eightfold-path" },
  { label: "Twelve Links of Dependent Origination", id: "twelve-links" },
  { label: "Three Marks of Existence", id: "three-marks" },
  { label: "Five Aggregates (Skandha)", id: "five-aggregates" },
  { label: "37 Factors of Enlightenment", id: "thirty-seven-factors" },
  { label: "Two Obscurations", id: "two-obscurations" },
  { label: "Three Bodies (Trikāya)", id: "three-bodies" },
  { label: "Six Root Afflictions", id: "six-root-afflictions" },
  { label: "Bodhicitta", id: "bodhicitta" },
  { label: "Ten Virtuous Actions", id: "ten-virtuous-actions" },
  { label: "Three Realms", id: "three-realms" },
  { label: "Six Realms of Rebirth", id: "six-realms" },
];

export default function AboutPage() {
  const navigate = useNavigate();

  const handleCoverageClick = (listId) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(`list-${listId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  return (
    <div className="about-page">
      <header className="page-hero">
        <h1>About This Project</h1>
        <p className="hero-subtitle">
          Understanding the vision, sources, and structure of the Ten Bhūmis
          Exploration Space
        </p>
      </header>

      <section className="about-section">
        <h2>Vision</h2>
        <p>
          The Ten Bhūmis Exploration Space is an interactive tool for studying
          the Mahāyāna Buddhist path through its many interconnected lists,
          stages, and frameworks. Buddhism has a rich tradition of organizing
          its teachings into numbered lists — from the Four Noble Truths to the
          Thirty-Seven Factors of Enlightenment — and these lists form a vast
          web of cross-references that illuminate each other.
        </p>
        <p>
          This project aims to make that web navigable and explorable, helping
          practitioners and students see how each teaching fits into the larger
          picture of the path to awakening.
        </p>
      </section>

      <section className="about-section">
        <h2>Structure</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Modular Lists</h3>
            <p>
              Each Buddhist teaching list is stored as a self-contained data
              module with its own items, descriptions, Sanskrit terms, and
              cross-references. This modular design allows easy expansion and
              ensures each list can stand alone or connect to others.
            </p>
          </div>
          <div className="about-card">
            <h3>Cross-References</h3>
            <p>
              Lists reference each other through a cross-reference system.
              When you see a reference tag, clicking it navigates you to that
              related teaching, helping you explore the interconnected nature
              of the dharma.
            </p>
          </div>
          <div className="about-card">
            <h3>Progressive Disclosure</h3>
            <p>
              Content is organized in expandable sections — start with the
              overview and drill down into specifics. This respects the
              traditional approach of moving from broad understanding to
              detailed knowledge.
            </p>
          </div>
          <div className="about-card">
            <h3>Interactive Learning</h3>
            <p>
              The Game tab generates quizzes from the underlying data,
              providing an engaging way to test and reinforce knowledge.
              Questions are drawn from all categories and adapt as new
              content is added.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Textual Sources</h2>
        <div className="sources-list">
          <div className="source-item">
            <h3>Daśabhūmika Sūtra</h3>
            <p>
              The primary source for the ten bhūmis. Part of the vast
              Avataṃsaka Sūtra collection, it describes each ground in detail
              through the teachings of Vajragarbha Bodhisattva.
            </p>
          </div>
          <div className="source-item">
            <h3>Madhyamakāvatāra</h3>
            <p>
              Candrakīrti's "Entering the Middle Way" — a foundational
              Madhyamaka text that maps the ten bhūmis to the ten perfections
              and provides the Prāsaṅgika perspective on the bodhisattva path.
            </p>
          </div>
          <div className="source-item">
            <h3>Abhisamayālaṃkāra</h3>
            <p>
              Attributed to Maitreya — "The Ornament of Clear Realization"
              provides the framework of the five paths and the hidden teaching
              structure of the Prajñāpāramitā sūtras.
            </p>
          </div>
          <div className="source-item">
            <h3>Bodhicaryāvatāra</h3>
            <p>
              Śāntideva's "Entering the Conduct of Awakening" — the beloved
              guide to the bodhisattva's way of life, detailing the six
              perfections in practical, poetic terms.
            </p>
          </div>
          <div className="source-item">
            <h3>Abhidharmakośa</h3>
            <p>
              Vasubandhu's "Treasury of Abhidharma" — the encyclopedic
              reference for Buddhist psychology, cosmology, and path theory
              that informs much of the foundational lists included here.
            </p>
          </div>
          <div className="source-item">
            <h3>Visuddhimagga</h3>
            <p>
              Buddhaghosa's "Path of Purification" — while a Theravāda text,
              it provides detailed descriptions of the dhyānas, formless
              absorptions, and stages of śamatha that inform our presentation.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Content Coverage</h2>
        <p>This application currently includes the following teaching lists:</p>
        <div className="coverage-grid">
          {coverageItems.map((item) => (
            <button
              key={item.id}
              className="coverage-item coverage-item--link"
              onClick={() => handleCoverageClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>Future Directions</h2>
        <ul className="future-list">
          <li>Detailed visualization of the relationships between all lists</li>
          <li>Guided meditation timers linked to the nine stages of śamatha</li>
          <li>Extended quiz modes with spaced repetition</li>
          <li>Additional lists: five wisdoms, eight consciousnesses (Yogācāra), tantric classifications</li>
          <li>Text study mode with passages from source texts</li>
          <li>Personal practice tracking and journaling</li>
        </ul>
      </section>
    </div>
  );
}
