import ListCard from "./ListCard";
import { allLists } from "../data";

export default function CategorySection({ category, onNavigate, highlightId }) {
  return (
    <section className="category-section">
      <div className="category-header">
        <h2 className="category-title">{category.name}</h2>
        <p className="category-description">{category.description}</p>
      </div>
      <div className="category-lists">
        {category.lists.map((listId) => {
          const list = allLists[listId];
          if (!list) return null;
          return (
            <div
              key={listId}
              id={`list-${listId}`}
              className={highlightId === listId ? "highlighted" : ""}
            >
              <ListCard list={list} onNavigate={onNavigate} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
