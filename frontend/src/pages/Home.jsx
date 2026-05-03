import { useState } from "react";
import "./Home.css";
import { candies, categories } from "../data/candies";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CandyCard from "../components/CandyCard";
import Searchbar from "../components/Searchbar";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const WHATSAPP = "5551993463155";
const ITEMS_POR_PAGINA = 20;

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtra categoria e pesquisa ao mesmo tempo
  const filtered = candies.filter(candy => {
    const matchCategoria = activeCategory === "Todos" || candy.category === activeCategory;
    const matchPesquisa  = candy.name.toLowerCase().includes(search.toLowerCase());
    return matchCategoria && matchPesquisa;
  });

  // Calcula páginas
  const totalPages   = Math.ceil(filtered.length / ITEMS_POR_PAGINA);
  const startIndex   = (currentPage - 1) * ITEMS_POR_PAGINA;
  const paginados    = filtered.slice(startIndex, startIndex + ITEMS_POR_PAGINA);

  function handlePedir(nomeDoDoce) {
    const msg = `Olá Chica! Gostaria de fazer um pedido de ${nomeDoDoce}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  function handleVerTodos() {
    setActiveCategory("Todos");
    setSearch("");
    setCurrentPage(1);
    document.getElementById("cardapio").scrollIntoView({ behavior: "smooth" });
  }

  // Limpa a pesquisa
  function handleCategoria(cat) {
    setActiveCategory(cat);
    setSearch(""); // Reseta search
    setCurrentPage(1); // volta para página 1 ao trocar categoria
  }

  function handleSearch(value) {
    setSearch(value);
    setCurrentPage(1); // volta para página 1 ao pesquisar
  }

  function handlePageChange(page) {
    setCurrentPage(page);
    // Rolagem suave
    document.getElementById("cardapio").scrollIntoView({ behavior: "smooth" });
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
          <Searchbar value={search} onChange={handleSearch} />
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

        {/* Info paginação */}
        {!search && filtered.length > 0 && (
          <p className="pagination-info">
            Mostrando {startIndex + 1}–{Math.min(startIndex + ITEMS_POR_PAGINA, filtered.length)} de {filtered.length} doces
          </p>
        )}

        {/* Grid paginação */}
        {paginados.length > 0 ? (
          <div className="candy-grid">
            {paginados.map(candy => (
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

        {/* Paginação */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

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