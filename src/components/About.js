import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <h3 className="about__us">Acerca de Nosotros</h3>
        <p className="about__details">
          Somos automotora rpm de concón, con mas de 10 años de trayectoria
          ofrecienco garantia y confianza en el rubro automotriz, el auto que
          buscas está aquí.
        </p>
        <h4 className="about__hours">Horarios</h4>
        <p className="about__details-week">
          Lunes a Viernes desde las 10-18 hrs
        </p>
        <p className="about__details-week">Sábados desde las 10-14 hrs</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.6524045385736!2d-71.53994052428095!3d-32.93378077359848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689c2cd5d0da031%3A0x32ba600d433b8252!2zQXYuIENvbmPDs24gUmXDsWFjYSA4NSwgQ29uY8OzbiwgVmFscGFyYcOtc28!5e0!3m2!1ses!2scl!4v1727565056074!5m2!1ses!2scl"
        width="300"
        height="250"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="about__location"
      ></iframe>
    </div>
  );
}

export default About;
