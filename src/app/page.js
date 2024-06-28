"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

import style from "./page.module.scss";
import Navbar from "@/components/Navbar/Navbar";
import Content from "@/components/Content/Content";

const threshold = 0.002;

const Home = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);
  const [apiData, setApiData] = useState(null);

  const getCurrentLocation = async (lat, long) => {
    const options = {
      method: "GET",
      url: process.env.NEXT_PUBLIC_API_URL,
      params: {
        lat: lat,
        long: long,
        format: "json",
        u: "c",
      },
      headers: {
        "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setApiData(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setPending(true);
            const latitude = position?.coords?.latitude;
            const longitude = position?.coords?.longitude;

            console.log(latitude, longitude);

            setLat(latitude);
            setLong(longitude);
            setPending(false);

            if (
              Math.abs(latitude - lat) > threshold ||
              Math.abs(longitude - long) > threshold
            ) {
              //getCurrentLocation(latitude, longitude);
            }
          },
          (err) => {
            setError(err.message);
            setPending(false);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
        setPending(false);
      }
    };

    getLocation();
  }, []);

  return (
    <div className={style.homePageContainer}>
      <Navbar />
      <Content />
    </div>
  );
};

export default Home;
