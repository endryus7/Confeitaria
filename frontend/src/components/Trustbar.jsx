import { Heart, Clock, PackageCheck } from "lucide-react";
import "./Trustbar.css";

// Guardar os dados num array, adicionar/remover itens.
const items = [
  { icon: Heart, label: "Feito à mão", desc: "com ingredientes selecionados" },
  { icon: Clock, label: "Sob encomenda", desc: "5 dias de antecedência" },
  { icon: PackageCheck, label: "Embalagem cuidadosa", desc: "pronta para presentear" },
];

export default function TrustBar() {
  return (
    <section className="trust-bar">
      {items.map((item) => (
        <div className="trust-item" key={item.label}>
          <div className="trust-icon">
            <item.icon size={20} strokeWidth={2} />
          </div>
          <div className="trust-text">
            <strong>{item.label}</strong>
            <span>{item.desc}</span>
          </div>
        </div>
      ))}
    </section>
  );
}