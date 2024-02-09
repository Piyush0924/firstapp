import React from "react";
// import Products from "./products";
import img from './ecommerce.webp'

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src={img}
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container pt-1">
            <h5 data-testid='home'  className="card-title display-5 fw-bolder mb-0 pl-800em text-warning text-end">
             Welcome to Mart
            </h5>
            <p className="card-text fs-2 text-end text-light pr-3">
              <strong>All items Available Just Look for a sec</strong>
            </p>
          </div>
        </div>
      </div>
      {/* <Products /> */}
    </div>
  );
};

export default Home;
