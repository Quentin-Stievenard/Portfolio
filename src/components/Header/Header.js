import "./Header.css";
import memoji from "assets/images/memoji.png";
import { Icon } from "@iconify/react";
import linkedinIcon from "@iconify-icons/jam/linkedin";
import envelopeF from "@iconify-icons/jam/envelope-f";
import roundSchool from "@iconify-icons/ic/round-school";
import alignJustify from "@iconify-icons/jam/align-justify";

export default function Header() {
  return (
    <header>
      <div className="xs-header w-100">
        <nav className="navbar navbar-light light-blue lighten-4 w-100">
          <img alt="memoji" src={memoji} />

          <button
            className="navbar-toggler toggler-example burger-btn"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="dark-blue-text ">
              <Icon icon={alignJustify} />
            </span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent1"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link" href="#about">
                  À Propos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="large-header d-flex justify-content-between align-items-center">
        <img alt="memoji" src={memoji} />

        <div>
          <a href="#about" className="mr-5">
            À Propos
          </a>
          <a href="#projects" className="ml-5 mr-5">
            Projets
          </a>
          <a href="#contact" className="ml-5">
            Contact
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/quentin-stievenard-9829171a1/"
            target="_blank"
            rel="noreferrer"
            className=" btn-icon mr-2"
          >
            <Icon icon={linkedinIcon} />
          </a>
          <a href="mailto:qstievenard@gmail.com" className="btn-icon ml-2 mr-2">
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
    </header>
  );
}
