import React from "react";
import "../../stylesheet/Home/banner.css";
// import "../image/banner/Luke_chesser.jpg";

export default Banner;
function Banner() {
  return (
    <section className="banner-section">
      <div className="banner">
        <div className="container">
          <div className="banner-txt">
            <h1>
              <span className="romantic-text">FeFe</span>
              <small>Welcome</small>
            </h1>
            <p>We hope we can make your day a good one!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
