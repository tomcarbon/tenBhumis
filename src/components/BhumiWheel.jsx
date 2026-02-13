import { tenBhumis } from "../data";
import { useBhumi } from "../context/BhumiContext";

// Traditional colors associated with the ten Bodhisattva grounds
const COLORS = [
  "#c94a4a", "#c8c4be", "#c9a040", "#8b6843", "#2a4080",
  "#ddd8d0", "#4a78b4", "#eeeee8", "#8a5098", "#6a30a0",
];

export default function BhumiWheel({ onSelect }) {
  const { setActiveGround } = useBhumi();
  const size = 380;
  const center = size / 2;
  const outerR = 170;
  const innerR = 70;

  return (
    <div className="bhumi-wheel-container">
      <svg viewBox={`0 0 ${size} ${size}`} className="bhumi-wheel">
        {tenBhumis.items.map((bhumi, i) => {
          const startAngle = (i * 36 - 90) * (Math.PI / 180);
          const endAngle = ((i + 1) * 36 - 90) * (Math.PI / 180);
          const midAngle = ((i + 0.5) * 36 - 90) * (Math.PI / 180);

          const x1o = center + outerR * Math.cos(startAngle);
          const y1o = center + outerR * Math.sin(startAngle);
          const x2o = center + outerR * Math.cos(endAngle);
          const y2o = center + outerR * Math.sin(endAngle);
          const x1i = center + innerR * Math.cos(endAngle);
          const y1i = center + innerR * Math.sin(endAngle);
          const x2i = center + innerR * Math.cos(startAngle);
          const y2i = center + innerR * Math.sin(startAngle);

          const textR = (outerR + innerR) / 2;
          const tx = center + textR * Math.cos(midAngle);
          const ty = center + textR * Math.sin(midAngle);

          const path = [
            `M ${x1o} ${y1o}`,
            `A ${outerR} ${outerR} 0 0 1 ${x2o} ${y2o}`,
            `L ${x1i} ${y1i}`,
            `A ${innerR} ${innerR} 0 0 0 ${x2i} ${y2i}`,
            "Z",
          ].join(" ");

          return (
            <g
              key={i}
              className="wheel-segment"
              onClick={() => { onSelect?.(bhumi); setActiveGround(bhumi); }}
            >
              <path d={path} fill={COLORS[i]} opacity={0.85} />
              <text
                x={tx}
                y={ty}
                textAnchor="middle"
                dominantBaseline="middle"
                className="wheel-text"
                transform={`rotate(${(i + 0.5) * 36}, ${tx}, ${ty})`}
              >
                {bhumi.number}
              </text>
            </g>
          );
        })}
        <g className="wheel-center-group" onClick={() => setActiveGround(null)} style={{ cursor: "pointer" }}>
          <circle cx={center} cy={center} r={innerR - 2} className="wheel-center" />
          <text
            x={center}
            y={center - 8}
            textAnchor="middle"
            dominantBaseline="middle"
            className="wheel-center-text"
          >
            Ten
          </text>
          <text
            x={center}
            y={center + 12}
            textAnchor="middle"
            dominantBaseline="middle"
            className="wheel-center-text"
          >
            Bhūmis
          </text>
        </g>
      </svg>
    </div>
  );
}
