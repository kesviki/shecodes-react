import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  
  if (loaded) { return ( 
    <div className="col-2">
<div className="WeatherForecast row" id="forecast">
        <div className="WeatherForecastPreview">
         <ForecastDay data={forecast[0]} />    
      </div>
    </div>
    </div>
    )
  } else {
  let apiKey = "616b14cbd38253313b3b8852fa77335d"
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
  
  axios.get(apiUrl).then(handleResponse);
}
}


