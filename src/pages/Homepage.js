import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from "../components/Button";
import Weathercard from "./Weathercard";

function Homepage() {
  const [cityValue, setcityValue] = useState("");
  const [cityData, setCityData] = useState(null);

  const fetchCity = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=Flv0JApXKtTrcqH8lNrXUYD82BIBAfyh&q=${cityValue}`
      )
      .then((res) => {
        setCityData(res.data[0]);
        setcityValue("");
      })
      .catch((err) => console.log(err.message));
  };
  
  return (
    <div className="wrapper">
      <form
        className="form-group custom-form"
        autoComplete="off"
        onSubmit={fetchCity}
      >
        <div className="search-box">
          <input
            className="form-control"
            required
            placeholder="Enter city name..."
            value={cityValue}
            onChange={(e) => setcityValue(e.target.value)}
          />
          <Button cityData={cityData} />
        </div>
      </form>
      {cityData && (
        <div style={{ padding: 10 + "px", width: 100 + "%" }}>
          <Weathercard cityData={cityData} />
        </div>
      )}
    </div>
  );
}

export default Homepage;
