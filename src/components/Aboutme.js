import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import Icons from "./Icons";
import myimage from "../images/myimage2.jpg";

//images

import Parcelyogi from "../images/Parcelyogi.png";
import Educa from "../images/Educa.png";
import Oldhouse from "../images/Old house.png";

// Javscript with design

import Registrationform from "../images/Registration.png";
import Todolist from "../images/Todo-List.png";
import Wallclock from "../images/Wallclock.png";
import formvalidation from "../images/form validations.png";

//recat developing

import makingcircles from "../images/Making circles on browser.png";
import Contactform from "./Contactfrom";

const Aboutme = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Web Designer", "Web Developer ", "Coder"],
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-white portfolio">
      <nav className="navbar navbar-expand-lg p-4 nav-barlogo">
        <div className="container container_nav">
          <a className="navbar-brand text-white" href="#">
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
            <div className="navbar-nav ms-auto">
              <a
                className="nav-link active text-white mx-4"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
              <a className="nav-link text-white mx-4" href="#about">
                About
              </a>

              <a className="nav-link text-white mx-4" href="#services">
                Services
              </a>
              <a className="nav-link text-white mx-3" href="#Portfolio">
                Protfolio
              </a>
              <a className="nav-link text-white " href="#contactform">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="main  main_rows">
        <div className="container">
          <div className="row" id="home">
            <div className="col-md-6 col-sm-12 col-lg-6 order-2 order-md-1">
              <div className="animate__animated animate__fadeInLeft animate__slower">
                <h3 className="role_header main_name">Hello, It's Me</h3>
                <h1 className="animate__animated animate__backInLeft main_name">
                  Prashanth
                </h1>
              </div>
              <h3 className="role">
                And I'm a <span className="text" ref={typedElement}></span>
              </h3>
              <p className="animate__animated animate__bounceInRight animate__slower role_description">
                I'm a Web Designer with extensive experience for 6 months
                <br />
                expertise is to create web site design, frontend design, Web
                Developing also and More...
              </p>
              <div className="col-md-6">
                <Icons />
              </div>
            </div>
            <div className="animate__animated animate__bounceInRight animate__slower col-md-6 col-sm-12 col-lg-6 myimages order-1 order-md-2">
              <img src={myimage} width="100%" className="myportfolio-image" />
            </div>
          </div>
        </div>
      </div>

      <div id="Portfolio">
        <div className="main4">
          <div className="container">
            <div className="row">
              <div className="protfolio_mainhead">
                <h2 className="protfolio_subhead"> Portfolio </h2>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card_image" style={{ padding: "20px" }}>
                    <img src={Parcelyogi} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>
                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading"> Website Designer </h2>
                    <p> Using Html, Css , Bootstrap </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card_image" style={{ padding: "20px" }}>
                    <img src={Educa} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>

                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading"> Website Designer </h2>
                    <p> Using Html, Css , Bootstrap </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card_image" style={{ padding: "20px" }}>
                    <img src={Oldhouse} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>
                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading"> Website Designer </h2>
                    <p> Using Html, Css , Bootstrap </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main4">
          <div className="container">
            <div className="row">
              <div className="protfolio_mainhead" id="Portfolio">
                <h2 className="protfolio_subhead"> Using Javscript </h2>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card_image" style={{ padding: "20px" }}>
                    <img src={formvalidation} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>
                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading"> Form_validations</h2>
                    <p> Using Html, Css , Javascript, Bootstrap </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card_image" style={{ padding: "20px" }}>
                    <img src={Registrationform} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>

                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading">
                      Job Application_form
                    </h2>
                    <p> Using Html, Css , Javscript, Bootstrap </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card_image" style={{ padding: "20px" }}>
                    <img src={Todolist} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>
                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading"> Todo_Lists </h2>
                    <p> Using Html, Css , Javascript, Bootstrap </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card_image" style={{ padding: "30px" }}>
                    <img src={Wallclock} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>
                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading"> Wall_Clock </h2>
                    <p> Using Html, Css , Bootstrap, Javascript </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card_image" style={{ padding: "30px" }}>
                    <img src={makingcircles} />
                  </div>
                  <div className="card_hed text-start py-3 px-4">
                    {/* <h4> Web Designer </h4> */}
                  </div>
                  <div className="card_description text-start px-4">
                    <h2 className="portfolio_subheading"> Making_Circle </h2>
                    <p> Using React_js </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Contactform />
      </div>
    </div>
  );
};

export default Aboutme;
