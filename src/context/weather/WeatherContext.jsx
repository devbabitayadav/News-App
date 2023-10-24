import { createContext, useReducer } from "react";
import WeatherReducer from "./WeatherReducer";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const initialState = {
    weatherData: {
      location: {
        name: "Indore",
        region: "Madhya Pradesh",
        country: "India",
        lat: 22.72,
        lon: 75.83,
        tz_id: "Asia/Kolkata",
        localtime_epoch: 1689233800,
        localtime: "2023-07-13 13:06",
      },
      current: {
        last_updated_epoch: 1689233400,
        last_updated: "2023-07-13 13:00",
        temp_c: 27.0,
        temp_f: 80.6,
        is_day: 1,
        condition: {
          text: "Mist",
          icon: "//cdn.weatherapi.com/weather/64x64/day/143.png",
          code: 1030,
        },
        wind_mph: 9.4,
        wind_kph: 15.1,
        wind_degree: 320,
        wind_dir: "NW",
        pressure_mb: 1007.0,
        pressure_in: 29.74,
        precip_mm: 0.6,
        precip_in: 0.02,
        humidity: 84,
        cloud: 75,
        feelslike_c: 29.4,
        feelslike_f: 84.9,
        vis_km: 4.0,
        vis_miles: 2.0,
        uv: 6.0,
        gust_mph: 24.6,
        gust_kph: 39.6,
        air_quality: {
          co: 267.0,
          no2: 2.0999999046325684,
          o3: 47.900001525878906,
          so2: 1.600000023841858,
          pm2_5: 3.700000047683716,
          pm10: 5.099999904632568,
          "us-epa-index": 1,
          "gb-defra-index": 1,
        },
      },
    },
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  return (
    <WeatherContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
