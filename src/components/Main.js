import "./Main.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import captiva from "../images/chevroletcaptiva.jpg";
import berlingo from "../images/citroenberlingo.jpg";
import ranger from "../images/fordranger.jpg";
import veloster from "../images/hyundaiveloster.jpg";
import sportage from "../images/kiasportage.jpg";

function Main() {
  const images = [captiva, berlingo, ranger, veloster, sportage];

  const settings = {
    dots: true,
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const carouselStyles = {
    margin: "auto",
    width: "80%",
    height: "auto",
  };

  return (
    <main className="main">
      <h2 className="main__title ">Autos recién llegados</h2>
      <Slider {...settings} style={carouselStyles}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="cars" width={"100%"} height={"100%"} />
          </div>
        ))}
      </Slider>
    </main>
  );
}

export default Main;

/*const images = [
    "https://picsum.photos/200",
    "https://picsum.photos/205",
    "https://picsum.photos/202",
    "https://picsum.photos/203",
  ];*/
