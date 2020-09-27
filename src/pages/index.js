import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";
import Card from "../components/card";
import Section from "../components/Section";

const IndexPage = () => (
  <Layout>
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <SEO title="Home" />
        <h1>Paul Rand</h1>
        <p>
          Paul Rand (born Peretz Rosenbaum; August 15, 1914 – November 26, 1996)
          was an American art director and graphic designer
        </p>
        <Link to="/page-2/">Go to page 2</Link>
        <div className="Logos">
          <img src={require("../images/Book-open.svg")} alt="" width="48" />
          <img src={require("../images/Compiling.svg")} alt="" width="48" />
          <img src={require("../images/Flower#1.svg")} alt="" width="48" />
          <img src={require("../images/Half-heart.svg")} alt="" width="48" />
        </div>
      </div>
      <svg
        width="100%"
        height="200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="white">
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="5s"
            values="M0 7.7631C0 7.7631 427.5 -29.8831 835 60.6283C1242.5 151.14 1587.5 18.9765 2005 18.9765C2422.5 18.9765 2555 141.528 3057.5 60.6283C3560 -20.2714 4000 7.7631 4000 7.7631V200H0V7.7631Z;
              
            M0 4.58094C0 4.58094 340 29.0709 835 58.4592C1330 87.8476 1370 82.9483 2005 16.0093C2640 -50.9298 2715 124.582 3057.5 58.4592C3400 -7.66354 4000 4.58094 4000 4.58094V200.502H0V4.58094Z;

            M0 6.98955C0 6.98955 460 -16.3329 705 60.0675C950 136.468 1217.5 117.166 1645 55.2422C2072.5 -6.68186 2570 148.531 3057.5 60.0675C3545 -28.3957 4000 6.98955 4000 6.98955V200H0V6.98955Z;

            M0 7.7631C0 7.7631 427.5 -29.8831 835 60.6283C1242.5 151.14 1587.5 18.9765 2005 18.9765C2422.5 18.9765 2555 141.528 3057.5 60.6283C3560 -20.2714 4000 7.7631 4000 7.7631V200H0V7.7631Z

              "
          />
        </path>
      </svg>
    </div>
    <div className="Cards">
      <h2>12 Amazing Projects</h2>
      <div className="CardGroup">
        <Card
          image={require("../images/card-wallpaper01.png")}
          title="React for Designers"
          text="12 sections"
        />
        <Card
          image={require("../images/card-wallpaper02.png")}
          title="React for Designers"
          text="12 sections"
        />
        <Card
          image={require("../images/card-wallpaper03.png")}
          title="React for Designers"
          text="12 sections"
        />
        <Card
          image={require("../images/card-wallpaper04.png")}
          title="React for Designers"
          text="12 sections"
        />
        <Card
          image={require("../images/card-wallpaper05.png")}
          title="React for Designers"
          text="12 sections"
        />
        <Card
          image={require("../images/card-wallpaper06.png")}
          title="React for Designers"
          text="12 sections"
        />
        <Card
          image={require("../images/card-wallpaper07.png")}
          title="React for Designers"
          text="12 sections"
        />
        <Card
          image={require("../images/card-wallpaper08.png")}
          title="React for Designers"
          text="12 sections"
        />
        <Card
          image={require("../images/card-wallpaper09.png")}
          title="React for Designers"
          text="12 sections"
        />
      </div>
    </div>
    <Section
      image={require("../images/sectionwallpaper.png")}
      logo={require("../images/sectionlogo.png")}
      title="Paul Rand"
      text="Paul Rand (born Peretz Rosenbaum; August 15, 1914 – November 26, 1996)
      was an American art director and graphic designer, Paul Rand (born Peretz Rosenbaum; August 15, 1914 – November 26, 1996)
      was an American art director and graphic designer, Paul Rand (born Peretz Rosenbaum; August 15, 1914 – November 26, 1996)
      was an American art director and graphic designer, "
    />
  </Layout>
);

export default IndexPage;
