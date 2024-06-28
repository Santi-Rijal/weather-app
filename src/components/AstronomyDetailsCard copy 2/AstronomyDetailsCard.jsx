import React from "react";
import style from "../WindDetailsCard/detailsCard.module.scss";
import { WiSunrise, WiSunset } from "react-icons/wi";

const AstronomyDetailsCard = () => {
  return (
    <div className={`${style.detailsContainer} ${style.astronomy}`}>
      <section className={style.detailsTitle}>
        <span className={style.title}>Astronomy</span>
      </section>
      <section className={style.details}>
        <div className={style.detailsItem}>
          <WiSunrise className={style.icon} />
          <span className={style.detailValue}>5:31 AM</span>
        </div>
        <div className={style.detailsItem}>
          <WiSunset className={style.icon} />
          <span className={style.detailValue}>9:04 PM</span>
        </div>
      </section>
    </div>
  );
};

export default AstronomyDetailsCard;
