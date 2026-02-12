import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { allLists } from "../data";

// ============================================
// QUIZ GENERATION
// ============================================

function generateQuiz(lists) {
  const questions = [];

  // Bhumi name/number
  const bhumis = lists["ten-bhumis"];
  if (bhumis) {
    bhumis.items.forEach((b) => {
      questions.push({
        question: `Which bhūmi is known as "${b.name}" (${b.sanskrit})?`,
        answer: `The ${ordinal(b.number)} Bhūmi`,
        options: shuffleWith(
          `The ${ordinal(b.number)} Bhūmi`,
          bhumis.items.filter((x) => x.number !== b.number).map((x) => `The ${ordinal(x.number)} Bhūmi`)
        ),
        category: "Ten Bhūmis",
      });
    });

    bhumis.items.forEach((b) => {
      if (b.paramita) {
        questions.push({
          question: `Which perfection (pāramitā) corresponds to the ${ordinal(b.number)} Bhūmi (${b.name})?`,
          answer: b.paramita,
          options: shuffleWith(
            b.paramita,
            bhumis.items.filter((x) => x.paramita !== b.paramita).map((x) => x.paramita)
          ),
          category: "Bhūmi-Paramita",
        });
      }
    });
  }

  // Immeasurables
  const imm = lists["four-immeasurables"];
  if (imm) {
    imm.items.forEach((item) => {
      questions.push({
        question: `What is the "far enemy" of ${item.name} (${item.sanskrit})?`,
        answer: item.farEnemy,
        options: shuffleWith(
          item.farEnemy,
          imm.items.filter((x) => x.farEnemy !== item.farEnemy).map((x) => x.farEnemy)
        ),
        category: "Four Immeasurables",
      });
    });
  }

  // Formless absorptions
  const formless = lists["four-formless-absorptions"];
  if (formless) {
    formless.items.forEach((item) => {
      questions.push({
        question: `"${item.name}" is which formless absorption?`,
        answer: `The ${ordinal(item.number)}`,
        options: shuffleWith(
          `The ${ordinal(item.number)}`,
          formless.items.filter((x) => x.number !== item.number).map((x) => `The ${ordinal(x.number)}`)
        ),
        category: "Formless Absorptions",
      });
    });
  }

  // Five paths
  const paths = lists["five-paths"];
  if (paths) {
    paths.items.forEach((item) => {
      questions.push({
        question: `What is the Sanskrit name for the "${item.name}"?`,
        answer: item.sanskrit,
        options: shuffleWith(
          item.sanskrit,
          paths.items.filter((x) => x.sanskrit !== item.sanskrit).map((x) => x.sanskrit)
        ),
        category: "Five Paths",
      });
    });
  }

  // Noble Truths
  const truths = lists["four-noble-truths"];
  if (truths) {
    truths.items.forEach((item) => {
      questions.push({
        question: `"${item.sanskrit}" refers to which Noble Truth?`,
        answer: item.name,
        options: shuffleWith(
          item.name,
          truths.items.filter((x) => x.name !== item.name).map((x) => x.name)
        ),
        category: "Four Noble Truths",
      });
    });
  }

  // Aggregates
  const agg = lists["five-aggregates"];
  if (agg) {
    agg.items.forEach((item) => {
      questions.push({
        question: `What does the Sanskrit term "${item.sanskrit}" refer to in the Five Aggregates?`,
        answer: item.name,
        options: shuffleWith(
          item.name,
          agg.items.filter((x) => x.name !== item.name).map((x) => x.name)
        ),
        category: "Five Aggregates",
      });
    });
  }

  // Eightfold Path — training groups
  const eightfold = lists["eightfold-path"];
  if (eightfold) {
    eightfold.items.forEach((item) => {
      const trainings = [...new Set(eightfold.items.map((x) => x.training))];
      questions.push({
        question: `Which training does ${item.name} (${item.sanskrit}) belong to?`,
        answer: item.training,
        options: shuffleWith(item.training, trainings.filter((t) => t !== item.training)),
        category: "Eightfold Path",
      });
    });
  }

  // Twelve Links — Sanskrit name
  const links = lists["twelve-links"];
  if (links) {
    links.items.forEach((item) => {
      questions.push({
        question: `What is the Sanskrit name for "${item.name}" (the ${ordinal(item.number)} link)?`,
        answer: item.sanskrit,
        options: shuffleWith(
          item.sanskrit,
          links.items.filter((x) => x.sanskrit !== item.sanskrit).map((x) => x.sanskrit)
        ),
        category: "Twelve Links",
      });
    });

    // Which link follows X?
    links.items.forEach((item) => {
      if (item.number < 12) {
        const nextLink = links.items.find((x) => x.number === item.number + 1);
        questions.push({
          question: `Which link of dependent origination follows "${item.name}"?`,
          answer: nextLink.name,
          options: shuffleWith(
            nextLink.name,
            links.items.filter((x) => x.name !== nextLink.name && x.name !== item.name).map((x) => x.name)
          ),
          category: "Twelve Links",
        });
      }
    });
  }

  // Three Marks
  const marks = lists["three-marks"];
  if (marks) {
    marks.items.forEach((item) => {
      questions.push({
        question: `What does the Sanskrit "${item.sanskrit}" refer to in the Three Marks of Existence?`,
        answer: item.name,
        options: shuffleWith(
          item.name,
          marks.items.filter((x) => x.name !== item.name).map((x) => x.name)
        ),
        category: "Three Marks",
      });
    });
  }

  // Six Realms — dominant affliction
  const realms = lists["six-realms"];
  if (realms) {
    realms.items.forEach((item) => {
      questions.push({
        question: `What is the dominant affliction of the ${item.name}?`,
        answer: item.dominantAffliction,
        options: shuffleWith(
          item.dominantAffliction,
          realms.items.filter((x) => x.dominantAffliction !== item.dominantAffliction).map((x) => x.dominantAffliction)
        ),
        category: "Six Realms",
      });
    });
  }

  // Four Dhyanas — characteristics
  const dhyanas = lists["four-dhyanas"];
  if (dhyanas) {
    dhyanas.items.forEach((item) => {
      questions.push({
        question: `Which dhyāna abandons "${item.abandoned}"?`,
        answer: item.name,
        options: shuffleWith(
          item.name,
          dhyanas.items.filter((x) => x.name !== item.name).map((x) => x.name)
        ),
        category: "Four Dhyānas",
      });
    });
  }

  // Nine Stages of Shamatha — power
  const shamatha = lists["nine-stages-of-shamatha"];
  if (shamatha) {
    shamatha.items.forEach((item) => {
      questions.push({
        question: `Which stage of śamatha is "${item.name}" (${item.sanskrit})?`,
        answer: `Stage ${item.number}`,
        options: shuffleWith(
          `Stage ${item.number}`,
          shamatha.items.filter((x) => x.number !== item.number).map((x) => `Stage ${x.number}`)
        ),
        category: "Nine Stages of Śamatha",
      });
    });
  }

  // Six Root Afflictions
  const afflictions = lists["six-root-afflictions"];
  if (afflictions) {
    afflictions.items.forEach((item) => {
      questions.push({
        question: `What does the Sanskrit "${item.sanskrit}" refer to in the Six Root Afflictions?`,
        answer: item.name,
        options: shuffleWith(
          item.name,
          afflictions.items.filter((x) => x.name !== item.name).map((x) => x.name)
        ),
        category: "Six Root Afflictions",
      });
    });
  }

  // Three Bodies
  const bodies = lists["three-bodies"];
  if (bodies) {
    bodies.items.forEach((item) => {
      questions.push({
        question: `Which body of a buddha is the "${item.name}" (${item.sanskrit})?`,
        answer: item.name,
        options: shuffleWith(
          item.name,
          bodies.items.filter((x) => x.name !== item.name).map((x) => x.name)
        ),
        category: "Three Bodies",
      });
    });
  }

  // Ten Virtuous Actions — opposites
  const virtues = lists["ten-virtuous-actions"];
  if (virtues) {
    virtues.items.forEach((item) => {
      questions.push({
        question: `What is the opposite (non-virtue) of "${item.name}"?`,
        answer: item.opposite,
        options: shuffleWith(
          item.opposite,
          virtues.items.filter((x) => x.opposite !== item.opposite).map((x) => x.opposite)
        ),
        category: "Ten Virtuous Actions",
      });
    });
  }

  // Three Realms
  const threeRealms = lists["three-realms"];
  if (threeRealms) {
    threeRealms.items.forEach((item) => {
      questions.push({
        question: `What is the Sanskrit name for the "${item.name}"?`,
        answer: item.sanskrit,
        options: shuffleWith(
          item.sanskrit,
          threeRealms.items.filter((x) => x.sanskrit !== item.sanskrit).map((x) => x.sanskrit)
        ),
        category: "Three Realms",
      });
    });
  }

  return questions;
}

