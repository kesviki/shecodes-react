import React from "react";

export default function TodaysWeather() {
  return (
    <div>
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-6">
            <h1 id="city">Budapest</h1>
            <ul>
              <li>
                <span id="date">Thursday 20:12</span>,
                <span id="description"> clear sky</span>
              </li>
              <li>
                Humidity:
                <strong>
                  <span id="humidity">73</span>%
                </strong>
                , Wind:
                <strong>
                  <span id="wind">5</span> km/h
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
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="Weather Icon"
              />
              <div>
                <span className="temperature" id="currentTemperature">
                  9
                </span>
                <span className="unit">°C </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}