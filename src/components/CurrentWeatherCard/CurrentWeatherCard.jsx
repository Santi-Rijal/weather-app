import React from "react";
import style from "./currentWeatherCard.module.scss";
import weatherIcons from "@/Assets/weatherIcons";
import WindDetailsCard from "../WindDetailsCard/WindDetailsCard";
import AtmosphereDetailsCard from "../AtmosphereDetailsCard copy/AtmosphereDetailsCard";
import AstronomyDetailsCard from "../AstronomyDetailsCard copy 2/AstronomyDetailsCard";

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
        <AtmosphereDetailsCard />
        <AstronomyDetailsCard />
      </section>
    </section>
  );
};

export default CurrentWeatherCard;
