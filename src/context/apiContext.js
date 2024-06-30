"use client";

import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const APIContext = createContext();

const threshold = 0.002;

const APIProvider = ({ children }) => {
  const [windValues, setWindValues] = useState([]);
  const [atmosphereValues, setAtmosphereValues] = useState([]);
  const [astronomyValues, setAstronomyValues] = useState([]);
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");
  const [currentCondition, setCurrentCondition] = useState([]);

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);

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
      setAstronomyValues(response?.data?.current_observation?.astronomy);
      setAtmosphereValues(response?.data?.current_observation?.atmosphere);
      setWindValues(response?.data?.current_observation?.wind);
      setCurrentCondition(response?.data?.current_observation?.condition);
      setForecasts(response?.data?.forecasts);
      setLocation(response?.data?.location?.city);
      setLastUpdated(response?.data?.current_observation?.pubDate);
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

            setLat(latitude);
            setLong(longitude);

            if (
              Math.abs(latitude - lat) > threshold ||
              Math.abs(longitude - long) > threshold
            ) {
              getCurrentLocation(latitude, longitude);
            }

            setPending(false);
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
    <APIContext.Provider
      value={{
        windValues,
        atmosphereValues,
        astronomyValues,
        pending,
        forecasts,
        location,
        lastUpdated,
        currentCondition,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export default APIProvider;
