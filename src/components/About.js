import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <h3 className="about__info">Acerca de Nosotros</h3>
        <p className="about__details">
          Somos automotora rpm de concón, con mas de 10 años de trayectoria en
          el rubro automotriz, el auto que buscas está aquí.
        </p>
      </div>
      <div>
        <h3 className="about__info">Horarios</h3>
        <p className="about__details">Lunes a Viernes desde las 10-18 hrs</p>
        <p className="about__details">Sábados desde las 10-14 hrs</p>
      </div>
    </div>
  );
}

export default About;
