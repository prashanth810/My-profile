import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Ecommerce.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ecommerce = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getapi();
  }, []);

  const getapi = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        const trending = result.products.slice(0, 12);
        setProduct(trending);
      });
  };

  return (
    <div style={{ backgroundColor: "rgb(60 116 153)" }}>
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
              alt="logo"
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
                <span
                  className="nav-link active text-white mx-4"
                  aria-current="page"
                >
                  Todo-List
                </span>
              </Link>
              <Link to="/portfolio_page" style={{ textDecoration: "none" }}>
                <span className="nav-link text-white mx-4">Portfolio</span>
              </Link>
              <Link to="/ecommerce_page" style={{ textDecoration: "none" }}>
                <span className="nav-link text-white mx-4">E-commerce</span>
              </Link>
              <Link to="/wether" style={{ textDecoration: "none" }}>
                <span className="nav-link text-white mx-2">
                  Weather-Application
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <div className="cards_main-div">
          <div className="container-fluid">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container">
                <a class="navbar-brand" href="#">
                  E - Commerce
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                      <Link
                        to="/mobileonly"
                        class="nav-link active"
                        aria-current="page"
                      >
                        Mobile's
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/laptoponly" class="nav-link" href="#">
                        Laptop's
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to='/laptopmobiles' class="nav-link">
                        All Product's
                      </Link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">
                        Card
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="ecommerce_heading text-center pt-5 pb-4">
              <h1 className="text-white ecommercees"> E - Commerce </h1>
            </div>
            <div className="row">
              {product.map((val, i) => (
                <div
                  key={i}
                  className="card_hed_div text-white col-md-3 py-4 px-3"
                >
                  <div className="card">
                    <img
                      src={val.thumbnail}
                      className="card-img-top"
                      alt="item"
                    />
                    <div className="card-body">
                      <h5 className="card-title py-4 text-center">
                        {val.title}
                      </h5>
                      <div className="singlepage_btn text-center">
                        <Link to={`/productss/${val.id}`}>
                          <button className="single_checkbtn">Check It</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="main2_div">
          <div className="container-fluid  w-100">
            <div className="row row_btn">
              <Link to="/allproducts">
                <button className="more_products w-100">More Products</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
