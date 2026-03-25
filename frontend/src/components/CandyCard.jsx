import "./CandyCard.css";

export default function CandyCard({ candy, onPedir }) {
  return (
    <div className="candy-card">
      <div className="candy-image-wrap">
        <img src={candy.image} alt={candy.name} />
        <span className="candy-tag">{candy.category}</span>
      </div>

      <div className="candy-body">
        <h3 className="candy-name">{candy.name}</h3>
        <p className="candy-desc">{candy.desc}</p>

        <div className="candy-footer">
          <div className="candy-price">
            <small>R$</small>
            {candy.price.toFixed(2).replace(".", ",")}
          </div>
          <button className="pedir-btn" onClick={() => onPedir(candy.name)}>
            Pedir
          </button>
        </div>
      </div>
    </div>
  );
}