import React, { useState } from "react";
import axios from "axios";
import TodaysDate from "./TodaysDate";

export default function TodaysWeather(props) {
  const [todaysWeatherData, setTodaysWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data)
    setTodaysWeatherData({ 
      ready: true,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    }
    )
  }

  if (todaysWeatherData.ready) {
    return (
      <div>
        <div className="WeatherInfo">
          <div className="row">
            <div className="col-6">
              <h1 id="city">{todaysWeatherData.city}</h1>
              <ul>
                <li>
                  <span id="date"><TodaysDate date={todaysWeatherData.date}/></span>,
                  <span id="description"> {todaysWeatherData.description}</span>
                </li>
                <li>
                  Humidity: 
                  <strong>
                    <span id="humidity"> {todaysWeatherData.humidity}</span>%
                  </strong>
                  , Wind:
                  <strong>
                    <span id="wind"> {Math.round(todaysWeatherData.wind)}</span> km/h
                  </strong>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="temperature-container d-flex justify-content-end">
                <img
                  width="52"
                  height="52"
                  id="currentIcon"
                  src={todaysWeatherData.iconUrl}
                  alt={todaysWeatherData.description}
                />
                <div>
                  <span className="temperature" id="currentTemperature">
                    {Math.round(todaysWeatherData.temperature)}
                  </span>
                  <span className="unit">°C </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "616b14cbd38253313b3b8852fa77335d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}

  
  
}