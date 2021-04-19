import "./Projects.css";
import ProjectCard from "components/Projects/ProjectCard";

import meteo from "assets/images/meteo.jpg";
import calculatrice from "assets/images/calculatrice.jpg";
import maree from "assets/images/maree.jpg";
import calcProjet from "assets/images/calc-projet.png";
import mareeProjet from "assets/images/maree-projet.png";
import meteoProjet from "assets/images/meteo-project.jpg";

export default function Projects() {
  return (
    <div
      id="projects"
      className="d-flex flex-wrap justify-content-center align-items-center"
    >
      <ProjectCard
        image={meteo}
        title={"Méteo du jour"}
        texte={"Développement & Design AVR 2021"}
        imgProjet={meteoProjet}
        longDescription={
          "Développement d'un site internet permettant de savoir la température exacte dans la ville recherché. Génère une image de fond selon la temps qu'il fait"
        }
      />
      <ProjectCard
        image={calculatrice}
        title={"Calculatrice en ligne"}
        texte={"Développement & Design AVR 2021"}
        imgProjet={calcProjet}
        longDescription={
          "Développement d'un calucatrice en ligne permettant de faire les opérations basiques"
        }
      />
      <ProjectCard
        image={maree}
        title={"Données sur les marées"}
        texte={"Développement DEC 2020 - MAR 2021"}
        imgProjet={mareeProjet}
        longDescription={
          "Développement d'un site internet permettant de consulter les différents informations sur les marrées du port de Saint-Malo à chaque date et chaque horaire de l'année"
        }
      />
    </div>
  );
}
