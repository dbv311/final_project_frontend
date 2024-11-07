import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import About from "./About";
import api from "../utils/ApiThirdParty";
import React from "react";
import { Route, Routes } from "react-router-dom";
import CarInfo from "./CarInfo";
import Main from "./Main";
import Preloader from "./Preloader";
import Popup from "./Popup";

function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    setIsLoading(true);
    api
      .getCar()
      .then((data) => {
        setData(data.Results);
      })
      .catch((err) => {
        setIsOpen(true);
        setErrorMessage(
          "Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <Header />
      <Navigation />
      <Preloader show={isLoading} />
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Main />
              <About />
            </>
          }
        />
        <Route path="/cars" element={<CarInfo data={data} />} />
      </Routes>
      <Popup
        open={isOpen}
        handleClose={() => {
          setIsOpen(false);
        }}
      >
        <div className="App-alerts">{errorMessage}</div>
      </Popup>
      <Footer />
    </div>
  );
}

export default App;