// ============================================
// MATCHING PAIRS GENERATION
// ============================================

function generateMatchingPairs(lists) {
  const allPairs = [];

  // Bhumis: Sanskrit ↔ English
  const bhumis = lists["ten-bhumis"];
  if (bhumis) {
    bhumis.items.forEach((b) => {
      allPairs.push({ a: b.sanskrit, b: b.name, category: "Bhūmi Names" });
    });
  }

  // Paramitas: Sanskrit ↔ English
  const paramitas = lists["six-paramitas"];
  if (paramitas) {
    paramitas.items.forEach((p) => {
      allPairs.push({ a: p.sanskrit, b: p.name, category: "Pāramitās" });
    });
  }

  // Immeasurables: Name ↔ Far Enemy
  const imm = lists["four-immeasurables"];
  if (imm) {
    imm.items.forEach((item) => {
      allPairs.push({ a: item.name, b: item.farEnemy, category: "Immeasurables" });
    });
  }

  // Noble Truths: Sanskrit ↔ English
  const truths = lists["four-noble-truths"];
  if (truths) {
    truths.items.forEach((t) => {
      allPairs.push({ a: t.sanskrit, b: t.name, category: "Noble Truths" });
    });
  }

  // Five Aggregates: Sanskrit ↔ English
  const agg = lists["five-aggregates"];
  if (agg) {
    agg.items.forEach((a) => {
      allPairs.push({ a: a.sanskrit, b: a.name, category: "Five Aggregates" });
    });
  }

  // Twelve Links: Sanskrit ↔ English
  const links = lists["twelve-links"];
  if (links) {
    links.items.forEach((l) => {
      allPairs.push({ a: l.sanskrit, b: l.name, category: "Twelve Links" });
    });
  }

  // Six Root Afflictions: Sanskrit ↔ English
  const afflictions = lists["six-root-afflictions"];
  if (afflictions) {
    afflictions.items.forEach((a) => {
      allPairs.push({ a: a.sanskrit, b: a.name, category: "Root Afflictions" });
    });
  }

  // Three Bodies: Sanskrit ↔ English
  const bodies = lists["three-bodies"];
  if (bodies) {
    bodies.items.forEach((b) => {
      allPairs.push({ a: b.sanskrit, b: b.name, category: "Three Bodies" });
    });
  }

  return allPairs;
}

