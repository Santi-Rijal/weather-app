import React from "react";
import style from "./weeklyDisplay.module.scss";
import DayCard from "../DayCard/DayCard";

const test = [{}, {}, {}, {}, {}, {}, {}];

const WeeklyDisplay = () => {
  return (
    <section className={style.weeklyWeatherContainer}>
      {test.map((_, index) => (
        <DayCard key={index} />
      ))}
    </section>
  );
};

export default WeeklyDisplay;
