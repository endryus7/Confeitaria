import { Clock } from "lucide-react";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <Clock size={13} strokeWidth={2.4} />
      <span>Encomendas com 5 dias de antecedência</span>
    </div>
  );
}