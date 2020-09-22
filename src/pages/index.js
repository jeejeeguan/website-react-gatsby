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
        <p>Welcome to your new Gtsby site.</p>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
