export default function AboutPage() {
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
          {[
            "Ten Bhūmis (Daśabhūmi)",
            "Six Pāramitās",
            "Ten Pāramitās",
            "Four Dhyānas",
            "Four Formless Absorptions",
            "Four Immeasurables (Brahmavihāra)",
            "Nine Stages of Śamatha",
            "Five Paths (Pañcamārga)",
            "Four Noble Truths",
            "Noble Eightfold Path",
            "Twelve Links of Dependent Origination",
            "Three Marks of Existence",
            "Five Aggregates (Skandha)",
            "37 Factors of Enlightenment",
            "Two Obscurations",
            "Three Bodies (Trikāya)",
            "Six Root Afflictions",
            "Bodhicitta",
            "Ten Virtuous Actions",
            "Three Realms",
            "Six Realms of Rebirth",
          ].map((item) => (
            <span key={item} className="coverage-item">
              {item}
            </span>
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
