import "./Skills.css";

export default function Skills() {
  return (
    <div className="skill">
      <h1>Compétences</h1>
      <div className="d-flex justify-content-center mt-5 skill-container">
        <div className="skill-part">
          <h2>Développement Web</h2>
          <div className="skills">
            <p>ReactJS</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>PHP</p>
            <p>JavaEE</p>
            <p>Javascript</p>
            <p>Ajax</p>
          </div>
        </div>
        <div className="skill-part">
          <h2>Programmation</h2>
          <div className="skills">
            <p>Langage C</p>
            <p>Python</p>
            <p>Java</p>
          </div>
        </div>
        <div className="skill-part">
          <h2>Autres</h2>
          <div className="skills">
            <p>XML</p>
            <p>SQL</p>
            <p>PL/SQL</p>
            <p>UML</p>
            <p>MySQL</p>
            <p>JDBC</p>
            <p>R</p>
          </div>
        </div>
      </div>
    </div>
  );
}
