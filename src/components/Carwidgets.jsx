import React from "react";

const Carwidgets = () => {
  return (
    <a className="navbar-brand" href="#">
      <button
        id="boton_carrito"
        class="btn btn-success  px-2 py-2"
        data-bs-toggle="modal"
        data-bs-target="#modal_carrito"
      >
        🛒
      </button>
    </a>
  );
};

export default Carwidgets;
