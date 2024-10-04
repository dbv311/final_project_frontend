import "./CarInfo";

function CarInfo({ data }) {
  return (
    <>
      <div className="car__info">Autos</div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            {item.model}
            <img src={item.image} alt="car" />
          </div>
        );
      })}
    </>
  );
}

export default CarInfo;
