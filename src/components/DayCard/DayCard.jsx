import React from "react";
import style from "./dayCard.module.scss";
import weatherIcons from "@/Assets/weatherIcons";

const dayDemo = {
  day: "Sun",
  date: 1719763200,
  high: 25,
  low: 18,
  text: "Thunderstorms",
  code: 4,
};

const DayCard = () => {
  const getIcon = (text) => {
    const iconObject = weatherIcons.find((icon) => icon.condition === text);
    return iconObject ? iconObject.icon : null;
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { month: "long" };
    const month = date.toLocaleDateString(undefined, options);
    const day = date.getDate();

    return `${month} ${day}`;
  };

  return (
    <div className={style.cardContainer}>
      <section className={style.headerContainer}>
        <span className={style.day}>{dayDemo?.day}</span>
        <span className={style.date}>{formatDate(dayDemo?.date)}</span>
      </section>

      <section className={style.content}>
        <span className={style.icon}>{getIcon(dayDemo?.text)}</span>
        <span className={style.condition}>{dayDemo?.text}</span>
      </section>
    </div>
  );
};

export default DayCard;
