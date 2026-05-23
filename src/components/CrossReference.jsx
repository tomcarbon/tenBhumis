import { allLists } from "../data";

export default function CrossReference({ refId, onNavigate }) {
  const list = allLists[refId];
  const isResolved = Boolean(list);
  const label = isResolved ? list.title : refId.replace(/-/g, " ");

  const handleClick = () => {
    if (onNavigate && isResolved) {
      onNavigate(refId);
    }
  };

  return (
    <button
      className={`cross-ref-tag${isResolved ? "" : " unresolved"}`}
      onClick={handleClick}
      disabled={!isResolved}
      title={isResolved ? list.subtitle || "" : "Not yet available"}
    >
      {label}
    </button>
  );
}
