import React from "react";
import style from "../WindDetailsCard/detailsCard.module.scss";
import { WiStrongWind } from "react-icons/wi";

const AtmosphereDetailsCard = () => {
  return (
    <div className={`${style.detailsContainer} ${style.atmosphere}`}>
      <section className={style.detailsTitle}>
        <span className={style.title}>Atmosphere</span>
      </section>
      <section className={style.details}>
        <div className={style.detailsItem}>
          <span className={style.detailTitle}>Humidity</span>
          <span className={style.detailValue}>56%</span>
        </div>
        <div className={style.detailsItem}>
          <span className={style.detailTitle}>Visibility</span>
          <span className={style.detailValue}>13.98 km</span>
        </div>
        <div className={style.detailsItem}>
          <span className={style.detailTitle}>Pressure</span>
          <span className={style.detailValue}>1005.4 kPa</span>
        </div>
      </section>
    </div>
  );
};

export default AtmosphereDetailsCard;
