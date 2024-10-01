import "./CarInfo";

function CarInfo() {
  return (
    <>
      <div className="car__info">Hola mundo</div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13379.042801145735!2d-71.56052575!3d-33.03643445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689dfd017512e6d%3A0xd5f18ddc3dc97c09!2sHospital%20Veterinario%20Integral!5e0!3m2!1ses!2scl!4v1727741660814!5m2!1ses!2scl"
        width="800"
        height="600"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default CarInfo;
