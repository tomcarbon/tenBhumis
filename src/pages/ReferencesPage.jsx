import { useState } from "react";

const faqs = [
  {
    q: "What are the Ten Bhūmis?",
    a: "The Ten Bhūmis (Sanskrit: Daśabhūmi) are the ten stages or 'grounds' of the bodhisattva path in Mahāyāna Buddhism. They describe the progressive transformation a bodhisattva undergoes from the first direct realization of emptiness (1st bhūmi) to the threshold of complete buddhahood (10th bhūmi). Each bhūmi is characterized by specific realizations, qualities, and the perfection of a particular pāramitā.",
  },
  {
    q: "What is the difference between the six and ten pāramitās?",
    a: "The six pāramitās (generosity, discipline, patience, diligence, meditation, wisdom) are the standard Mahāyāna list of bodhisattva practices. The ten pāramitās expand this by adding four more — skillful means, aspiration, spiritual power, and primordial wisdom — corresponding to bhūmis 7-10. The additional four can be understood as specialized aspects or applications of the sixth perfection (wisdom).",
  },
  {
    q: "How do the four formless absorptions relate to the path?",
    a: "The four formless absorptions (infinite space, infinite consciousness, nothingness, and neither perception nor non-perception) are meditative states that transcend the form realm. While they represent extraordinary refinement of concentration, they are still within saṃsāra. On the bodhisattva path, these absorptions are mastered (particularly on the 3rd bhūmi) but are not mistaken for liberation — the bodhisattva uses them as tools rather than goals.",
  },
  {
    q: "What is the relationship between the five paths and the ten bhūmis?",
    a: "The five paths provide the overarching framework: the Path of Accumulation and Path of Preparation precede the bhūmis. The Path of Seeing corresponds to the 1st bhūmi. The Path of Meditation spans bhūmis 2-10. The Path of No More Learning is buddhahood itself, beyond the bhūmis. So the ten bhūmis are essentially a detailed map of the last two-and-a-half paths.",
  },
  {
    q: "What are the four immeasurables and why are they important?",
    a: "The four immeasurables — loving-kindness (maitrī), compassion (karuṇā), sympathetic joy (muditā), and equanimity (upekṣā) — are qualities of heart that, when fully developed, extend boundlessly to all beings. They are the emotional foundation of bodhicitta and the bodhisattva path. Without these qualities, the path remains merely intellectual.",
  },
  {
    q: "What is bodhicitta?",
    a: "Bodhicitta is the 'mind of awakening' — the aspiration to attain complete buddhahood for the benefit of all sentient beings. It has two aspects: aspiring bodhicitta (the wish) and engaging bodhicitta (the practice). Ultimate bodhicitta is the direct realization of emptiness. Bodhicitta is what distinguishes the Mahāyāna path from other Buddhist paths.",
  },
  {
    q: "How should I use this app for study?",
    a: "Start with the Main page to get an overview — explore the bhūmi wheel and browse the categorized lists. Use the cross-reference links to discover how teachings interconnect. The Game tab offers quizzes to test and reinforce your knowledge. All lists are expandable — click items for detailed descriptions, Sanskrit terms, and related concepts.",
  },
  {
    q: "What sources inform the content here?",
    a: "The content draws on classical Mahāyāna sources including the Daśabhūmika Sūtra, the Avataṃsaka Sūtra, Asaṅga's Abhidharmasamuccaya, Vasubandhu's Abhidharmakośa, Candrakīrti's Madhyamakāvatāra, and Maitreya's Abhisamayālaṃkāra, as well as traditional Tibetan commentarial literature.",
  },
];

