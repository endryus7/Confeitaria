import "./Navbar.css";

export default function Navbar({ categories, activeCategory, onCategoryChange }) {
  return (
    <nav className="nav">
      {categories.map(cat => (
        <button
          key={cat}
          className={activeCategory === cat ? "cat-btn active" : "cat-btn"}
          onClick={() => onCategoryChange(cat)}>
          {cat}
        </button>
      ))}
    </nav>
  );
}