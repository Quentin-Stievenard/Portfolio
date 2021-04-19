import "./Cover.css";
import memoji2 from "assets/images/memoji2.png";

export default function Cover() {
  return (
    <div className="cover">
      <div className="cover-left">
        <h1>
          Developpeur Web / Mobile{" "}
          <span>
            <br />
            Disponible
          </span>
        </h1>
        <p>
          Ma mission est de vous aider à <b>réaliser</b> vos projets avec ma
          <b> polyvalence</b> et ma capacité à <b>m'adapter</b> à différentes
          situations, afin de faire de vos idées une <b>réalité</b>.
        </p>
      </div>
      <div className="head-cover">
        <img alt="mimoji2" src={memoji2} />
      </div>
    </div>
  );
}