// ============================================
// SEQUENCING CHALLENGES
// ============================================

function generateSequencingChallenges(lists) {
  const challenges = [];

  const bhumis = lists["ten-bhumis"];
  if (bhumis) {
    challenges.push({
      title: "Order the Ten Bhūmis",
      items: bhumis.items.map((b) => ({ label: `${b.name} (${b.sanskrit})`, order: b.number })),
      category: "Bhūmis",
      size: 10,
    });
  }

  const links = lists["twelve-links"];
  if (links) {
    challenges.push({
      title: "Order the Twelve Links of Dependent Origination",
      items: links.items.map((l) => ({ label: `${l.name} (${l.sanskrit})`, order: l.number })),
      category: "Twelve Links",
      size: 12,
    });
  }

  const paths = lists["five-paths"];
  if (paths) {
    challenges.push({
      title: "Order the Five Paths",
      items: paths.items.map((p) => ({ label: p.name, order: p.number })),
      category: "Five Paths",
      size: 5,
    });
  }

  const shamatha = lists["nine-stages-of-shamatha"];
  if (shamatha) {
    challenges.push({
      title: "Order the Nine Stages of Śamatha",
      items: shamatha.items.map((s) => ({ label: s.name, order: s.number })),
      category: "Śamatha",
      size: 9,
    });
  }

  const dhyanas = lists["four-dhyanas"];
  if (dhyanas) {
    challenges.push({
      title: "Order the Four Dhyānas",
      items: dhyanas.items.map((d) => ({ label: d.name, order: d.number })),
      category: "Dhyānas",
      size: 4,
    });
  }

  // Eightfold Path by training group
  const eightfold = lists["eightfold-path"];
  if (eightfold) {
    challenges.push({
      title: "Order the Noble Eightfold Path",
      items: eightfold.items.map((e) => ({ label: e.name, order: e.number })),
      category: "Eightfold Path",
      size: 8,
    });
  }

  return challenges;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function shuffleWith(correct, pool) {
  const others = pool.filter((x) => x !== correct);
  const shuffled = others.sort(() => Math.random() - 0.5).slice(0, 3);
  const opts = [correct, ...shuffled].sort(() => Math.random() - 0.5);
  return opts;
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// ============================================
// GAME PAGE COMPONENT
// ============================================

export default function GamePage() {
  const allQuestions = useMemo(() => generateQuiz(allLists), []);
  const allPairs = useMemo(() => generateMatchingPairs(allLists), []);
  const allSequences = useMemo(() => generateSequencingChallenges(allLists), []);

  // Shared state
  const [mode, setMode] = useState("menu");

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  // Matching state
  const [matchCards, setMatchCards] = useState([]);
  const [flippedIds, setFlippedIds] = useState([]);
  const [matchedPairIds, setMatchedPairIds] = useState(new Set());
  const [matchMoves, setMatchMoves] = useState(0);
  const [matchTime, setMatchTime] = useState(0);
  const [matchFinished, setMatchFinished] = useState(false);
  const matchTimerRef = useRef(null);
  const flipTimeoutRef = useRef(null);

  // Sequencing state
  const [seqItems, setSeqItems] = useState([]);
  const [seqTitle, setSeqTitle] = useState("");
  const [seqSelected, setSeqSelected] = useState(null);
  const [seqChecked, setSeqChecked] = useState(false);
  const [seqAttempts, setSeqAttempts] = useState(0);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (matchTimerRef.current) clearInterval(matchTimerRef.current);
      if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
    };
  }, []);

  // ============================================
  // QUIZ LOGIC
  // ============================================

  const startQuiz = useCallback(
    (count) => {
      const q = shuffleArray(allQuestions).slice(0, count);
      setQuestions(q);
      setCurrent(0);
      setSelected(null);
      setScore(0);
      setAnswered(false);
      setFinished(false);
      setMode("quiz");
    },
    [allQuestions]
  );

  const handleAnswer = (opt) => {
    if (answered) return;
    setSelected(opt);
    setAnswered(true);
    if (opt === questions[current].answer) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  // ============================================
  // MATCHING LOGIC
  // ============================================

  const startMatching = useCallback(
    (pairCount) => {
      const selected = shuffleArray(allPairs).slice(0, pairCount);
      const cards = [];
      selected.forEach((pair, i) => {
        cards.push({ id: i * 2, content: pair.a, pairId: i, side: "a" });
        cards.push({ id: i * 2 + 1, content: pair.b, pairId: i, side: "b" });
      });
      setMatchCards(shuffleArray(cards));
      setFlippedIds([]);
      setMatchedPairIds(new Set());
      setMatchMoves(0);
      setMatchTime(0);
      setMatchFinished(false);
      setMode("matching");

      if (matchTimerRef.current) clearInterval(matchTimerRef.current);
      matchTimerRef.current = setInterval(() => {
        setMatchTime((t) => t + 1);
      }, 1000);
    },
    [allPairs]
  );

  const handleCardFlip = (cardId) => {
    if (matchFinished) return;
    if (flippedIds.length >= 2) return;
    if (flippedIds.includes(cardId)) return;
    if (matchedPairIds.has(matchCards.find((c) => c.id === cardId)?.pairId)) return;

    const newFlipped = [...flippedIds, cardId];
    setFlippedIds(newFlipped);

    if (newFlipped.length === 2) {
      setMatchMoves((m) => m + 1);
      const [first, second] = newFlipped.map((id) => matchCards.find((c) => c.id === id));

      if (first.pairId === second.pairId) {
        // Match found
        setMatchedPairIds((prev) => {
          const next = new Set(prev);
          next.add(first.pairId);
          // Check if all matched
          const totalPairs = matchCards.length / 2;
          if (next.size === totalPairs) {
            setMatchFinished(true);
            if (matchTimerRef.current) clearInterval(matchTimerRef.current);
          }
          return next;
        });
        setFlippedIds([]);
      } else {
        // No match — flip back after delay
        if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
        flipTimeoutRef.current = setTimeout(() => {
          setFlippedIds([]);
        }, 800);
      }
    }
  };

  // ============================================
  // SEQUENCING LOGIC
  // ============================================

  const startSequencing = useCallback(
    (difficulty) => {
      let filtered;
      if (difficulty === "easy") {
        filtered = allSequences.filter((c) => c.size <= 5);
      } else if (difficulty === "medium") {
        filtered = allSequences.filter((c) => c.size >= 5 && c.size <= 9);
      } else {
        filtered = allSequences.filter((c) => c.size >= 8);
      }
      if (filtered.length === 0) filtered = allSequences;

      const challenge = filtered[Math.floor(Math.random() * filtered.length)];
      setSeqTitle(challenge.title);
      setSeqItems(shuffleArray(challenge.items.map((item) => ({ ...item, placed: false }))));
      setSeqSelected(null);
      setSeqChecked(false);
      setSeqAttempts(0);
      setMode("sequencing");
    },
    [allSequences]
  );

  const handleSeqTap = (index) => {
    if (seqChecked) return;
    if (seqSelected === null) {
      setSeqSelected(index);
    } else if (seqSelected === index) {
      setSeqSelected(null);
    } else {
      // Swap
      setSeqItems((prev) => {
        const next = [...prev];
        [next[seqSelected], next[index]] = [next[index], next[seqSelected]];
        return next;
      });
      setSeqSelected(null);
    }
  };

  const checkSequence = () => {
    setSeqChecked(true);
    setSeqAttempts((a) => a + 1);
  };

  const retrySequence = () => {
    setSeqChecked(false);
    setSeqSelected(null);
  };

  const getSeqScore = () => {
    return seqItems.filter((item, i) => item.order === i + 1).length;
  };

  const goToMenu = () => {
    if (matchTimerRef.current) clearInterval(matchTimerRef.current);
    if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
    setMode("menu");
  };

  // ============================================
  // RENDER: MENU
  // ============================================

  if (mode === "menu") {
    return (
      <div className="game-page">
        <header className="page-hero">
          <h1>Practice & Play</h1>
          <p className="hero-subtitle">
            Test your knowledge of the dharma through quizzes, memory games,
            and sequencing challenges
          </p>
        </header>

        <div className="game-type-section">
          <div className="game-type-card" onClick={() => setMode("quiz-select")}>
            <div className="game-type-icon">&#x2753;</div>
            <h3>Dharma Quiz</h3>
            <p>
              Multiple-choice questions across {allQuestions.length}+ topics
              including bhūmis, pāramitās, links, realms, and more
            </p>
            <span className="game-mode-badge">{allQuestions.length} Q</span>
          </div>

          <div className="game-type-card" onClick={() => setMode("matching-select")}>
            <div className="game-type-icon">&#x2B1A;</div>
            <h3>Matching Pairs</h3>
            <p>
              Match Sanskrit terms to their English equivalents by flipping
              cards and finding pairs
            </p>
            <span className="game-mode-badge">{allPairs.length} pairs</span>
          </div>

          <div className="game-type-card" onClick={() => setMode("sequencing-select")}>
            <div className="game-type-icon">&#x2195;</div>
            <h3>Path Sequencing</h3>
            <p>
              Arrange items in their correct order — bhūmis, links,
              paths, and stages
            </p>
            <span className="game-mode-badge">{allSequences.length} sets</span>
          </div>
        </div>

        <div className="game-info">
          <h3>Available Categories</h3>
          <div className="category-tags">
            {[...new Set(allQuestions.map((q) => q.category))].map((cat) => (
              <span key={cat} className="cat-tag">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ============================================
  // RENDER: QUIZ SELECT
  // ============================================

  if (mode === "quiz-select") {
    return (
      <div className="game-page">
        <header className="page-hero">
          <h1>Dharma Quiz</h1>
          <p className="hero-subtitle">Choose your challenge level</p>
        </header>
        <div className="game-menu">
          <div className="game-mode-card" onClick={() => startQuiz(10)}>
            <h3>Quick Practice</h3>
            <p>10 questions drawn randomly from all categories</p>
            <span className="game-mode-badge">10 Q</span>
          </div>
          <div className="game-mode-card" onClick={() => startQuiz(25)}>
            <h3>Deep Study</h3>
            <p>25 questions for a more thorough review</p>
            <span className="game-mode-badge">25 Q</span>
          </div>
          <div className="game-mode-card" onClick={() => startQuiz(allQuestions.length)}>
            <h3>Complete Challenge</h3>
            <p>All {allQuestions.length} available questions</p>
            <span className="game-mode-badge">All</span>
          </div>
        </div>
        <button className="back-to-menu-btn" onClick={goToMenu}>
          Back to Games
        </button>
      </div>
    );
  }

  // ============================================
  // RENDER: MATCHING SELECT
  // ============================================

  if (mode === "matching-select") {
    return (
      <div className="game-page">
        <header className="page-hero">
          <h1>Matching Pairs</h1>
          <p className="hero-subtitle">
            Flip cards and match Sanskrit terms with their English meanings
          </p>
        </header>
        <div className="game-menu">
          <div className="game-mode-card" onClick={() => startMatching(6)}>
            <h3>Small</h3>
            <p>6 pairs (12 cards) — a gentle start</p>
            <span className="game-mode-badge">6 pairs</span>
          </div>
          <div className="game-mode-card" onClick={() => startMatching(8)}>
            <h3>Medium</h3>
            <p>8 pairs (16 cards) — a balanced challenge</p>
            <span className="game-mode-badge">8 pairs</span>
          </div>
          <div className="game-mode-card" onClick={() => startMatching(12)}>
            <h3>Large</h3>
            <p>12 pairs (24 cards) — test your memory</p>
            <span className="game-mode-badge">12 pairs</span>
          </div>
        </div>
        <button className="back-to-menu-btn" onClick={goToMenu}>
          Back to Games
        </button>
      </div>
    );
  }

  // ============================================
  // RENDER: SEQUENCING SELECT
  // ============================================

  if (mode === "sequencing-select") {
    return (
      <div className="game-page">
        <header className="page-hero">
          <h1>Path Sequencing</h1>
          <p className="hero-subtitle">
            Put the items in the correct order — tap two to swap them
          </p>
        </header>
        <div className="game-menu">
          <div className="game-mode-card" onClick={() => startSequencing("easy")}>
            <h3>Easy</h3>
            <p>Short sequences (4-5 items)</p>
            <span className="game-mode-badge">Easy</span>
          </div>
          <div className="game-mode-card" onClick={() => startSequencing("medium")}>
            <h3>Medium</h3>
            <p>Medium sequences (5-9 items)</p>
            <span className="game-mode-badge">Medium</span>
          </div>
          <div className="game-mode-card" onClick={() => startSequencing("hard")}>
            <h3>Hard</h3>
            <p>Long sequences (8-12 items)</p>
            <span className="game-mode-badge">Hard</span>
          </div>
        </div>
        <button className="back-to-menu-btn" onClick={goToMenu}>
          Back to Games
        </button>
      </div>
    );
  }

  // ============================================
  // RENDER: QUIZ (existing, improved)
  // ============================================

  if (mode === "quiz") {
    if (finished) {
      const pct = Math.round((score / questions.length) * 100);
      return (
        <div className="game-page">
          <div className="quiz-result">
            <h2>Quiz Complete</h2>
            <div className="score-circle">
              <span className="score-pct">{pct}%</span>
              <span className="score-frac">
                {score}/{questions.length}
              </span>
            </div>
            <p className="score-message">
              {pct === 100
                ? "Perfect! You have the wisdom of a tenth-bhūmi bodhisattva!"
                : pct >= 80
                  ? "Excellent! Your understanding runs deep."
                  : pct >= 60
                    ? "Good progress on the path. Keep studying!"
                    : "The journey of a thousand miles begins with a single step."}
            </p>
            <div className="quiz-actions">
              <button onClick={() => startQuiz(questions.length)}>
                Try Again
              </button>
              <button onClick={goToMenu}>Back to Games</button>
            </div>
          </div>
        </div>
      );
    }

    const q = questions[current];

    return (
      <div className="game-page">
        <div className="quiz-container">
          <div className="quiz-progress">
            <div className="quiz-progress-bar">
              <div
                className="quiz-progress-fill"
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
            <span className="quiz-progress-text">
              {current + 1} / {questions.length}
            </span>
            <span className="quiz-score-text">Score: {score}</span>
          </div>

          <div className="quiz-category-badge">{q.category}</div>
          <h3 className="quiz-question">{q.question}</h3>

          <div className="quiz-options">
            {q.options.map((opt) => {
              let className = "quiz-option";
              if (answered) {
                if (opt === q.answer) className += " correct";
                else if (opt === selected) className += " wrong";
              } else if (opt === selected) {
                className += " selected";
              }
              return (
                <button
                  key={opt}
                  className={className}
                  onClick={() => handleAnswer(opt)}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {answered && (
            <div className="quiz-feedback">
              {selected === q.answer ? (
                <p className="feedback-correct">Correct!</p>
              ) : (
                <p className="feedback-wrong">
                  The answer is: <strong>{q.answer}</strong>
                </p>
              )}
              <button className="next-btn" onClick={nextQuestion}>
                {current + 1 >= questions.length ? "See Results" : "Next"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ============================================
  // RENDER: MATCHING PAIRS
  // ============================================

  if (mode === "matching") {
    if (matchFinished) {
      return (
        <div className="game-page">
          <div className="quiz-result">
            <h2>All Pairs Matched!</h2>
            <div className="score-circle">
              <span className="score-pct">{matchMoves}</span>
              <span className="score-frac">moves</span>
            </div>
            <div className="matching-stats">
              <span>Time: {formatTime(matchTime)}</span>
              <span>Pairs: {matchCards.length / 2}</span>
            </div>
            <p className="score-message">
              {matchMoves <= matchCards.length / 2 + 2
                ? "Incredible memory! A mind sharp as Mañjuśrī's sword."
                : matchMoves <= matchCards.length
                  ? "Well done! Your mindfulness is strong."
                  : "Good effort! Practice strengthens memory."}
            </p>
            <div className="quiz-actions">
              <button onClick={() => startMatching(matchCards.length / 2)}>
                Play Again
              </button>
              <button onClick={goToMenu}>Back to Games</button>
            </div>
          </div>
        </div>
      );
    }

    const cols = matchCards.length <= 12 ? 4 : matchCards.length <= 16 ? 4 : 6;

    return (
      <div className="game-page">
        <div className="matching-header">
          <button className="back-to-menu-btn small" onClick={goToMenu}>
            Back
          </button>
          <div className="matching-stats">
            <span>Moves: {matchMoves}</span>
            <span>Time: {formatTime(matchTime)}</span>
            <span>
              Matched: {matchedPairIds.size}/{matchCards.length / 2}
            </span>
          </div>
        </div>

        <div
          className="matching-grid"
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {matchCards.map((card) => {
            const isFlipped = flippedIds.includes(card.id);
            const isMatched = matchedPairIds.has(card.pairId);
            let cls = "matching-card";
            if (isFlipped) cls += " flipped";
            if (isMatched) cls += " matched";

            return (
              <button
                key={card.id}
                className={cls}
                onClick={() => handleCardFlip(card.id)}
                disabled={isMatched}
              >
                <span className="matching-card-inner">
                  <span className="matching-card-front">&#x2749;</span>
                  <span className="matching-card-back">{card.content}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ============================================
  // RENDER: SEQUENCING
  // ============================================

  if (mode === "sequencing") {
    const seqScore = seqChecked ? getSeqScore() : null;
    const allCorrect = seqScore === seqItems.length;

    return (
      <div className="game-page">
        <div className="sequence-header">
          <button className="back-to-menu-btn small" onClick={goToMenu}>
            Back
          </button>
          <h3 className="sequence-title">{seqTitle}</h3>
          {seqAttempts > 0 && (
            <span className="sequence-attempts">Attempts: {seqAttempts}</span>
          )}
        </div>

        <p className="sequence-instructions">
          {seqChecked
            ? allCorrect
              ? "Perfect order!"
              : `${seqScore} of ${seqItems.length} correct. Tap "Retry" to try again.`
            : "Tap two items to swap them, then check your order."}
        </p>

        <div className="sequence-list">
          {seqItems.map((item, i) => {
            let cls = "sequence-item";
            if (seqSelected === i) cls += " selected";
            if (seqChecked) {
              cls += item.order === i + 1 ? " correct" : " wrong";
            }

            return (
              <button
                key={item.order + "-" + item.label}
                className={cls}
                onClick={() => handleSeqTap(i)}
              >
                <span className="sequence-slot">{i + 1}</span>
                <span className="sequence-label">{item.label}</span>
                {seqChecked && item.order !== i + 1 && (
                  <span className="sequence-correct-pos">
                    should be #{item.order}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="sequence-actions">
          {!seqChecked ? (
            <button className="next-btn" onClick={checkSequence}>
              Check Order
            </button>
          ) : allCorrect ? (
            <div className="quiz-actions">
              <button onClick={() => startSequencing("medium")}>
                New Challenge
              </button>
              <button onClick={goToMenu}>Back to Games</button>
            </div>
          ) : (
            <div className="quiz-actions">
              <button onClick={retrySequence}>Retry</button>
              <button onClick={goToMenu}>Back to Games</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
