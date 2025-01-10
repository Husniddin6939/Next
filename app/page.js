import React from "react";
import { Header } from "../components/header/index.jsx";
import { Intro, Fashion, Experience, Customers, Question } from "../sections/index.jsx";

const page = () => {
  return (
    <>
      <Header/>
      <main>
        <Intro/>
        <Fashion/>
        <Experience/>
        <Customers/>
        <Question/>
      </main>
    </>
  );
};

export default page;
