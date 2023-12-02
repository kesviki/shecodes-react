import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": { icon: "CLEAR_DAY", color: "#EC6E4D" },
        "01n": { icon: "CLEAR_NIGHT", color: "#21313F" },
        "02d": { icon: "PARTLY_CLOUDY_DAY", color: "#21313F" },
        "02n": { icon: "PARTLY_CLOUDY_NIGHT", color: "#21313F" },
        "03d": { icon: "PARTLY_CLOUDY_DAY", color: "#21313F" },
        "03n": { icon: "PARTLY_CLOUDY_NIGHT", color: "#21313F" },
        "04d": { icon: "CLOUDY", color: "#21313F" },
        "04n": { icon: "CLOUDY", color: "#21313F" },
        "09d": { icon: "RAIN", color: "#21313F" },
        "09n": { icon: "RAIN", color: "#21313F" },
        "10d": { icon: "RAIN", color: "#21313F" },
        "10n": { icon: "RAIN", color: "#21313F" },
        "11d": { icon: "RAIN", color: "#21313F" },
        "11n": { icon: "RAIN", color: "#21313F" },
        "13d": { icon: "SNOW", color: "#21313F" },
        "13n": { icon: "SNOW", color: "#21313F" },
        "50d": { icon: "FOG", color: "#21313F" },
        "50n": { icon: "FOG", color: "#21313F" },
    };

    const iconInfo = codeMapping[props.code] || { icon: "CLEAR_DAY", color: "#EC6E4D" };

    return (
<ReactAnimatedWeather
        icon={iconInfo.icon}
        color={iconInfo.color}
        size={props.size}
        animate={true}
        />
    )
}