import React, { useEffect, useState } from "react";
import Covid from "./covid";
import Dolar from "./dolar";
import Navbar from "./Navbar";
import News from "./news";
import ProgressBar from "./progress-bar";
import Axios from "axios";
import tincho from "./images/bomb.gif";
import "./css/rotating.css";
import "./css/main.css";
import "./css/spinner.css";
import "bootstrap/dist/css/bootstrap.css";
const Dashboard = () => {
  const [covid, setCovid] = useState([]);
  const [dolar, setDolar] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const covidData = await Axios("https://api.covid19api.com/summary");
      const dolarData = await Axios(
        "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
      );
      const newsData = await Axios(
        "https://newsapi.org/v2/top-headlines?country=ar&apiKey=f499989f0d4a416193fbddfeba6c30d2"
      );

      setCovid(covidData.data);
      setDolar(dolarData.data);
      setNews(newsData.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      {console.log(news.status)}
      {covid.length !== 0 && dolar.length !== 0 && news.status === "ok" ? (
        <>
          <ProgressBar data={dolar} />
          <div className="container mt-3">
            <div className="row d-flex justify-content.center">
              <div className="col-md-6 col-sm-12">
                <Covid data={covid} />
              </div>
              <div className="col-md-6 col-sm-12">
                <Dolar data={dolar} />
              </div>
              <div className="col-12 mt-4 d-flex flex-wrap justify-content-center">
                <News data={news.articles} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="donutSpinner mt-3"></div>
        </>
      )}
    </>
  );
};

export default Dashboard;
