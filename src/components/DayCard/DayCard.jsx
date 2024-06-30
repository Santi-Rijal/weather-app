import React from "react";
import style from "./dayCard.module.scss";
import weatherIcons from "@/Assets/weatherIcons";

const DayCard = ({ day }) => {
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
        <span className={style.day}>{day?.day}</span>
        <span className={style.date}>{formatDate(day?.date)}</span>
      </section>

      <section className={style.content}>
        <span className={style.icon}>{getIcon(day?.text)}</span>
        <span className={style.condition}>{day?.text}</span>
      </section>
    </div>
  );
};

export default DayCard;
