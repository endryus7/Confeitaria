import logo from "../assets/images/logo_chica.png";
import "./Footer.css";

const WHATSAPP = "5551993463155";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Chica Doçuras" className="footer-logo" />
          <p>Doces caseiros feitos com amor e ingredientes selecionados. Encomende pelo WhatsApp!</p>
          <div className="btn-footer">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="btn-whats">
                📲 (51) 99346-3155
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Cardápio</h4>
          <ul>
            <li>Brigadeiros</li>
            <li>Bolos</li>
            <li>Sobremesas</li>
            <li>Importados</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contato</h4>
          <ul>
            <li>(51) 99346-3155</li>
            <li>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                    WhatsApp
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/chicamontezano/" target="_blank">
                    Instagram
                </a>
            </li>
            <li>Porto Alegre, RS</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
            © 2026 Chica Doçuras. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}