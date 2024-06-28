import React from "react";
import style from "./detailsCard.module.scss";
import { WiStrongWind } from "react-icons/wi";

const WindDetailsCard = () => {
  return (
    <div className={`${style.detailsContainer} ${style.wind}`}>
      <section className={style.detailsTitle}>
        <span className={style.title}>Wind</span>
        <WiStrongWind className={style.icon} />
      </section>
      <section className={style.details}>
        <div className={style.detailsItem}>
          <span className={style.detailTitle}>Chill</span>
          <span className={style.detailValue}>26</span>
        </div>
        <div className={style.detailsItem}>
          <span className={style.detailTitle}>Direction</span>
          <span className={style.detailValue}>South</span>
        </div>
        <div className={style.detailsItem}>
          <span className={style.detailTitle}>Speed</span>
          <span className={style.detailValue}>6 km/h</span>
        </div>
      </section>
    </div>
  );
};

export default WindDetailsCard;
