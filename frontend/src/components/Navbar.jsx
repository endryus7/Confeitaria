import { useEffect, useRef } from "react";
import logo from "../assets/images/logo_chica.png";
import "./Navbar.css";

export default function Navbar({ categories, activeCategory, onCategoryChange }) {
  const linksRef = useRef(null);
  const wrapRef  = useRef(null);

  // Atualiza fade conforme o scroll
  useEffect(() => {
    const el   = linksRef.current;
    const wrap = wrapRef.current;
    if (!el || !wrap) return;

    function updateFade() {
      const atStart = el.scrollLeft <= 2;
      const atEnd   = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
      wrap.classList.toggle("scrolled", !atStart);
      wrap.classList.toggle("at-end", atEnd);
    }

    updateFade();
    el.addEventListener("scroll", updateFade);
    window.addEventListener("resize", updateFade);
    return () => {
      el.removeEventListener("scroll", updateFade);
      window.removeEventListener("resize", updateFade);
    };
  }, [categories]);

  function scrollCatIntoCenter(btn) {
    const container = linksRef.current;
    if (!container || !btn) return;
    const containerRect = container.getBoundingClientRect();
    const btnRect       = btn.getBoundingClientRect();
    const offset        = btnRect.left - containerRect.left;
    const centerPos     = container.scrollLeft + offset - (container.clientWidth / 2) + (btnRect.width / 2);
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

      <div className="navbar-logo">
        <img src={logo} alt="Chica Doçuras" className="navbar-logo-img" />
      </div>

      {/* Categorias com scroll horizontal */}
      <div className="navbar-links-wrap" ref={wrapRef}>
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

    </nav>
  );
}