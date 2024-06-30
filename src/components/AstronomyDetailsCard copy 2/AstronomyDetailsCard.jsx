import React, { useContext } from "react";
import style from "../WindDetailsCard/detailsCard.module.scss";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { APIContext } from "@/context/apiContext";

const AstronomyDetailsCard = () => {
  const { astronomyValues } = useContext(APIContext);

  return (
    <div className={`${style.detailsContainer} ${style.astronomy}`}>
      <section className={style.detailsTitle}>
        <span className={style.title}>Astronomy</span>
      </section>
      <section className={style.details}>
        <div className={style.detailsItem}>
          <WiSunrise className={style.icon} />
          <span className={style.detailValue}>{astronomyValues?.sunrise}</span>
        </div>
        <div className={style.detailsItem}>
          <WiSunset className={style.icon} />
          <span className={style.detailValue}>{astronomyValues?.sunset}</span>
        </div>
      </section>
    </div>
  );
};

export default AstronomyDetailsCard;
