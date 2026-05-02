import { useState } from "react";
import logo from "../assets/images/logo_chica.png";
import "./Navbar.css";

export default function Navbar({ categories, activeCategory, onCategoryChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleCat(cat) {
    onCategoryChange(cat);
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <img src={logo} alt="Chica Doçuras" className="navbar-logo-img" />
      </div>

      {/* Links */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {categories.map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? "nav-cat active" : "nav-cat"}
            onClick={() => handleCat(cat)}
          >
            {cat}
          </button>
        ))}
        
        {/* Botão de pedido menu mobile */}
        <a
          href="https://wa.me/5551993463155"
          target="_blank"
          rel="noreferrer"
          className="navbar-btn mobile-only"
        >
          📲 Fazer Pedido
        </a>
      </div>

      <div className="navbar-right">
        <span className="navbar-phone">📞 (51) 99346-3155</span>
        <a
          href="https://wa.me/5551993463155"
          target="_blank"
          rel="noreferrer"
          className="navbar-btn desktop-only"
        >
          Fazer Pedido
        </a>
      </div>

      {/* Botão hamburguer */}
      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </nav>
  );
}