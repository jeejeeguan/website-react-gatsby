import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Header from "../components/header";
import App from "../components/animation";

const IndexPage = () => (
  <Layout>
    <Header />
    <AniamtionLogo />
    <div className="Hero">
      <div className="HeroGroup">
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gtsby site.</p>
        <p>Welcome to your ne Gate.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">"Using TypeScript"</Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
