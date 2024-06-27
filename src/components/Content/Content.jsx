import React from "react";
import style from "./content.module.scss";
import CurrentWeatherCard from "../CurrentWeatherCard/CurrentWeatherCard";
import WeeklyDisplay from "../WeeklyDisplay/WeeklyDisplay";

const Content = () => {
  return (
    <div className={style.contentContainer}>
      <section className={style.titleContainer}>
        <p className={style.cityName}>HALIFAX</p>
        <span className={style.lastUpdatedMessage}>
          Last Updated: 10 min ago
        </span>
      </section>

      <CurrentWeatherCard />

      <WeeklyDisplay />
    </div>
  );
};

export default Content;
