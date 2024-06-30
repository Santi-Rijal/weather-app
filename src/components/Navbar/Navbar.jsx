import React, { useState } from "react";
import style from "./navbar.module.scss";

import { CiLocationOn, CiCirclePlus } from "react-icons/ci";

const Navbar = () => {
  const [selectedId, setSelectedId] = useState(0);

  const newItemClicked = (id) => {
    setSelectedId(id);
  };

  return (
    <div className={style.navbarContainer}>
      <section className={style.locationsContainer}>
        <CiLocationOn
          id={0}
          className={`${style.currentLocationIcon} ${style.icons} ${
            selectedId === 0 && style.selected
          } ${style.firstIcon}`}
          onClick={() => newItemClicked(0)}
        />
      </section>

      <CiCirclePlus className={`${style.plusIcon} ${style.icons}`} />
    </div>
  );
};

export default Navbar;
