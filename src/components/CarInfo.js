import "./CarInfo.css";
import ImagesJson from "../data/images.json";

function CarInfo({ data }) {
  const getImage = (model) => {
    return ImagesJson[model] || "https://fakeimg.pl/500x500/ff0000";
  };

  return (
    <>
      <h2 className="car__info">Listado de autos por llegar:</h2>
      {data.map((item, index) => {
        return (
          <div className="car__list" key={index}>
            <img src={getImage(item.make)} />
            {item.make}-{item.model}-{item.year}
          </div>
        );
      })}
    </>
  );
}

export default CarInfo;
