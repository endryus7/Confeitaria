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
        <div className="hero-photo-main">
          <img
            src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80"
            alt="Doces da Chica"
          />
        </div>
        <div className="hero-photo-sec">
          <img
            src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=300&q=80"
            alt="Bolo da Chica"
          />
        </div>
        <div className="hero-logo-badge">
          <img src={logo} alt="Chica Doçuras" />
        </div>
      </div>
    </section>
  );
}