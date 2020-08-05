import React from "react";

import "./css/main.css";
import "./css/news.css";

const dateFormat = (date) => {
  var options = { month: "long", day: "numeric" };
  let dateParse = Date.parse(date);
  let newDate = new Date(dateParse);
  return newDate.toLocaleDateString("es-ES", options);
};

const News = (props) => {
  return (
    <>
      {props.data.map((news) => {
        return (
          <>
            <div className="col-md-5 col-sm-12 bg-light m-2 p-0   ">
              <img src={news.urlToImage} className="news-img" />

              <div className="col-12 text-left mt-3">
                <h5 className="news-title  ">{news.title}</h5>
              </div>
              <div className="col-12 text-left mt-2">
                <h6 className="   text-red">{news.source.name}</h6>
              </div>
              <div className="col-12 text-left mt-2">
                <p className="  text-muted">
                  {dateFormat(news.publishedAt)} -{" "}
                  {news.author || news.source.name}
                </p>
              </div>
              <div className="col-12 text-center mt-2">
                <a
                  target="_blank"
                  className="btn  bg-main text-white  mt-3 mb-4"
                  href={news.url}
                >
                  Ver Más
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default News;
