import { useState } from "react";
import "./Home.css";
import logo from "../assets/images/logo_chica.png";
import { candies, categories } from "../data/candies";
import Navbar from "../components/Navbar";
import CandyCard from "../components/CandyCard";

const WHATSAPP = "5551993463155";

export default function DocesPaixao() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? candies
    : candies.filter(c => c.category === activeCategory);

  function handlePedir(nomeDoDoce) {
    const mensagem = `Olá Chica! Gostaria de fazer um pedido de *${nomeDoDoce}* 🍬`;
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }

  return (
    <div>

      <header className="hero">
        <img src={logo} alt="Chica Doçuras" className="hero-logo" />
        <h1 className="hero-nome">Chica Doçuras</h1>
        <p className="hero-sub">Doces Caseiros feitos com amor 🍓</p>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
          className="hero-whats"
        >
          📲 Fazer pedido pelo WhatsApp
        </a>
      </header>

      <Navbar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="main">
        <div className="section-header">
          <h2 className="section-title">
            {activeCategory === "Todos" ? "Nossos Doces" : activeCategory}
          </h2>
          <span className="section-count">{filtered.length} itens</span>
        </div>

        <div className="candy-grid">
          {filtered.map(candy => (
            <CandyCard key={candy.id} candy={candy} onPedir={handlePedir} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <img src={logo} alt="Chica Doçuras" />
        <p>Chica Doçuras — Doces Caseiros 🍫</p>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
          className="footer-whats"
        >
          📲 (51) 99346-3155
        </a>
      </footer>

    </div>
  );
}