import React from "react";
import Image from "next/image";
import jeans from "../../public/images/jeans.png";
import cozy from "../../public/images/cozy.png";
import polo from "../../public/images/shirt.png";
import pants from "../../public/images/pants.png";
import scroller from "../../public/images/Scroller.png";
import button from "../../public/images/Buttons Container.png";
import "./_style.scss";

export const Fashion = () => {
  return (
    <section id="Fashion">
      <div className="container">
        <div className="title">
          <div className="left">
            <div className="up">
              <h1>Discover Fashion.</h1>
              <p>Products</p>
            </div>
            <div className="down">
              <span>
                Dive into a world of fashion innovation at Klothink. Our
                carefully curated collections bring together the latest trends
                and timeless <br /> classics, ensuring you find the perfect
                pieces for every occasion.
              </span>
            </div>
          </div>
          <div className="right">
            <button className="view">View All Products</button>
          </div>
        </div>

        <div className="choice">
          <div className="category">
            <h2>ALL</h2>
            <small>|</small>
            <h3>Menswear</h3>
            <small>|</small>
            <h2>Womenswear</h2>
            <small>|</small>
            <h2>Kidswear</h2>
          </div>
          <div className="dressType">
            <button className="casual">Casual</button>
            <button className="formal">Formal</button>
            <button className="party">Party</button>
          </div>
        </div>

        <div className="cards">

            <div className="card">
                <Image src={jeans} alt="image"/>
                <div className="price">
                    <h3>Classic Denim Jeans</h3>
                    <p>$49.99</p>
                </div>
            </div>

            <div className="card">
                <Image src={cozy} alt="image"/>
                <div className="price">
                    <h3>Cozy Comfort Hoodie</h3>
                    <p>$39.99</p>
                </div>
            </div>

            <div className="card">
                <Image src={polo} alt="image"/>
                <div className="price">
                    <h3>Classic Polo Shirt</h3>
                    <p>$29.99</p>
                </div>
            </div>

            <div className="card">
                <Image src={pants} alt="image"/>
                <div className="price">
                    <h3>Chino Pants</h3>
                    <p>$44.99</p>
                </div>
            </div>
            
        </div>

        <div className="scroller">
            <Image src={scroller} width={1250} alt="image"/>
            <Image src={button} alt="image"/>
        </div>

      </div>
    </section>
  );
};


