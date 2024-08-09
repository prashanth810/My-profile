import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";
import Singleproducts from "./Singleproducts";

const Mobiles = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    getapi();
  }, []);

  const getapi = () => {
    fetch("https://63de1e7cf1af41051b0dc6a3.mockapi.io/Data/Api")
      .then((res) => res.json())
      .then((result) => {
        setStars(result);
      });
  };

  const renderStars = (rating) => {
    // Round rating to the nearest half
    const roundedRating = Math.round(rating * 2) / 2;
    const fullStars = Math.floor(roundedRating);
    const halfStars = roundedRating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="rating">
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} color="gold" />
        ))}
        {halfStars === 1 && (
          <FontAwesomeIcon icon={faStarHalfAlt} color="gold" />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={farStar} color="gold" />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Singleproducts stars={renderStars} />
      {stars
        .filter((val) => val.catagory === "Mobile")
        .map((vals, i) => {
          return (
            <div key={i}>
              <img src={vals.image} width="300px" height="300px" />
              {vals.title}
              {renderStars(vals.rating)}
            </div>
          );
        })}
    </div>
  );
};

export default Mobiles;
