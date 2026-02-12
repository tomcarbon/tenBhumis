import { NavLink } from "react-router-dom";

const tabs = [
  { path: "/", label: "Main", icon: "◉" },
  { path: "/game", label: "Game", icon: "⬡" },
  { path: "/support", label: "Support", icon: "☸" },
  { path: "/about", label: "About", icon: "◈" },
];

export default function TabNav() {
  return (
    <nav className="tab-nav">
      <div className="tab-nav-brand">
        <span className="brand-icon">༄</span>
        <span className="brand-text">Ten Bhumis</span>
      </div>
      <div className="tab-nav-links">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === "/"}
            className={({ isActive }) =>
              `tab-link ${isActive ? "active" : ""}`
            }
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
