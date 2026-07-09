import logo from "../assets/images/logo_chica.png";
import { MessageCircle, Instagram, MapPin, Phone } from "lucide-react";
import "./Footer.css";

const WHATSAPP = "5551993463155";

const cardapioLinks = [
  "Brigadeiros Tradicionais",
  "Doces Finos",
  "Cupcakes",
  "Bolos da Vovó",
  "Tortas",
  "Sobremesas",
];

export default function Footer() {

  function irParaCardapio() {
    const cardapio = document.getElementById("cardapio");
    if (cardapio) cardapio.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Chica Doçuras" className="footer-logo" />
          <p>Doces caseiros feitos com amor e ingredientes selecionados. Encomende pelo WhatsApp!</p>
        </div>

        <div className="footer-col">
          <h4>Cardápio</h4>
          <ul>
            {cardapioLinks.map(item => (
              <li key={item}>
                <button onClick={irParaCardapio} className="footer-link-btn">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contato</h4>
          <ul>
            <li>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                <MessageCircle size={16} strokeWidth={2} /> WhatsApp
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/chicamontezano/" target="_blank" rel="noreferrer">
                <Instagram size={16} strokeWidth={2} /> @chicamontezano
              </a>
            </li>
            <li>
              <MapPin size={16} strokeWidth={2} /> Porto Alegre, RS
            </li>
            <li>
              <Phone size={16} strokeWidth={2} /> (51) 99346-3155
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Chica Doçuras. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}