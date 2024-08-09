import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Ecommerce.css";

const Ecommerce = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getapi();
  }, []);

  const getapi = () => {

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProduct(result.products);
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
            </div>
          </div>
        </div>
      </nav>
      <div>
        <div className="cards_main-div">
          <div className="container-fluid">
            <div className="ecommerce_heading text-center pt-5 pb-4">
              <h1 className="text-white"> All - Product's </h1>
            </div>
            <div className="row">
              {product.map((val, i) => {
                return (
                  <div
                    key={i}
                    className="card_hed_div text-white col-md-3 py-4 px-3"
                  >
                    <div class="card">
                      <img
                        src={val.thumbnail}
                        class="card-img-top"
                        alt="item-image"
                      />
                      <div class="card-body">
                        <h5 class="card-title py-4">{val.title}</h5>
                        {/* <p class="card-text">{val.description}</p> */}
                        <div className="singlepage_btn">
                          <Link to={`/productss/${product.id}`}>
                            <button className="single_checkbtn">
                              Check It
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
