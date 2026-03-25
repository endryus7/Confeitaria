import { useState } from "react";
import "./ChicaDocuras.css";
import { candies, categories } from "../data/candies";
import Navbar from "../components/Navbar";
import CandyCard from "../components/CandyCard";

const WHATSAPP = "555193463155";

export default function ChicaDocuras() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? candies
    : candies.filter(c => c.category === activeCategory);

  function handlePedir(nomeDoDoce) {
    const mensagem = `Olá! Gostaria de fazer um pedido de ${nomeDoDoce}.`;
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }

  return (
    <div>

      <header className="hero">
        <h1 className="hero-title">Chica <span>Doçuras</span></h1>
        <div className="deco-line" />
        <p className="hero-sub">Confeitaria Artesanal — Encomendas pelo WhatsApp</p>
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
        <p>Feito com amor 🍫 · Encomendas pelo WhatsApp:<span className="number">51 9346-3155</span></p>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
          className="footer-whats"
        >
          📲 Fale conosco
        </a>
      </footer>

    </div>
  );
}