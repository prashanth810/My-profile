import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Memorygame from "./memorygame/Memorygame";


const Icons = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const phoneNumber = "+91 8106124493 ";
  const message = "Hello, I would like to inquire about your services.";

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="icons_icons">
      <div className="animate__animated  animate__fadeInLeft animate__slower">
        <Link to="https://www.facebook.com/uppari.prashanth.39" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className="homeicons icons_homes"
            icon={faFacebook}
            style={{ color: "#63E6BE" }}
          />
        </Link>
        <Link to="https://www.instagram.com/_prashanth_u/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className="homeicons icons_home"
            icon={faInstagram}
            style={{ color: "#63E6BE" }}
          />
        </Link>

        <FontAwesomeIcon
          className="homeicons icons_home"
          icon={faWhatsapp}
          style={{ color: "#63E6BE" }}
          onClick={handleClick}
        />

        <Link to="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className="homeicons icons_home"
            icon={faLinkedinIn}
            style={{ color: "#63E6BE" }}
          />
        </Link>
      </div>

      <div>
        <Link to="/aboutme-page">
          <button className="aboutmebtn"> More About Me </button>
        </Link>

        <button className="aboutmebtn mx-1" onClick={handleModalOpen}> <FontAwesomeIcon icon={faFile} bounce style={{ color: "#ffffff", }} /> Play Game </button>
      </div>



      {showModal && (
        <div className="modal show text-dark" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h5 className="modal-title"> Memory Game </h5>
              <button type="button" className="close_button close" onClick={handleModalClose}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <Memorygame />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" onClick={handleModalClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Icons;
