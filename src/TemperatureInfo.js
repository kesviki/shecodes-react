import React from "react";

export default function TemperatureInfo(props) {
    return (
        <div>
        <span className="temperature" id="currentTemperature">
            {Math.round(props.celsius)}
                  </span>
                  <span className="unit">°C
                  </span>
                  </div>
    )
}