import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Todolist from "../images/Todo-List.png";
import Protfolioimg from "../images/portfolio img.png";
import wetherapplicationimg from "../images/wetherapplicationpage.png";
import backgroundimg from "../images/frontpagebg.png";

const Frontpage = () => {
  const nav = useNavigate();

  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      nav('/');
    }
  }, []);
  return (
    <div
      className="frontpage"
      style={{
        backgroundColor: "#081c29",
      }}
    >
      <nav className="navbar navbar-expand-lg p-4 nav-barlogo">
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
                  className="nav-link active text-white mx-4"
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

              <Link to="/" style={{ textDecoration: "none" }}>
                <a className="nav-link text-white mx-2" >
                  Logout
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="main3">
        <div className="container">
          <div className="my_services" id="services">
            <h1 className="my_service text-white"> All - Task's </h1>
          </div>
          <div className="row cards_row cards_rows">
            <div className="card col-md-3">
              <div className="web_designer-icon p-1">
                <img src={Todolist} width="100%" height="200px" />
              </div>
              <div className="card-body">
                <h5 className="card-titl fs-3 py-2"> Todo - List </h5>
                <p className="card-text">Click below button To get TodoList.</p>
                <div>
                  <Link to="/todo-list">
                    <button className="aboutmebtn"> Todo-List </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card col-md-3">
              <div className="web_designer-icon p-1">
                <img src={Protfolioimg} width="100%" height="200px" />
              </div>
              <div className="card-body">
                <h5 className="card-title fs-3 py-2"> Portfolio </h5>
                <p className="card-text">
                  Click below button To get Portfolio.
                </p>
                <div>
                  <Link to="/portfolio_page">
                    <button className="aboutmebtn"> More About Me </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card col-md-3">
              <div className="web_designer-icon p-1">
                <img src={backgroundimg} height="200px" width="100%" />
              </div>
              <div className="card-body">
                <h5 className="card-title fs-3 py-2"> E-commerce </h5>
                <p className="card-text">
                  Click below button To get E-commerce.
                </p>
                <div>
                  <Link to="/ecommerce_page">
                    <button className="aboutmebtn"> E-commerce </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card col-md-3">
              <div className="web_designer-icon p-1">
                <img src={wetherapplicationimg} width="100%" height="200px" />
              </div>
              <div className="card-body">
                <h5 className="card-title fs-4 py-2"> Wether-Application </h5>
                <p className="card-text">
                  Click below button To get E-commerce.
                </p>
                <div>
                  <Link to="/wether">
                    <button className="aboutmebtn"> Wether-Application </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
