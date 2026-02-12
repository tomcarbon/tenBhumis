import CrossReference from "./CrossReference";

const COLORS = [
  "#4a90a4", "#5ba08f", "#6db07a", "#8fbc5e", "#b8c84a",
  "#d4b83c", "#d99a3e", "#de7c40", "#c95e5e", "#a44a8a",
];

export default function BhumiDetail({ bhumi, onClose }) {
  if (!bhumi) return null;
  const color = COLORS[bhumi.number - 1];

  return (
    <div className="bhumi-detail" style={{ borderColor: color }}>
      <div className="bhumi-detail-header" style={{ backgroundColor: color }}>
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
            <p className="paramita-tag" style={{ backgroundColor: color }}>
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
