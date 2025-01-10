import React from "react";
import Image from "next/image";
import shop from "../../public/images/shop.svg";
import IntroImage from "../../public/images/introImage.png"
import "./_style.scss";

export const Intro = () => {
  return (
    <section id="Intro">
      <div className="container">

        <div className="left">

          <div className="up">
            <div className="line">
              <h1>Elevate Your Style with Klothink</h1>
              <p>STYLE REDEFINED</p>
            </div>
          <span>
            Explore a world of fashion at Klothink, where trends meet
            affordability. Immerse yourself in the latest styles and seize
            exclusive promotions.
          </span>
          <div className="button">
            <button className="shop">
              {" "}
              <Image src={shop} alt="icon" width={24} height={24} />
              Shop Now
            </button>
            <button className="contact">Contact us</button>
          </div>
          </div>

          <div className="down">
            <div className="box">
                <h1>Over 1000+</h1>
                <p>Trendsetting Styles</p>
            </div>
            <div className="box">
                <h1>99%</h1>
                <p>Customer Satisfaction Rate</p>
            </div>
            <div className="box">
                <h1>24/7</h1>
                <p>Shopping Convenience</p>
            </div>
            <div className="box">
                <h1>30-Day</h1>
                <p>Hassle-Free Returns</p>
            </div>
          </div>

        </div>

    <div className="right">
        <Image className="IntroImage" src={IntroImage} alt="image" width={600} height={701}/>
    </div>

      </div>
    </section>
  );
};
