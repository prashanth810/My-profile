import React from "react";
import { Link } from "react-router-dom";

const Mainpage = () => {
  return (
    <div className="d-flex gap-5 justify-content-center my-5">
      <Link to="/main-page">
        <button> Portfolio </button>
      </Link>
      <Link to="/main-page">
        <button> Portfolio </button>
      </Link>
      <Link to="/main-page">
        <button> Portfolio </button>
      </Link>
      <Link to="/main-page">
        <button> Portfolio </button>
      </Link>
    </div>
  );
};

export default Mainpage;
