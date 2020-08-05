import React from "react";
import covidsvg from "./images/coronavirus.svg";
import "./css/main.css";
const Covid = (props) => {
  return (
    <>
      <>
        <div className="row bg-light p-3 h-100 m-2">
          <div className="col-12">
            <img
              className="icon"
              height="50"
              width="100%"
              src={covidsvg}
              alt=""
            />
          </div>

          <div className="col-12 mt-2 ">
            <div className="col-12  ">
              <div className="col-md-6 col-lg-6 col-sm-12 mx-auto">
                <h3 className="font-weight-bold title">Casos</h3>
                <h5 className="text-secondary">
                  {" "}
                  {props.data.Countries[6].TotalConfirmed}
                </h5>
              </div>

              <div className="col-md-6 col-lg-6 col-sm-12 mx-auto">
                <h3 className="font-weight-bold title">Casos hoy</h3>
                <h5 className="text-secondary">
                  {" "}
                  {props.data.Countries[6].NewConfirmed}
                </h5>
              </div>
            </div>

            <div className="col-12 mt-2">
              <div className="col-md-6 col-sm-12 mx-auto">
                <h3 className="font-weight-bold title">Muertes</h3>
                <h5 className="text-secondary">
                  {" "}
                  {props.data.Countries[6].TotalDeaths}
                </h5>
              </div>
              <div className="col-md-6 col-sm-12 mx-auto">
                <h3 className="font-weight-bold title">Muertes hoy</h3>
                <h5 className="text-secondary">
                  {" "}
                  {props.data.Countries[6].NewDeaths}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Covid;
