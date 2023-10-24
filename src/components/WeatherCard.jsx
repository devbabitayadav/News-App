import React, { useContext, useEffect } from "react";
import WeatherContext from "../context/weather/WeatherContext";
import { getWeather } from "../context/weather/WeatherActions";

const WeatherCard = () => {
  const { weatherData, dispatch } = useContext(WeatherContext);

  // console.log(weatherData);

  const getData = async () => {
    const data = await getWeather("Indore");
    dispatch({
      type: "GET_WEATHER",
      payload: data,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="card p1 bg-primary-subtle">
      <div class="card-header fw-medium">Today's Weather</div>
      <div class="card-body">
        <blockquote class="blockquote mb-0 d-flex align-items-center justify-content-between">
          <span>
            <p className="display-5 text-light">{weatherData.current.temp_c}°c</p>
            <p className="display-5 text-light">{weatherData.location.name}</p>
          </span>
          <span>
            <img src={weatherData.current.condition.icon} alt="Weather Image" />
          </span>
        </blockquote>
      </div>
    </div>
  );
};

export default WeatherCard;
