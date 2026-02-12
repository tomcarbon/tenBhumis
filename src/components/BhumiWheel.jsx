import { tenBhumis } from "../data";

const COLORS = [
  "#4a90a4", "#5ba08f", "#6db07a", "#8fbc5e", "#b8c84a",
  "#d4b83c", "#d99a3e", "#de7c40", "#c95e5e", "#a44a8a",
];

export default function BhumiWheel({ onSelect }) {
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
              onClick={() => onSelect?.(bhumi)}
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
      </svg>
    </div>
  );
}
