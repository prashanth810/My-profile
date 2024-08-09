import React, { useState, useEffect } from "react";
import "./Wether.css";
import humidity from "../images/humidityjpeg.jpeg";
import speedimg from "../images/speed.png";
import sunImage from "../images/sunImage.jpeg";
import rainImage from "../images/rainImage.jpeg";
import cloudImage from "../images/cloudImage.jpeg";
import { Link } from "react-router-dom";

const WeatherApplication = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState({
    celcius: 30,
    name: "Hyderabad",
    humidity: 10,
    speed: 1,
    weatherImage: sunImage,
  });

  const handlechange = (e) => {
    setName(e.target.value);
  };

  const getWeatherImage = (weather) => {
    switch (weather) {
      case "Clear":
        return sunImage;
      case "Rain":
        return rainImage;
      case "Clouds":
        return cloudImage;
      default:
        return sunImage;
    }
  };

  const fetchWeatherData = (city) => {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a34e84dd775ff25d087ed210242e63c&units=metric&units=metric`;

    fetch(apiurl)
      .then((res) => res.json())
      .then((result) => {
        console.log("API Result:", result);

        setData({
          celcius: result.main.temp,
          name: result.name,
          humidity: result.main.humidity,
          speed: result.wind.speed,
          weatherImage: getWeatherImage(result.weather[0].main),
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchWeatherData(name);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      fetchWeatherData(name);
    }
  };

  useEffect(() => {
    fetchWeatherData(name);
  }, [name]);

  const clearInput = () => {
    setName("");
  };

  return (
    <div
      className="main_wether_app"
      style={{ backgroundColor: "rgb(8 28 41)" }}
    >
      <nav className="navbar navbar-expand-lg nav-barlogo">
        <div
          className="container container_nav"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <a
            className="animate__animated animate__bounceInLeft animate__slower navbar-brand text-white"
            href="#"
          >
            <img
              src="https://cdn-icons-png.freepik.com/512/1351/1351514.png"
              width="80px"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="animate__animated animate__lightSpeedInRight animate__slower navbar-nav ms-auto">
              <Link to="/todo-list" style={{ textDecoration: "none" }}>
                <a
                  className="nav-link text-white active mx-4"
                  aria-current="page"
                  href="#home"
                >
                  Todo-List
                </a>
              </Link>
              <Link to="/portfolio_page" style={{ textDecoration: "none" }}>
                <a className="nav-link text-white mx-4" href="#about">
                  Portfolio
                </a>
              </Link>

              <Link to="/ecommerce_page" style={{ textDecoration: "none" }}>
                <a className="nav-link text-white mx-4" href="#services">
                  E-commerce
                </a>
              </Link>
              <Link to="/wether" style={{ textDecoration: "none" }}>
                <a className="nav-link text-white mx-2" href="#contactform">
                  Wether-Application
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="wether_main">
        <div className="container">
          <div className="row">
            <div className="search_by_cityname text-center text-white pt-5">
              <h3> Search By City Name... </h3>
            </div>
            <div className="input_div">
              <input
                type="text"
                className="input text-dark"
                placeholder="Enter A City..."
                value={name}
                onChange={handlechange}
              />
              {name && (
                <button className="clear_button" onClick={clearInput}>
                  &times;
                </button>
              )}
              <button className="search_button" onClick={handleSubmit}>
                Search
              </button>
            </div>
            <div className="sunwithcloud">
              <img
                src={data.weatherImage}
                width="100%"
                height="200px"
                alt="Weather"
              />
            </div>
            <div className="city_temp">
              <div className="cit_celcius">
                <div className="celcis_div">
                  <h5 className="text-white"> {Math.round(data.celcius)} °C</h5>
                  <h2 className="text-white"> {data.name} </h2>
                </div>
              </div>
              <div className="container">
                <div className="row humidity-main ">
                  <div className="col-md-5 humidity ">
                    <img
                      src={humidity}
                      width="20%"
                      height="100px"
                      alt="Humidity"
                    />
                    <div className="humidity_div">
                      <h5 className="text-white">
                        {Math.round(data.humidity)} %
                      </h5>
                      <h5 className="text-white"> Humidity </h5>
                    </div>
                  </div>
                  <div className="col-md-6 speed w-50">
                    <img
                      src={speedimg}
                      width="20%"
                      height="100px"
                      alt="Speed"
                    />
                    <div className="speed_div">
                      <h5 className="text-white">
                        {Math.round(data.speed)} Kmph
                      </h5>
                      <h5 className="text-white"> Wind </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApplication;
