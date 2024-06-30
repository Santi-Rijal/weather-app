import React, { useContext } from "react";
import style from "./weeklyDisplay.module.scss";
import DayCard from "../DayCard/DayCard";
import { APIContext } from "@/context/apiContext";

const WeeklyDisplay = () => {
  const { forecasts } = useContext(APIContext);

  return (
    <section className={style.weeklyWeatherContainer}>
      {forecasts?.slice(1).map((day, index) => (
        <DayCard key={index} day={day} />
      ))}
    </section>
  );
};

export default WeeklyDisplay;
