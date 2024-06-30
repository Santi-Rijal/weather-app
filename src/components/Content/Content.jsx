import React, { useContext } from "react";
import style from "./content.module.scss";
import CurrentWeatherCard from "../CurrentWeatherCard/CurrentWeatherCard";
import WeeklyDisplay from "../WeeklyDisplay/WeeklyDisplay";
import { APIContext } from "@/context/apiContext";

const Content = () => {
  const { location, lastUpdated } = useContext(APIContext);

  const toUpper = (text) => text.toUpperCase();

  const lastUpdatedTime = (time) => {
    const date = new Date(time * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <div className={style.contentContainer}>
      <section className={style.titleContainer}>
        <p className={style.cityName}>{toUpper(location)}</p>
        <span className={style.lastUpdatedMessage}>
          Last Updated: {lastUpdatedTime(lastUpdated)}
        </span>
      </section>

      <CurrentWeatherCard />

      <WeeklyDisplay />
    </div>
  );
};

export default Content;
