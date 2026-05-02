import { useState } from "react";
import "./Home.css";
import { candies, categories } from "../data/candies";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CandyCard from "../components/CandyCard";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const WHATSAPP = "5551993463155";

export default function DocesPaixao() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  // Filtra categoria e pesquisa ao mesmo tempo
  const filtered = candies.filter(candy => {
    const matchCategoria = activeCategory === "Todos" || candy.category === activeCategory;
    const matchPesquisa  = candy.name.toLowerCase().includes(search.toLowerCase());
    return matchCategoria && matchPesquisa;
  });

  function handlePedir(nomeDoDoce) {
    const msg = `Olá Chica! Gostaria de fazer um pedido de ${nomeDoDoce}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  function handleVerTodos() {
    setActiveCategory("Todos");
    setSearch("");
    document.getElementById("cardapio").scrollIntoView({ behavior: "smooth" });
  }

  // Limpa a pesquisa
  function handleCategoria(cat) {
    setActiveCategory(cat);
    setSearch("");
  }

  return (
    <div>
      <Topbar />

      <Navbar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoria}
      />

      <Hero />

      <section className="produtos" id="cardapio">
        <div className="produtos-header">
          <div>
            <div className="produtos-label">Cardápio</div>
            <h2 className="produtos-title">Nossos Doces</h2>
          </div>
          <button className="produtos-link" onClick={handleVerTodos}>
            Ver todos →
          </button>
        </div>

        {/* Filtros + barra de pesquisa */}
        <div className="produtos-controls">
          <div className="cats-row">
            {categories.map(cat => (
              <button
                key={cat}
                className={activeCategory === cat ? "cat-pill active" : "cat-pill"}
                onClick={() => handleCategoria(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Resultado da pesquisa */}
        {search && (
          <p className="search-result-info">
            {filtered.length === 0
              ? `Nenhum doce encontrado para "${search}"`
              : `${filtered.length} resultado${filtered.length > 1 ? "s" : ""} para "${search}"`
            }
          </p>
        )}

        {filtered.length > 0 ? (
          <div className="candy-grid">
            {filtered.map(candy => (
              <CandyCard key={candy.id} candy={candy} onPedir={handlePedir} />
            ))}
          </div>
        ) : (
          <div className="empty-search">
            <span>🍬</span>
            <p>Nenhum doce encontrado.</p>
            <button className="cat-pill" onClick={handleVerTodos}>
              Ver todos os doces
            </button>
          </div>
        )}
      </section>

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