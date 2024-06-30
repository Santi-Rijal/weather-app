import React, { useContext } from "react";
import style from "./currentWeatherCard.module.scss";
import weatherIcons from "@/Assets/weatherIcons";
import WindDetailsCard from "../WindDetailsCard/WindDetailsCard";
import AtmosphereDetailsCard from "../AtmosphereDetailsCard copy/AtmosphereDetailsCard";
import AstronomyDetailsCard from "../AstronomyDetailsCard copy 2/AstronomyDetailsCard";
import { APIContext } from "@/context/apiContext";

const CurrentWeatherCard = () => {
  const { currentCondition } = useContext(APIContext);

  const getIcon = (text) => {
    const iconObject = weatherIcons.find((icon) => icon.condition === text);
    return iconObject ? iconObject.icon : null;
  };

  return (
    <section className={style.currentWeatherContainer}>
      <section className={style.weatherDetails}>
        <span className={style.conditionIcon}>
          {getIcon(currentCondition?.text)}
        </span>
        <span className={style.condition}>{currentCondition?.text}</span>
        <span className={style.temp}>
          {`${currentCondition?.temperature}`}&deg;C
        </span>
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
