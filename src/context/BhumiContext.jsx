import { createContext, useContext, useState, useEffect } from "react";

const DEFAULT_BG = "#1a1a2e";

// Traditional colors associated with the ten Bodhisattva grounds
const GROUND_COLORS = [
  "#c94a4a", "#c8c4be", "#c9a040", "#8b6843", "#2a4080",
  "#ddd8d0", "#4a78b4", "#eeeee8", "#8a5098", "#6a30a0",
];

function darkenForBackground(hex, baseHex = "#1a1a2e", mix = 0.3) {
  const parse = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const [r1, g1, b1] = parse(hex);
  const [r2, g2, b2] = parse(baseHex);
  const blend = (a, b) => Math.round(a * mix + b * (1 - mix));
  return `rgb(${blend(r1, r2)}, ${blend(g1, g2)}, ${blend(b1, b2)})`;
}

const BhumiContext = createContext(null);

export function BhumiProvider({ children }) {
  const [activeGround, setActiveGround] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = activeGround
      ? darkenForBackground(GROUND_COLORS[activeGround.number - 1])
      : DEFAULT_BG;
  }, [activeGround]);

  return (
    <BhumiContext.Provider value={{ activeGround, setActiveGround }}>
      {children}
    </BhumiContext.Provider>
  );
}

export function useBhumi() {
  return useContext(BhumiContext);
}
