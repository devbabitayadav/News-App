import React, { useContext, useEffect } from "react";
import NewsContext from "../context/news/NewsContext";
import NewsCard from "../components/NewsCard";
import { getNews } from "../context/news/NewsActions";
import Spinner from "../components/Spinner";
import WeatherCard from "../components/WeatherCard";
// import { fetchNews } from "../context/news/NewsActions";

const Home = () => {
  const { allNews, dispatch } = useContext(NewsContext);

  const getData = async () => {
    const data = await getNews("topic");
    dispatch({
      type: "ALL_NEWS",
      payload: data.articles,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  if (!allNews || allNews.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="container1 py-5 px-3  bg-danger-subtle">
      <div className="row">
        <div className="col-8">
          {allNews.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
        <div className="col-4 bg-danger-subtle">
          <WeatherCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
