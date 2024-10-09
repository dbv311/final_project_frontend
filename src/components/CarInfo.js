import "./CarInfo.css";
import imagesJson from "../data/images.json";

function CarInfo({ data }) {
  const getImage = (model) => {
    return imagesJson[model] || "https://fakeimg.pl/500x500/ff0000";
  };

  return (
    <>
      <h2 className="car__info">Listado de autos por llegar:</h2>
      {data.map((item, index) => {
        return (
          <div className="car__list" key={index}>
            {item.make_name} {item.model_name} {item.year}
            <img
              className="car__pictures"
              src={getImage(item.model_name)}
              alt="carpictures"
            />
          </div>
        );
      })}
    </>
  );
}

export default CarInfo;
