import "./CandyCard.css";

// candy: objeto com os dados do doce
// onPedir: função chamada ao clicar em pedir, recebe o nome do doce
export default function CandyCard({ candy, onPedir }) {
  return (
    <div className="candy-card">
      <div className="candy-img-wrap">
        <img src={candy.image} alt={candy.name} />
        {/* Etiqueta com a categoria do doce, no canto da imagem */}
        <span className="candy-tag">{candy.category}</span>
      </div>
      <div className="candy-body">
        <h3 className="candy-name">{candy.name}</h3>
        <p className="candy-desc">{candy.desc}</p>
        <div className="candy-footer">
          <div className="candy-price">
            <small>R$</small>
            {/* Formata o preço */}
            {candy.price.toFixed(2).replace(".", ",")}
          </div>
          <button className="candy-btn" onClick={() => onPedir(candy.name)}>
            Pedir
          </button>
        </div>
      </div>
    </div>
  );
}