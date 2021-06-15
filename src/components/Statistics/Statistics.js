import "./Statistics.scss";
import { Icon } from "@iconify/react";
import dotIcon from "@iconify-icons/bi/dot";

export default function Statistics() {
  return (
    <div className="statistics">
      <div className="statistics-left">
        <h3>20+ </h3>
        <p>Projets Terminés</p>
      </div>
      <Icon icon={dotIcon} />
      <div className="statistics-center">
        <h3>3</h3>
        <p>Années d'Expérience</p>
      </div>
      <Icon icon={dotIcon} />
      <div className="statistics-right">
        <h3>7</h3>
        <p>Technologies Différentes</p>
      </div>
    </div>
  );
}
