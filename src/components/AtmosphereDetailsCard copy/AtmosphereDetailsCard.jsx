import React, { useContext } from "react";
import style from "../WindDetailsCard/detailsCard.module.scss";
import { WiStrongWind } from "react-icons/wi";
import { APIContext } from "@/context/apiContext";

const AtmosphereDetailsCard = () => {
  const { atmosphereValues } = useContext(APIContext);

  return (
    <div className={`${style.detailsContainer} ${style.atmosphere}`}>
      <section className={style.detailsTitle}>
        <span className={style.title}>Atmosphere</span>
      </section>
      <section className={style.details}>
        <div className={style.detailsItem}>
          <span className={style.detailTitle}>Humidity</span>
          <span
            className={style.detailValue}
          >{`${atmosphereValues?.humidity}%`}</span>
        </div>
        <div className={style.detailsItem}>
          <span className={style.detailTitle}>Visibility</span>
          <span
            className={style.detailValue}
          >{`${atmosphereValues?.visibility} km`}</span>
        </div>
        <div className={style.detailsItem}>
          <span className={style.detailTitle}>Pressure</span>
          <span
            className={style.detailValue}
          >{`${atmosphereValues?.pressure} kPa`}</span>
        </div>
      </section>
    </div>
  );
};

export default AtmosphereDetailsCard;
