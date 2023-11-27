import React from "react";

export default function Forecast() {
  return (
    <div className="WeatherForecast row" id="forecast">
      <div className="col">
        <div className="WeatherForecastPreview">
          <div className="forecast-time">Thu</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            width="80"
            height="80"
            alt="Weather Icon"
          />
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">13</span>
            <span className="forecast-temperature-min">7</span>
          </div>
        </div>
      </div>
    </div>
  );
}
