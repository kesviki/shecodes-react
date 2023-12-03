import React, { useState } from "react";
import axios from "axios";
import TodaysInfo from "./TodaysInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  

  function handleResponse(response) {
    setWeatherData({ 
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    }
    )
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "616b14cbd38253313b3b8852fa77335d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
            <div>
              <form id="search-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control search-input"
            id="city-input"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCityChange}
          />
        </div>
        <div className="col-3 p-0">
          <input
            type="submit"
            className="btn btn-secondary w-100"
            value="Search"
          />
        </div>
      </div>
    </form>
     <TodaysInfo data={weatherData}/>
     <Forecast coordinates={weatherData.coordinates}/>
    </div>
    );
  } else {
    search();
    return "Loading...";
}

  
  
}