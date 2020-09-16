import React from "react";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Banner from "./Components/Banner/Banner";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

// Styles
import "normalize.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Banner />
      <Content type="pizza" title="Піца" />
      <Content type="drink" title="Напої" />
      <Footer />
    </div>
  );
}

export default App;
