import React from "react";
import "./_style.scss";

export const Question = () => {
  return (
    <section id="Question">
      <div className="container">

        <div className="up">
          <div className="line">
            <h1>Questions? We Have Answers.</h1>
            <p>FAQ</p>
          </div>
          <span>
            Ease into the world of Klothink with clarity. Our FAQs cover a
            spectrum of topics, ensuring you have the information you need for a
            seamless shopping <br /> experience.
          </span>
        </div>

        <div className="category">
            <h3>ALL</h3>
            <small>|</small>
            <h2>ORDERING</h2>
            <small>|</small>
            <h2>SHIPPING</h2>
            <small>|</small>
            <h2>RETURNS</h2>
            <small>|</small>
            <h2>CUSTOMER SUPPORT</h2>
        </div>

      </div>
    </section>
  );
};
