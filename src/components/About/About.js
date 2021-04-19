import "./About.css";
import memoji2 from "assets/images/memoji2.png";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="head-about">
        <img alt="memoji2" src={memoji2} />
      </div>
      <div className="about-right">
        <p className="who">Qui est Quentin Stievenard </p>
        <h3>À propos de moi</h3>
        <p>
          Passioné par l'informatique depuis tout petit, j'ai fait des études
          dans le développement informatique ce qui m'a mené vers le
          développement web et mobile. Ces domaines sont des domaines de
          développement dans lesquelles je suis le plus à l'aise. je connais
          aujourd'hui pas loin de 10 langage de programmation (Web et Mobile
          confondu).
        </p>
      </div>
    </div>
  );
}
