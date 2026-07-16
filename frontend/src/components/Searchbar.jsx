import { Search, X } from "lucide-react";
import "./Searchbar.css"

// Campo de pesquisa dos doces.
export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrap">
      <Search className="search-icon" size={17} strokeWidth={2.2} />
      <input
        type="text"
        className="search-input"
        placeholder="Pesquisar doce..."
        value={value}
        onChange={(e) => onChange(e.target.value)} // avisa cada letra digitada
      />

      {/* Botão X, aparece quando tem algo digitado, para limpar a pesquisa */}
      {value && (
        <button className="search-clear" onClick={() => onChange("")} aria-label="Limpar pesquisa">
          <X size={13} strokeWidth={2.8} />
        </button>
      )}
    </div>
  );
}