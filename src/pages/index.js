import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";
import Card from "../components/card";
import Section from "../components/Section";
import Wave from "../components/Wave";
import staticdata from "../../content/staticdata.json";
import Cell from "../components/Cell";

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
      <Wave />
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
      text="Paul Rand was born Peretz Rosenbaum on August 15, 1914 in Brooklyn, New York.[3] He embraced design at a very young age, painting signs for his father's grocery store as well as for school events at P.S. 109.[4] Rand's father did not believe art could provide his son with a sufficient livelihood, and so he required Paul to attend Manhattan's Haaren High School while taking night classes at the Pratt Institute."
    />
    {staticdata.cells.map((cell, index) => (
      <Cell key={index} title={cell.title} image={cell.image} />
    ))}
  </Layout>
);

export default IndexPage;
