import { useRef } from "react";
import { Phone } from "lucide-react";
import logo from "../assets/images/logo_chica.png";
import "./Navbar.css";

export default function Navbar({ categories, activeCategory, onCategoryChange }) {
  const linksRef = useRef(null);

  function scrollCatIntoCenter(btn) {
    const container = linksRef.current;
    if (!container || !btn) return;
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const offset = btnRect.left - containerRect.left;
    const centerPos = container.scrollLeft + offset - (container.clientWidth / 2) + (btnRect.width / 2);
    container.scrollTo({ left: centerPos, behavior: "smooth" });
  }

  function handleCat(cat, e) {
    onCategoryChange(cat);
    scrollCatIntoCenter(e.currentTarget);

    // Scroll automático
    const cardapio = document.getElementById("cardapio");
    if (cardapio) {
      cardapio.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="navbar">

      {/* Linha 1: marca */}
      <div className="navbar-top">
        <div className="navbar-logo">
          <img src={logo} alt="Chica Doçuras" className="navbar-logo-img" />
        </div>
        <div className="navbar-right">
          <span className="navbar-phone">
            <Phone size={14} strokeWidth={2.2} /> (51) 99346-3155
          </span>
          <a
            href="https://wa.me/5551993463155"
            target="_blank"
            rel="noreferrer"
            className="navbar-btn"
          >
            Fazer Pedido
          </a>
        </div>
      </div>

      {/* Linha 2: categorias */}
      <div className="navbar-cats-bar">
        <div className="navbar-links-wrap">
          <div className="navbar-links" ref={linksRef}>
            {categories.map(cat => (
              <button
                key={cat}
                className={activeCategory === cat ? "nav-cat active" : "nav-cat"}
                onClick={(e) => handleCat(cat, e)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

    </nav>
  );
}