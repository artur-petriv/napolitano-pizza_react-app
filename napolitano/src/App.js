import React from "react";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Banner from "./Components/Banner/Banner";

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Banner />
    </div>
  );
}

export default App;
