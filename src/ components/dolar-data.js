import React from "react";
import dolarsvg from "./images/dinero.svg";
import "./css/main.css";
const DolarData = (props) => {
  return (
    <>
      <div className="col-12 ">
        <div className="col-12">
          <h3 className="font-weight-bold title">{props.nombre}:</h3>
        </div>
        <div className="col-12 d-flex mt-2">
          <div className="col-6">
            <h5>Compra: </h5>
            <h5 className="text-secondary">{props.compra}</h5>
          </div>
          <div className="col-6">
            <h5>Venta: </h5>
            <h5 className="text-secondary">{props.venta}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default DolarData;
