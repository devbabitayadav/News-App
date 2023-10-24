import React, { useContext, useState } from "react";
import { getNews } from "../context/news/NewsActions";
import NewsContext from "../context/news/NewsContext";
import WeatherContext from "../context/weather/WeatherContext";
import { getWeather } from "../context/weather/WeatherActions";
import Time from "./Time";
// import { fetchNews } from "../context/news/NewsActions";


const Navbar = () => {
  const { dispatch } = useContext(NewsContext);
  const { dispatch: weatherDispatch } = useContext(WeatherContext);

  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getNews(text);
    dispatch({
      type: "ALL_NEWS",
      payload: data.articles,
    });

    const weather = await getWeather(text);

    weatherDispatch({
      type: "GET_WEATHER",
      payload: weather,
    });

    setText("");
  };

  const handleNews = async (topic) => {
  const data = await getNews(topic)
  
    dispatch({
      type: "GET_NEWS",
      payload: data.articles,
   
    })
    {
      // console.log(topic)
      getNews(topic)
    }

  
  }
  return (
    <div className="parent">
  
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-light fw-medium fs-4" href="#" onClick={()=>handleNews("Indore")}>
          News-App
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <div className="btn-group">
                <button type="button" className="Tech-News btn btn-danger dropdown-toggle mx-1 mb-1 fw-medium border-0" data-bs-toggle="dropdown" aria-expanded="false">
               Technical
                </button>
                <ul className="dropdown-menu bg-transparent mt-2 border-0">
                  <li> <button className="tech-Mobile btn btn-dark border-1 ms-4 mt-1 mx-2" href='#'onClick={() => handleNews("Mobiles")} >Mobiles</button></li>
                  <li> <button className="tech-SM btn btn-dark border-1 ms-4 mt-1 mx-2" href='#' onClick={() => handleNews("Social-Media")}>Social-Media</button></li>       
                  <li> <button className="tech-SM btn btn-dark border-1 ms-4 mt-1 mx-2" href='#'onClick={() => handleNews("Electronics")}>Electronics</button></li>              
                      


                          
                </ul>
              </div>


            <li class="nav-item">
              <a class="nav-link bg-danger rounded-3 mx-1 text-light fw-medium px-3 border-0" href="#"onClick={() => handleNews("Politics")}>
                Politics
              </a>
            </li>

            
          <div className="btn-group">
                <button type="button" className="btn bg-danger rounded-3 border-0 mx-1 text-light fw-medium px-3 pb-2 Tech-News btn btn-danger dropdown-toggle mb-1" data-bs-toggle="dropdown" aria-expanded="false">
               Entertainment
                </button>
                <ul className="dropdown-menu bg-transparent border-0">
                  <li> <button className="tech-Mobile btn btn-dark border-1 ms-4 mt-1" href='#'onClick={() => handleNews("BollyWood")} >BollyWood</button></li>
                  <li> <button className="tech-SM btn btn-dark border-1 ms-4 mt-2 mx-2" href='#'onClick={() => handleNews("HollyWood")}>HollyWood</button></li>
                  <li> <button className="tech-SM btn btn-dark border-1 ms-4 mt-2  mx-2" href='#'onClick={() => handleNews("TollyWood")}>TollyWood</button></li>              
                  <li> <button className="tech-SM btn btn-dark border-1 ms-4 mt-2  mx-2" href='#'onClick={() => handleNews("Web-Series")}>Web-Series</button></li>              
                  <li> <button className="tech-SM btn btn-dark border-1 ms-4 mt-2 mx-2" href='#'onClick={() => handleNews("Movie-Review")}>Movie-Review</button></li>              


          </ul>
              </div>
            
              <div className="btn-group">
                <button type="button" className="btn bg-danger rounded-3 border-0 mx-1 text-light fw-medium px-3 Tech-News btn btn-danger dropdown-toggle mb-1" data-bs-toggle="dropdown" aria-expanded="false">
              Sports
                </button>
                <ul className="dropdown-menu bg-transparent border-0 rounded-0">
                <li> <button className="Cricket btn btn-dark border-1 ms-4 mt-1" href='#'onClick={() => handleNews("Cricket")} >Cricket</button></li>
                  <li> <button className="Wrestling btn btn-dark border-1 mt-2 ms-4 mx-2" href='#'onClick={() => handleNews("Wrestling")}>Wrestling</button></li>              
                  <li> <button className="Tenis btn btn-dark border-1 ms-4 mt-2 mx-2" href='#'onClick={() => handleNews("Tennis")}>Tennis</button></li>             
                  <li> <button className="Football btn btn-dark border-1 ms-4 mt-2 mx-2" href='#'onClick={() => handleNews("Football")}>Football</button></li>             
                  <li> <button className="Boxing btn btn-dark border-1 ms-4 mx-2 mt-2" href='#' onClick={() => handleNews("Boxing")}>Boxing</button></li>
                  <li> <button className="Boxing btn btn-dark border-1 ms-4 mx-2 mt-2" href='#'onClick={() => handleNews("Badminton")} >Badminton</button></li>                           



          </ul>
              </div>
            <li class="nav-item">
              <a class="nav-link bg-danger rounded-3 text-light fw-medium mx-1 px-3" href="#" onClick={() => handleNews("Finance")} >
                Finance
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link bg-danger rounded-3 text-light fw-medium mx-1 px-3" href="#" onClick={()=> handleNews("International")}>
              International
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link bg-danger rounded-3 text-light fw-medium mx-1 px-3" href="#" onClick={()=> handleNews("Education")}>
            Education
              </a>
            </li>
      
          </ul>
          <form class="d-flex border-0" role="search" onSubmit={handleSubmit}>
            <input
              class="form-control me-2 rounded-2"
              type="search"
              placeholder="Search Here..."
              aria-label="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button class="btn btn-success fw-medium rounded-2" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  <Time/> 
    <nav className="icons1">
    <a target='_blank' href= "https://twitter.com/adil_khan73?t=Pm1VvOFvBHcLjKtXby4AAg&s=09"className="twitter fa-brands fa-twitter float-end mt-1 mx-1 bg-da" data-aos="zoom-in"></a>
        <a target='_blank' href= "https://www.instagram.com/eskillsweb/" className="instagram fa-brands fa-instagram float-end mt-1 mx-1"></a>
        <a target='_blank' href= ""className=" whats-app fa-brands fa-whatsapp float-end mt-1 mx-1"></a>
        <a target='_blank' href="https://www.linkedin.com/company/eskillsweb/" className="Linkedin fa-brands fa-linkedin float-end mt-1 mx-1 "></a>
        <a target='_blank' href= "https://www.facebook.com/eskillsweb" className="Facebook fa-brands fa-facebook float-end mt-1 mx-1"></a>
        <a target='_blank' href= "https://www.youtube.com/@eskillsweb" className="you-tube  fa-brands fa-youtube float-end mt-1 mx-1"></a>
        <a target='_blank' href= "https://www.eskillsweb.com/"className=" Google fa-brands fa-google float-end mt-1 mx-1"></a>
      
    </nav>



    </div>


  );
};

export default Navbar;
