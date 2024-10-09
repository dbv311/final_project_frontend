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

function App() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    api
      .getCar()
      .then((data) => setData(data))
      .catch((err) => {
        return err.message;
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
      <Footer />
    </div>
  );
}

export default App;
