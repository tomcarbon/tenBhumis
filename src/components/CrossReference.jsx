import { allLists } from "../data";

export default function CrossReference({ refId, onNavigate }) {
  const list = allLists[refId];
  const label = list ? list.title : refId.replace(/-/g, " ");

  const handleClick = () => {
    if (onNavigate && list) {
      onNavigate(refId);
    }
  };

  return (
    <button
      className="cross-ref-tag"
      onClick={handleClick}
      title={list?.subtitle || ""}
    >
      {label}
    </button>
  );
}
