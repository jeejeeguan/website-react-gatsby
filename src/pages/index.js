import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";

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
        <Link to="/page-2/">Go to page 2</Link> <br />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
