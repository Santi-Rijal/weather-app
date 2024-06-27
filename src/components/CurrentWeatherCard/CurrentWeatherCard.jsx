import React from "react";
import style from "./currentWeatherCard.module.scss";
import weatherIcons from "@/Assets/weatherIcons";
import WindDetailsCard from "../WindDetailsCard/WindDetailsCard";

const CurrentWeatherCard = () => {
  const demo = weatherIcons[0];
  return (
    <section className={style.currentWeatherContainer}>
      <section className={style.weatherDetails}>
        <span className={style.conditionIcon}>{demo.icon}</span>
        <span className={style.condition}>{demo.condition}</span>
        <span className={style.temp}>23&deg;C</span>
      </section>
      <section className={style.moreDetailsContainer}>
        <WindDetailsCard />
        <WindDetailsCard />
        <WindDetailsCard />
      </section>
    </section>
  );
};

export default CurrentWeatherCard;
