import React from "react";
import "./current_weather.css";

const Current_weather = ({data}) => {
    
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather_description">{data.weather[0].description}</p>
        </div>

        <img
          alt="weather"
          className="weather_icon"
          src={`Weather_icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <div className="temperature">{Math.round(data.main.temp)}°C</div>
        <div className="details">
            <div className="parameter_row">
                <span className="parameter_label">Details</span>
            </div>
            <div className="parameter_row">
                <span className="parameter_label">feels_like</span>
                <span className="parameter_value">{Math.round(data.main.feels_like)}</span>
            </div>
            <div className="parameter_row">
                <span className="parameter_label">Humidity</span>
                <span className="parameter_value">{data.main.humidity}</span>
            </div>
            <div className="parameter_row">
                <span className="parameter_label">pressure</span>
                <span className="parameter_value">{data.main.pressure}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Current_weather;
