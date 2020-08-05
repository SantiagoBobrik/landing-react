import React from "react";
import "./css/main.css";
const ProgressBar = (props) => {
  const porcentaje =
    (parseFloat(props.data[1].casa.venta) / 500).toFixed(2) * 100;
  const valor = parseFloat(props.data[1].casa.venta).toFixed(0);
  return (
    <>
      <div className="col-6 mx-auto mt-3">
        <h3 className="font-weight-bold title">Dolar a $500</h3>
      </div>
      <div className="col-6 mx-auto mt-3">
        <div class="progress">
          <div class="progress-bar progress-dolar bg-red">
            {porcentaje}% - ${valor}
          </div>
        </div>
      </div>
      <div className="col-6 mx-auto d-flex justify-content-between mt-3">
        <h5 className="text-secondary font-weight-bold">$0</h5>
        <h5 className="text-secondary font-weight-bold">$500</h5>
      </div>

      <style jsx>
        {`
          .progress-dolar {
            width: ${porcentaje}%;
          }
          .progress {
            background-color: #10393e46;
            height: 25px;
          }
        `}
      </style>
    </>
  );
};

export default ProgressBar;