const glossary = [
  { term: "Ārya", definition: "A 'noble one' — a being who has directly perceived emptiness (from the 1st bhūmi onward)." },
  { term: "Bhūmi", definition: "Literally 'ground' or 'stage' — one of the ten levels of the bodhisattva path." },
  { term: "Bodhicitta", definition: "The mind of awakening — the aspiration to attain buddhahood for all beings." },
  { term: "Bodhisattva", definition: "A being who has generated bodhicitta and is on the path to buddhahood." },
  { term: "Dharmakāya", definition: "The 'truth body' of a buddha — the ultimate dimension of enlightenment." },
  { term: "Dhyāna", definition: "Meditative absorption — a state of deep, focused concentration." },
  { term: "Kleśa", definition: "Mental affliction — any mental state that disturbs peace of mind and drives saṃsāra." },
  { term: "Mahāyāna", definition: "The 'Great Vehicle' — the Buddhist tradition focused on the bodhisattva path to full buddhahood." },
  { term: "Nirvāṇa", definition: "The cessation of suffering — liberation from saṃsāra." },
  { term: "Pāramitā", definition: "Literally 'gone to the other shore' — a transcendent perfection practiced by bodhisattvas." },
  { term: "Prajñā", definition: "Wisdom — particularly the wisdom that directly perceives emptiness (śūnyatā)." },
  { term: "Pratītyasamutpāda", definition: "Dependent origination — the principle that all phenomena arise in dependence on causes and conditions." },
  { term: "Samādhi", definition: "Meditative concentration — single-pointed absorption on an object." },
  { term: "Saṃsāra", definition: "The cycle of birth, death, and rebirth driven by karma and afflictions." },
  { term: "Śamatha", definition: "Calm abiding — meditative practice that develops single-pointed concentration." },
  { term: "Śūnyatā", definition: "Emptiness — the absence of inherent, independent existence in all phenomena." },
  { term: "Trikāya", definition: "The three bodies of a buddha: dharmakāya, saṃbhogakāya, and nirmāṇakāya." },
  { term: "Upāya", definition: "Skillful means — the ability to adapt teachings to suit different beings." },
  { term: "Vipaśyanā", definition: "Insight meditation — analytical meditation that penetrates the nature of reality." },
];

export default function ReferencesPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [glossaryFilter, setGlossaryFilter] = useState("");

  const filteredGlossary = glossary.filter(
    (g) =>
      g.term.toLowerCase().includes(glossaryFilter.toLowerCase()) ||
      g.definition.toLowerCase().includes(glossaryFilter.toLowerCase())
  );

  return (
    <div className="references-page">
      <header className="page-hero">
        <h1>References</h1>
        <p className="hero-subtitle">
          Frequently asked questions, glossary, and guidance for navigating
          the teachings
        </p>
      </header>

      <section className="references-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className={`faq-question ${openFaq === i ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className="faq-toggle">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <div className="faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="references-section">
        <h2>Sanskrit Glossary</h2>
        <input
          type="text"
          className="glossary-search"
          placeholder="Search glossary..."
          value={glossaryFilter}
          onChange={(e) => setGlossaryFilter(e.target.value)}
        />
        <div className="glossary-list">
          {filteredGlossary.map((g) => (
            <div key={g.term} className="glossary-item">
              <dt>{g.term}</dt>
              <dd>{g.definition}</dd>
            </div>
          ))}
        </div>
      </section>

      <section className="references-section">
        <h2>Study Path Suggestions</h2>
        <div className="study-paths">
          <div className="study-path-card">
            <h3>Beginner Path</h3>
            <ol>
              <li>Four Noble Truths</li>
              <li>Noble Eightfold Path</li>
              <li>Three Marks of Existence</li>
              <li>Five Aggregates</li>
              <li>Twelve Links of Dependent Origination</li>
            </ol>
          </div>
          <div className="study-path-card">
            <h3>Meditation Path</h3>
            <ol>
              <li>Nine Stages of Śamatha</li>
              <li>Four Dhyānas</li>
              <li>Four Formless Absorptions</li>
              <li>Four Immeasurables</li>
            </ol>
          </div>
          <div className="study-path-card">
            <h3>Bodhisattva Path</h3>
            <ol>
              <li>Bodhicitta</li>
              <li>Four Immeasurables</li>
              <li>Six Pāramitās</li>
              <li>Five Paths</li>
              <li>Ten Bhūmis</li>
              <li>Three Bodies of a Buddha</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
