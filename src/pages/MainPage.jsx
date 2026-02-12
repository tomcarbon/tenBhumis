import { useState, useCallback } from "react";
import BhumiWheel from "../components/BhumiWheel";
import BhumiDetail from "../components/BhumiDetail";
import CategorySection from "../components/CategorySection";
import { listCategories } from "../data";

export default function MainPage() {
  const [selectedBhumi, setSelectedBhumi] = useState(null);
  const [highlightId, setHighlightId] = useState(null);

  const handleNavigate = useCallback((listId) => {
    setHighlightId(listId);
    const el = document.getElementById(`list-${listId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => setHighlightId(null), 2000);
    }
  }, []);

  return (
    <div className="main-page">
      <header className="page-hero">
        <h1>The Ten Bhūmis Exploration Space</h1>
        <p className="hero-subtitle">
          A comprehensive guide to the Mahāyāna bodhisattva grounds and
          the interconnected web of Buddhist teachings
        </p>
      </header>

      <section className="wheel-section">
        <div className="wheel-intro">
          <h2>The Bodhisattva Grounds</h2>
          <p>
            Click any segment of the wheel to explore each bhūmi in detail.
            The ten grounds describe the progressive journey from the first
            direct realization of emptiness to the threshold of complete
            buddhahood.
          </p>
        </div>
        <BhumiWheel onSelect={setSelectedBhumi} />
        <BhumiDetail
          bhumi={selectedBhumi}
          onClose={() => setSelectedBhumi(null)}
        />
      </section>

      <section className="lists-section">
        <div className="lists-intro">
          <h2>The Web of Teachings</h2>
          <p>
            Buddhism organizes its vast body of teachings into numbered lists
            that interconnect and illuminate each other. Explore the categories
            below — click any item to expand it, and follow the cross-references
            to discover how each teaching relates to the whole.
          </p>
        </div>
        {listCategories.map((cat) => (
          <CategorySection
            key={cat.name}
            category={cat}
            onNavigate={handleNavigate}
            highlightId={highlightId}
          />
        ))}
      </section>
    </div>
  );
}
