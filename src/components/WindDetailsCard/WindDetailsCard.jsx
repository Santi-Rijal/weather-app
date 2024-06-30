import React, { useContext } from "react";
import style from "./detailsCard.module.scss";
import { WiStrongWind } from "react-icons/wi";
import { APIContext } from "@/context/apiContext";

const WindDetailsCard = () => {
  const { windValues } = useContext(APIContext);

  return (
    <div className={`${style.detailsContainer} ${style.wind}`}>
      <section className={style.detailsTitle}>
        <span className={style.title}>Wind</span>
        <WiStrongWind className={style.icon} />
      </section>
      <section className={style.details}>
        <div className={style.detailsItem}>
          <span className={style.detailTitle}>Chill</span>
          <span className={style.detailValue}>{windValues?.chill}</span>
        </div>
        <div className={style.detailsItem}>
          <span className={style.detailTitle}>Direction</span>
          <span className={style.detailValue}>{windValues?.direction}</span>
        </div>
        <div className={style.detailsItem}>
          <span className={style.detailTitle}>Speed</span>
          <span
            className={style.detailValue}
          >{`${windValues?.speed} km/h`}</span>
        </div>
      </section>
    </div>
  );
};

export default WindDetailsCard;
