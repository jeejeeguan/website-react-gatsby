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
      <svg
        width="100%"
        height="125"
        viewBox="0 0 100% 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="white">
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="10s"
            values="M0 5.00025C0 5.00025 85.5 -18.4996 167 38.0003C248.5 94.5001 317.5 12 401 12C484.5 12 511 88.5002 611.5 38.0003C712 -12.4997 800 5.00025 800 5.00025V125H0V5.00025Z;
              
              M0 3.0003C0 3.0003 68 18.0002 167 36.0003C266 54.0004 274 50.9997 401 10.0001C528 -30.9996 543 76.5 611.5 36.0003C680 -4.49934 800 3.0003 800 3.0003V123H0V3.0003Z;

              M0 4.9999C0 4.9999 92 -9.5003 141 37.9999C190 85.5002 243.5 73.4998 329 34.9999C414.5 -3.5 514 93 611.5 37.9999C709 -17.0001 800 4.9999 800 4.9999V125H0V4.9999Z;

              M0 5.00025C0 5.00025 85.5 -18.4996 167 38.0003C248.5 94.5001 317.5 12 401 12C484.5 12 511 88.5002 611.5 38.0003C712 -12.4997 800 5.00025 800 5.00025V125H0V5.00025Z

              "
          />
        </path>
      </svg>
    </div>
  </Layout>
);

export default IndexPage;
