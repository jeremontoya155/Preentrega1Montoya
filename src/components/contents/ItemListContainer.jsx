import React from "react";

const ItemListContainer = () => {
  return (
    <>
      <>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Opciones
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Anillos
            </a>
            <a className="dropdown-item" href="#">
              Pulseras
            </a>
            <a className="dropdown-item" href="#">
              Cadenas
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              Dijes
            </a>
          </div>
        </li>
      </>
    </>
  );
};

export default ItemListContainer;
