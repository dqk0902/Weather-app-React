import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import sun from "../images/sun.png";
import moon from "../images/moon.png";
export const Weathercard = ({ cityData }) => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setData(null);
    if (cityData || id) {
      axios
        .get(
          `https://dataservice.accuweather.com/currentconditions/v1/${
            id ? id : cityData.Key
          }?apikey=Flv0JApXKtTrcqH8lNrXUYD82BIBAfyh`
        )
        .then((res) => {
          setData(res.data[0]);
        })
        .catch((err) => console.log(err.message));
    }
  }, [cityData.Key]);
  console.log(data);
  return (
    <>
      {data && (
        <main className="current-conditions-box">
          <h2 className="city-country">
            {cityData.EnglishName}
            {", "}
            {cityData.Country.EnglishName.substring(0, 2)}
          </h2>

          <div className="details">
            <h4>{data.LocalObservationDateTime}</h4>
            <h2 className="temperature-value">
              {Math.ceil(data.Temperature.Metric.Value)}
              <sup className="deg">&deg;{data.Temperature.Metric.Unit}</sup>
            </h2>
            {data.IsDayTime === true ? (
              <img className="weather-img" src={sun} alt="sun" />
            ) : (
              <img className="weather-img" src={moon} alt="moon" />
            )}
            <p className="weather-text">{data.WeatherText}</p>
          </div>
        </main>
      )}
      {!data && <div className="loader-box">{}</div>}
    </>
  );
};

export default Weathercard;
