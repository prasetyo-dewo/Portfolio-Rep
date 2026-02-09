import React from "react";
import Navbar from "../components/Navbar";
import Hero from "./home/pages";
import About from "./about/page";
import Skill from "./skill/page";
import Project from "./projects/page";
import FAQ from "./faq/page";
import Contact from "./contact/page";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
