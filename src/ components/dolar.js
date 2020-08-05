import React from "react";
import dolarsvg from "./images/dinero.svg";
import "./css/main.css";
import DolarData from "./dolar-data";
const Dolar = (props) => {
  return (
    <>
      <div className="row bg-light p-1 h-100 m-2">
        <div className="col-12">
          <img
            className="icon mt-2"
            height="50"
            width="100%"
            src={dolarsvg}
            alt=""
          />
        </div>
        <DolarData
          nombre={props.data[0].casa.nombre}
          compra={props.data[0].casa.compra}
          venta={props.data[0].casa.venta}
          variacion={-4}
        />
        <DolarData
          nombre={props.data[1].casa.nombre}
          compra={props.data[1].casa.compra}
          venta={props.data[1].casa.venta}
          variacion={props.data[1].casa.variacion}
        />
      </div>
    </>
  );
};

export default Dolar;
