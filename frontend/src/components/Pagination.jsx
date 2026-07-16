import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Pagination.css";


// currentPage: número da página atual
// totalPages: total de páginas
// onPageChange: função chamada quando o usuário clica em outro número/seta
export default function Pagination({ currentPage, totalPages, onPageChange }) {

  // 1 página ou nenhuma, não mostra paginação
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

      {/* Botão anterior, desativado quando já está na página 1 */}
      <button
        className="page-btn page-arrow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <ChevronLeft size={18} strokeWidth={2.4} />
      </button>

      {/* Números de página */}
      {getPages().map((page, index) =>
        page === "..." ? (
          // "..." indicador visual
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

      {/* Botão próxima página, desativado se for última página */}
      <button
        className="page-btn page-arrow"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Próxima página"
      >
        <ChevronRight size={18} strokeWidth={2.4} />
      </button>

    </div>
  );
}