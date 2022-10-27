import React from "react";

const Formulario = () => {
  return (
    <div className="mx-5 limitar my-3">
      <div>
        <form className="d-flex mx-5">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Material"
          />
          <button className="btn btn-secondary my-2 my-sm-0" type="button">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
