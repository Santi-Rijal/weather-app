"use client";

import React, { useContext } from "react";

import style from "./page.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Content from "@/components/Content/Content";
import { APIContext } from "@/context/apiContext";

const Home = () => {
  const { pending } = useContext(APIContext);

  return (
    <div className={style.homePageContainer}>
      <Navbar />
      {!pending && <Content />}
    </div>
  );
};

export default Home;
