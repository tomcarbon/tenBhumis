import CrossReference from "./CrossReference";

// Traditional colors associated with the ten Bodhisattva grounds
const COLORS = [
  "#c94a4a", "#c8c4be", "#c9a040", "#8b6843", "#2a4080",
  "#ddd8d0", "#4a78b4", "#eeeee8", "#8a5098", "#6a30a0",
];

// Light bhumi colors need dark text for readability
function textColorFor(hex) {
  const [r, g, b] = [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55 ? "#1a1a2e" : "#e8e8f0";
}

export default function BhumiDetail({ bhumi, onClose }) {
  if (!bhumi) return null;
  const color = COLORS[bhumi.number - 1];

  return (
    <div className="bhumi-detail" style={{ borderColor: color }}>
      <div className="bhumi-detail-header" style={{ backgroundColor: color, color: textColorFor(color) }}>
        <span className="bhumi-number">{bhumi.number}</span>
        <div>
          <h3>
            {bhumi.name} — {bhumi.sanskrit}
          </h3>
          <p className="bhumi-meaning">{bhumi.meaning}</p>
        </div>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>

      <div className="bhumi-detail-body">
        <p>{bhumi.description}</p>

        <div className="bhumi-detail-grid">
          <div className="detail-block">
            <h4>Corresponding Perfection</h4>
            <p className="paramita-tag" style={{ backgroundColor: color, color: textColorFor(color) }}>
              {bhumi.paramita}
            </p>
          </div>

          <div className="detail-block">
            <h4>Core Realization</h4>
            <p>{bhumi.realization}</p>
          </div>
        </div>

        {bhumi.qualities && (
          <div className="detail-block">
            <h4>Qualities Attained</h4>
            <ul>
              {bhumi.qualities.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        )}

        {bhumi.abandonments && (
          <div className="detail-block">
            <h4>What Is Abandoned</h4>
            <ul>
              {bhumi.abandonments.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        )}

        {bhumi.crossReferences?.length > 0 && (
          <div className="detail-block">
            <h4>Related Teachings</h4>
            <div className="detail-refs">
              {bhumi.crossReferences.map((ref) => (
                <CrossReference key={ref} refId={ref} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
