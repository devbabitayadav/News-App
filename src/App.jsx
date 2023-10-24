import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { NewsProvider } from "./context/news/NewsContext";
import { WeatherProvider } from "./context/weather/WeatherContext";

const App = () => {
  return (
    <NewsProvider>
      <WeatherProvider>
        <Navbar />
        <Home />
      </WeatherProvider>
    </NewsProvider>
  );
};

export default App;
