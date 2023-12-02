import React from "react";
import TodaysDate from "./TodaysDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureInfo from "./TemperatureInfo";

export default function TodaysInfo(props) {
    return (
        <div className="WeatherInfo">
          <div className="row">
            <div className="col-6">
              <h1 id="city">{props.data.city}</h1>
              <ul>
                <li>
                  <span id="date"><TodaysDate date={props.data.date}/></span>,
                  <span id="description"> {props.data.description}</span>
                </li>
                <li>
                  Humidity: 
                  <strong>
                    <span id="humidity"> {props.data.humidity}</span>%
                  </strong>
                  , Wind:
                  <strong>
                    <span id="wind"> {Math.round(props.data.wind)}</span> km/h
                  </strong>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="temperature-container d-flex justify-content-end">
                <WeatherIcon code={props.data.icon} size={60}/>
                 <TemperatureInfo celsius={props.data.temperature} />
              </div>
            </div>
          </div>
        </div>
    )
}