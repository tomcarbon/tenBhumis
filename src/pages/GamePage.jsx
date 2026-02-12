import { useState, useMemo, useCallback } from "react";
import { allLists } from "../data";

function generateQuiz(lists) {
  const questions = [];

  // Type 1: "Which bhumi is associated with X paramita?"
  const bhumis = lists["ten-bhumis"];
  if (bhumis) {
    bhumis.items.forEach((b) => {
      questions.push({
        question: `Which bhūmi is known as "${b.name}" (${b.sanskrit})?`,
        answer: `The ${ordinal(b.number)} Bhūmi`,
        options: shuffleWith(
          `The ${ordinal(b.number)} Bhūmi`,
          bhumis.items
            .filter((x) => x.number !== b.number)
            .map((x) => `The ${ordinal(x.number)} Bhūmi`)
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
            bhumis.items
              .filter((x) => x.paramita !== b.paramita)
              .map((x) => x.paramita)
          ),
          category: "Bhūmi-Paramita",
        });
      }
    });
  }

  // Type 2: Immeasurables
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

  // Type 3: Formless absorptions
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

  // Type 4: Five paths
  const paths = lists["five-paths"];
  if (paths) {
    paths.items.forEach((item) => {
      questions.push({
        question: `What is the Sanskrit name for the "Path of ${item.name.replace('Path of ', '')}"?`,
        answer: item.sanskrit,
        options: shuffleWith(
          item.sanskrit,
          paths.items.filter((x) => x.sanskrit !== item.sanskrit).map((x) => x.sanskrit)
        ),
        category: "Five Paths",
      });
    });
  }

  // Type 5: Noble Truths
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

  // Type 6: Aggregates
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

  return questions;
}

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

export default function GamePage() {
  const allQuestions = useMemo(() => generateQuiz(allLists), []);
  const [questions, setQuestions] = useState(() =>
    allQuestions.sort(() => Math.random() - 0.5).slice(0, 10)
  );
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [mode, setMode] = useState("menu");

  const startQuiz = useCallback(
    (count) => {
      const q = allQuestions.sort(() => Math.random() - 0.5).slice(0, count);
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

  if (mode === "menu") {
    return (
      <div className="game-page">
        <header className="page-hero">
          <h1>Dharma Quiz</h1>
          <p className="hero-subtitle">
            Test your knowledge of the ten bhūmis, paramitas, immeasurables,
            and the many lists of Buddhist teaching
          </p>
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
            <button onClick={() => setMode("menu")}>Back to Menu</button>
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
