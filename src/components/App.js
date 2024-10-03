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

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    api.getCar().then((data) => setData(data));
  }, []);

  return (
    <div className="page">
      <Header />
      <Navigation />
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
        <Route path="/cars" element={<CarInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
