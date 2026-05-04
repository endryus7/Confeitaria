import logo from "../assets/images/logo_chica.png";
import "./Navbar.css";

export default function Navbar({ categories, activeCategory, onCategoryChange }) {

  function handleCat(cat) {
    onCategoryChange(cat);

    // Scroll automático para o cardápio ao clicar numa categoria
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
      <div className="navbar-links">
        {categories.map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? "nav-cat active" : "nav-cat"}
            onClick={() => handleCat(cat)}
          >
            {cat}
          </button>
        ))}
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