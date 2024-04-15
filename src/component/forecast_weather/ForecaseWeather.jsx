import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

import "./forecastweather.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const ForecaseWeather = ({ newData }) => {
  const dayInAWeek = new Date().getDay();
  const forecastdays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  console.log(forecastdays);

  return (
    <div>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {newData.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily">
                  <img
                    src={`Weather_icons/${item.weather[0].icon}.png`}
                    className="icon-small"
                    alt="weather"
                  />
                  <label className="days">{forecastdays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C/
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-items">
                        <label>Pressure</label>
                        <label>{item.main.pressure}pa</label>
                    </div>
                    <div className="daily-details-grid-items">
                        <label>Humidity</label>
                        <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-items">
                        <label>Clouds</label>
                        <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-items">
                        <label>sea_level</label>
                        <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="daily-details-grid-items">
                        <label>grnd_level</label>
                        <label>{item.main.grnd_level}m</label>
                    </div>
                    <div className="daily-details-grid-items">
                        <label>feels_like</label>
                        <label>{item.main.feels_like}°C</label>
                    </div>
                    <div className="daily-details-grid-items">
                        <label>Wind-speed</label>
                        <label>{item.wind.speed}m/s</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ForecaseWeather;
