import React from "react";
import Image from "next/image";
import star from "../../public/images/star.svg";
import wheel from "../../public/images/wheel.svg";
import sound from "../../public/images/sound.svg";
import light from "../../public/images/light.svg";
import stars from "../../public/images/stars.svg";
import sun from "../../public/images/sun.svg";
import "./_style.scss";

export const Experience = () => {
  return (
    <section id="Experience">
      <div className="container">
        <div className="up">
          <div className="line">
            <h1>The Klothink Experience.</h1>
            <p>About Us</p>
          </div>
          <span>
            At Klothink, we breathe life into fashion, blending creativity with
            commitment. Our journey is fueled by a dedication to delivering
            unparalleled style and <br /> quality. Join us in redefining fashion
            and embracing a community where every purchase tells a story.
          </span>
        </div>
        <div className="down">
          <div className="grid_box">
            <div className="box">
              <div>
                <Image src={star} alt="icon" />
                <h2>Passionate Craftsmanship</h2>
              </div>
              <span>
                Every garment at Klothink is crafted with passion, reflecting
                our commitment to quality and innovation.
              </span>
            </div>

            <div className="box">
              <div>
                <Image src={wheel} alt="icon" />
                <h2>Fashion Forward</h2>
              </div>
              <span>
                We're more than a brand; we're trendsetters, curating styles
                that empower and inspire confidence.
              </span>
            </div>

            <div className="box">
              <div>
                <Image src={sound} alt="icon" />
                <h2>Customer-Centric Approach</h2>
              </div>
              <span>
                At Klothink, our customers are at the heart of everything we do.
                Your satisfaction is our measure of success.
              </span>
            </div>

            <div className="box">
              <div>
                <Image src={light} alt="icon" />
                <h2>Global Inspiration</h2>
              </div>
              <span>
                Influenced by global trends, we bring you a diverse and dynamic
                collection.
              </span>
            </div>

            <div className="box">
              <div>
                <Image src={stars} alt="icon" />
                <h2>Empowering Your Style</h2>
              </div>
              <span>
                Beyond clothing, Klothink is a lifestyle. Join us on a journey
                of self-expression.
              </span>
            </div>

            <div className="box">
              <div>
                <Image src={sun} alt="icon" />
                <h2>Sustainable Practices</h2>
              </div>
              <span>
                Klothink is committed to sustainability, integrating
                eco-friendly practices into our production process.
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
