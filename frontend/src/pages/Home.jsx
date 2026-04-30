import { useState } from "react";
import "./Home.css";
import { candies, categories } from "../data/candies";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CandyCard from "../components/CandyCard";
import Footer from "../components/Footer";

const WHATSAPP = "5551993463155";

export default function DocesPaixao() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? candies
    : candies.filter(c => c.category === activeCategory);

  function handlePedir(nomeDoDoce) {
    const msg = `Olá Chica! Gostaria de fazer um pedido de *${nomeDoDoce}* 🍬`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <div>
      <Topbar />

      <Navbar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <Hero />

      {/* Produtos */}
      <section className="produtos">
        <div className="produtos-header">
          <div>
            <div className="produtos-label">Cardápio</div>
            <h2 className="produtos-title">Nossos Doces</h2>
          </div>
          <span className="produtos-link">Ver todos →</span>
        </div>

        <div className="cats-row">
          {categories.map(cat => (
            <button
              key={cat}
              className={activeCategory === cat ? "cat-pill active" : "cat-pill"}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="candy-grid">
          {filtered.map(candy => (
            <CandyCard key={candy.id} candy={candy} onPedir={handlePedir} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <div className="cta-banner">
        <div className="cta-banner-text">
          <strong>Encomendas para festas e eventos 🎉</strong>
          <span>Entre em contato e faça seu pedido personalizado</span>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
          className="btn-whats"
        >
          📲 Chamar no WhatsApp
        </a>
      </div>

      <Footer />
    </div>
  );
}