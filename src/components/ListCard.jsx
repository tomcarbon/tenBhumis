import { useState } from "react";
import CrossReference from "./CrossReference";

export default function ListCard({ list, onNavigate }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="list-card">
      <div
        className="list-card-header"
        onClick={() => setExpanded(!expanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setExpanded(!expanded)}
      >
        <div className="list-card-title-row">
          <h3 className="list-card-title">{list.title}</h3>
          <span className="list-card-count">
            {list.items?.length || 0} items
          </span>
        </div>
        {list.subtitle && (
          <p className="list-card-subtitle">{list.subtitle}</p>
        )}
        <span className={`expand-icon ${expanded ? "expanded" : ""}`}>
          &#9662;
        </span>
      </div>

      {expanded && (
        <div className="list-card-body">
          <p className="list-card-description">{list.description}</p>

          <div className="list-card-items">
            {list.items?.map((item, idx) => (
              <ListItem key={idx} item={item} listId={list.id} />
            ))}
          </div>

          {list.crossReferences?.length > 0 && (
            <div className="list-card-refs">
              <span className="refs-label">Related:</span>
              {list.crossReferences.map((ref) => (
                <CrossReference key={ref} refId={ref} onNavigate={onNavigate} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ListItem({ item, listId }) {
  const [open, setOpen] = useState(false);

  // Handle grouped items (like the 37 factors)
  if (item.groupName) {
    return (
      <div className="list-item grouped">
        <div
          className="list-item-header"
          onClick={() => setOpen(!open)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
        >
          <span className="item-group-name">{item.groupName}</span>
          <span className="item-sanskrit">{item.sanskrit}</span>
          <span className="item-count-badge">{item.count}</span>
          <span className={`expand-icon small ${open ? "expanded" : ""}`}>
            &#9662;
          </span>
        </div>
        {open && (
          <ul className="group-members">
            {item.members?.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  const number = item.number;
  const name = item.name || item.sanskrit;
  const sanskrit = item.sanskrit && item.sanskrit !== item.name ? item.sanskrit : null;

  return (
    <div className="list-item">
      <div
        className="list-item-header"
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
      >
        {number && <span className="item-number">{number}</span>}
        <span className="item-name">{name}</span>
        {sanskrit && <span className="item-sanskrit">{sanskrit}</span>}
        {item.paramita && (
          <span className="item-badge paramita">{item.paramita}</span>
        )}
        {item.training && (
          <span className="item-badge training">{item.training}</span>
        )}
        {item.category && (
          <span className="item-badge category">{item.category}</span>
        )}
        <span className={`expand-icon small ${open ? "expanded" : ""}`}>
          &#9662;
        </span>
      </div>

      {open && (
        <div className="list-item-detail">
          {item.meaning && <p className="item-meaning">{item.meaning}</p>}
          {item.description && <p className="item-desc">{item.description}</p>}

          {item.realization && (
            <div className="detail-section">
              <strong>Realization:</strong> {item.realization}
            </div>
          )}

          {item.qualities && (
            <div className="detail-section">
              <strong>Qualities:</strong>
              <ul>
                {item.qualities.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          )}

          {item.abandonments && (
            <div className="detail-section">
              <strong>Abandonments:</strong>
              <ul>
                {item.abandonments.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          )}

          {item.subtypes && (
            <div className="detail-section">
              <strong>Subtypes:</strong>
              <ul className="subtypes-list">
                {item.subtypes.map((s, i) => (
                  <li key={i}>
                    <strong>{s.name}:</strong> {s.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.factors && (
            <div className="detail-section">
              <strong>Mental Factors:</strong>
              <ul>
                {item.factors.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {item.abandoned && (
            <div className="detail-section">
              <strong>Transcended:</strong> {item.abandoned}
            </div>
          )}

          {item.transcended && (
            <div className="detail-section">
              <strong>Transcended:</strong> {item.transcended}
            </div>
          )}

          {item.object && (
            <div className="detail-section">
              <strong>Object:</strong> {item.object}
            </div>
          )}

          {item.nearEnemy && (
            <div className="detail-section enemies">
              <span>
                <strong>Near Enemy:</strong> {item.nearEnemy}
              </span>
              <span>
                <strong>Far Enemy:</strong> {item.farEnemy}
              </span>
            </div>
          )}

          {item.aspiration && (
            <div className="detail-section aspiration">
              <em>"{item.aspiration}"</em>
            </div>
          )}

          {item.stages && (
            <div className="detail-section">
              <strong>Stages:</strong>
              <ul className="subtypes-list">
                {item.stages.map((s, i) => (
                  <li key={i}>
                    <strong>{s.name}:</strong> {s.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.inhabitants && (
            <div className="detail-section">
              <strong>Inhabitants:</strong>
              <ul>
                {item.inhabitants.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {item.practices && (
            <div className="detail-section">
              <strong>Key Practices:</strong>
              <ul>
                {item.practices.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          )}

          {item.opposite && (
            <div className="detail-section">
              <strong>Antidote to:</strong> {item.opposite}
            </div>
          )}

          {item.power && (
            <div className="detail-section">
              <strong>Developed by:</strong> {item.power}
            </div>
          )}

          {item.crossReferences?.length > 0 && (
            <div className="detail-refs">
              <span className="refs-label">See also:</span>
              {item.crossReferences.map((ref) => (
                <CrossReference key={ref} refId={ref} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
