import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import About from "./About";
import api from "../utils/ApiThirdParty";
import React from "react";
import { Route, Routes } from "react-router-dom";
import CarInfo from "./CarInfo";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    api.getMusic().then((data) => setData(data));
  }, []);

  return (
    <div className="page">
      <Header />

      <Navigation />
      <Routes>
        <Route path="/cars" element={<CarInfo />} />
      </Routes>
      <About />
      <Footer />
    </div>
  );
}

export default App;
