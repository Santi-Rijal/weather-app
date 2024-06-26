"use client";

import React, { useEffect, useState } from "react";

const Home = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);

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
            setPending(false);
          },
          (err) => {
            setError(err.message);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  return (
    !pending && (
      <div>
        {error && <span>{error}</span>}
        <span>latitude: {lat}</span>
        <span>longitude: {long}</span>
      </div>
    )
  );
};

export default Home;
