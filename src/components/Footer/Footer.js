import "./Footer.css";
import memoji from "assets/images/memoji.png";
import { Icon } from "@iconify/react";
import linkedinIcon from "@iconify-icons/jam/linkedin";
import envelopeF from "@iconify-icons/jam/envelope-f";
import roundSchool from "@iconify-icons/ic/round-school";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="d-flex justify-content-between align-items-center footer-head">
        <div>
          <img alt="memoji" src={memoji} />
          <div className="me">
            <h2>Quentin Stievenard</h2>
            <p>Développeur FullStack</p>
          </div>
          <div className="email">
            <p>Me contacter à</p>
            <h2>qstievenard@gmail.com</h2>
          </div>
        </div>
        <div className="contact">
          <h1>Mes disponibilités</h1>
          <p>
            Je suis toujours disponible pour parler de vos projet. N'hesitez pas
            à me contacter sur mes differents réseaux
          </p>
          <div className="mt-5">
            <a
              href="https://www.linkedin.com/in/quentin-stievenard-9829171a1/"
              target="_blank"
              rel="noreferrer"
              className=" btn-icon mr-2"
            >
              <Icon icon={linkedinIcon} />
            </a>
            <a
              href="mailto:qstievenard@gmail.com"
              className="btn-icon ml-2 mr-2"
            >
              <Icon icon={envelopeF} />
            </a>
            <a
              href="https://www.iut-velizy-rambouillet.uvsq.fr"
              target="_blank"
              rel="noreferrer"
              className="btn-icon ml-2"
            >
              <Icon icon={roundSchool} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-link">
        <div>
          <a className="ml-0" href="#about">
            À propos
          </a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </div>
        <h5>&copy; Quentin Stievenard - Inspiré par Oğuz Yağız Kara</h5>
      </div>
    </footer>
  );
}
