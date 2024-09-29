import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import About from "./About";
import api from "../utils/ApiThirdParty";
import React from "react";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    api.getMusic().then((data) => setData(data));
  }, []);

  return (
    <div className="page">
      <Header />
      <Navigation />
      <About />
      <Footer />
    </div>
  );
}

export default App;
