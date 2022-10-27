import React from "react";
import Formulario from "./contents/Formulario/Formulario";
import Home from "./contents/Home";
import Navbar from "./Navbar";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Formulario />
    </>
  );
};

export default App;
