import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  
  if (loaded) { return ( <div className="row">
          {forecast.map(function(dailyForecast, index) {
            let columnClasses = "col";

            if (index < 3) {
              columnClasses = "col";
            } 
            else if (index < 5) {
              columnClasses = "col d-none d-sm-block";
            }
            else if (index < 7) {
              columnClasses = "col d-none d-md-block";
            }
            else {
              return null;
            }

            return (
              <div className={columnClasses} key={index}>
            <ForecastDay data={dailyForecast} />   
            </div>
            ) 
          } )}
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


