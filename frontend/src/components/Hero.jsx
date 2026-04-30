import logo from "../assets/images/logo_chica.png";
import "./Hero.css";

const WHATSAPP = "5551993463155";

export default function Hero() {
  function handlePedir() {
    const msg = "Olá Chica! Gostaria de fazer um pedido 🍬";
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <section className="hero">
      <div className="hero-bg" />

      <div className="hero-deco">
        <div className="hero-deco-c1" />
        <div className="hero-deco-c2" />
        <div className="hero-deco-c3" />
      </div>

      <div className="hero-content">
        <div className="hero-tag">✨ Doces Caseiros Artesanais</div>
        <h1 className="hero-title">
          Feitos com<br />
          <span>Amor ❤️</span>
        </h1>
        <p className="hero-sub">
          Os melhores doces caseiros,<br />
          direto da nossa cozinha pra sua festa
        </p>
        <button className="hero-cta" onClick={handlePedir}>
          📲 Pedir pelo WhatsApp
        </button>
      </div>

      <div className="hero-photos">
        {/* Troque o src pelas suas fotos reais */}
        <div className="hero-photo-main">
          <img
            src="/fotos/hero-principal.jpg"
            alt="Doces da Chica"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.background = "linear-gradient(135deg, #f9a8c0, #e8799a)";
            }}
          />
        </div>
        <div className="hero-photo-sec">
          <img
            src="/fotos/hero-secundaria.jpg"
            alt="Bolo da Chica"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.background = "linear-gradient(135deg, #5c2d0e, #a05e20)";
            }}
          />
        </div>
        <div className="hero-logo-badge">
          <img src={logo} alt="Chica Doçuras" />
        </div>
      </div>
    </section>
  );
}