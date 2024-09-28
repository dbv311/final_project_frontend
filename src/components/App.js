import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import About from "./About";

function App() {
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
