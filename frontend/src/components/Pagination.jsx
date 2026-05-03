import "./Pagination.css";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  // Gera os números de página visíveis
  function getPages() {
    const pages = [];

    if (totalPages <= 7) {
      // Menos de 7 páginas — mostra todas
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Sempre mostra primeira
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      // Páginas ao redor da atual
      const start = Math.max(2, currentPage - 1);
      const end   = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");

      // Sempre mostra última
      pages.push(totalPages);
    }

    return pages;
  }

  return (
    <div className="pagination">

      {/* Botão anterior */}
      <button
        className="page-btn page-arrow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </button>

      {/* Números */}
      {getPages().map((page, index) =>
        page === "..." ? (
          <span key={`dots-${index}`} className="page-dots">...</span>
        ) : (
          <button
            key={page}
            className={`page-btn ${currentPage === page ? "active" : ""}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}

      {/* Botão próximo */}
      <button
        className="page-btn page-arrow"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </button>

    </div>
  );
}