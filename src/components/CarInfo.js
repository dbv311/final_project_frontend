import "./CarInfo.css";
import imagesJson from "../data/images.json";

function CarInfo({ data }) {
  const getImage = (Model_Name) => {
    return imagesJson[Model_Name] || "https://fakeimg.pl/500x500/ff0000";
  };

  return (
    <>
      <h2 className="car__info">
        Déjate seducir por nuestra gama de Aston Martin
      </h2>
      {data.map((item, index) => {
        return (
          <div className="car__list" key={index}>
            {item.Make_Name} {item.Model_Name}
            <img
              className="car__pictures"
              src={getImage(item.Model_Name)}
              alt="carpictures"
            />
          </div>
        );
      })}
    </>
  );
}

export default CarInfo;
