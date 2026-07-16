import Bolo_de_kitkat from "../assets/images/Bolo_de_kitkat01.jpeg";
import Branquinho_com_nutela from "../assets/images/Brigadeiro11.png"
import { Sparkles, MessageCircle } from "lucide-react";
import "./Hero.css";

const WHATSAPP = "5551993463155";

export default function Hero() {
  // Abre o WhatsApp em nova aba já com uma mensagem
  function handlePedir() {
    const msg = "Olá Chica! Gostaria de fazer um pedido ";
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <section className="hero">
      {/* Fundo com gradiente rosa */}
      <div className="hero-bg" />

      {/* Círculos por cima do fundo */}
      <div className="hero-deco">
        <div className="hero-deco-c1" />
        <div className="hero-deco-c2" />
        <div className="hero-deco-c3" />
      </div>

      <div className="hero-content fade-in-up">
        <h1 className="hero-title">
          Feitos com<br />
          <span>Amor ❤️</span>
        </h1>
        <p className="hero-sub">
          Os melhores doces caseiros,<br />
          direto da nossa cozinha pra sua festa
        </p>
        <button className="hero-cta" onClick={handlePedir}>
          <MessageCircle size={17} strokeWidth={2.2} /> Pedir pelo WhatsApp
        </button>
      </div>

      {/* 2 Fotos circulares, com animação com atraso */}
      <div className="hero-photos fade-in-up" style={{ animationDelay: "0.15s" }}>
        <div className="hero-photo-main">
          <img
            src={Bolo_de_kitkat}
            alt="Doces da Chica"
            // Se a imagem falhar ao carregar, esconde o img e coloca um fundo rosa no lugar
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.background = "linear-gradient(135deg, #f9a8c0, #e8799a)";
            }}
          />
        </div>
        <div className="hero-photo-sec">
          <img
            src={Branquinho_com_nutela}
            alt="Bolo da Chica"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.background = "linear-gradient(135deg, #5c2d0e, #a05e20)";
            }}
          />
        </div>
      </div>
    </section>
  );
}