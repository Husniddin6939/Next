import React from "react";
import Image from "next/image";
import sarah from "../../public/images/sarah.svg";
import rajesh from "../../public/images/rejash.svg";
import emily from "../../public/images/emily.svg";
import fiveStar from "../../public/images/fiveStar.svg";
import string from "../../public/images/string.svg";
import "./_style.scss";

export const Customers = () => {
  return (
    <section id="Customers">
      <div className="container">
        <div className="title">
          <div className="left">
            <div className="up">
              <h1>Customers Love.</h1>
              <p>Testimonials</p>
            </div>
            <div className="down">
              <span>
                At Klothink, our customers are the heartbeat of our brand.
                Explore the heartfelt testimonials shared by those who have{" "}
                <br />
                experienced the magic of Klothink fashion.
              </span>
            </div>
          </div>
          <div className="right">
            <button className="view">View All Testimonials</button>
          </div>
        </div>

        <div className="customer">
          <div className="box">
            <div className="up">
              <div className="line">
                <Image src={sarah} alt="image" />
                <div>
                  <h3>Sarah Thompson</h3>
                  <Image src={fiveStar} alt="image" />
                </div>
              </div>
              <Image src={string} alt="image" />
            </div>
            <span>
              Klothink exceeded my expectations. The gown's quality and design
              made me feel like a queen. Fast shipping, too!
            </span>
          </div>

          <div className="box">
            <div className="up">
              <div className="line">
                <Image src={rajesh} alt="image" />
                <div>
                  <h3>Rajesh Patel</h3>
                  <Image src={fiveStar} alt="image" />
                </div>
              </div>
              <Image src={string} alt="image" />
            </div>
            <span>
              Absolutely love the style and warmth of the jacket. A perfect
              blend of fashion and functionality!
            </span>
          </div>

          <div className="box">
            <div className="up">
              <div className="line">
                <Image src={emily} alt="image" />
                <div>
                  <h3>Emily Walker</h3>
                  <Image src={fiveStar} alt="image" />
                </div>
              </div>
              <Image src={string} alt="image" />
            </div>
            <span>
              Klothink exceeded my expectations. The gown's quality and design
              made me feel like a queen. Fast shipping, too!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
