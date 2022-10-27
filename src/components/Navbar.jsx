import React from "react";
import Carwidgets from "./Carwidgets";

import Formulario from "./contents/Formulario/Formulario";
import ItemListContainer from "./contents/ItemListContainer";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <ItemListContainer />
            </ul>
          </div>
        </div>
        <Carwidgets />
      </nav>
    </>
  );
}
