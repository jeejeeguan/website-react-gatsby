import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src="" alt="" width="30" />
      </Link>
      <Link to="/courses">courses</Link>
      <Link to="/downloads">downloads</Link>
      <Link to="/workshop">workshop</Link>
      <Link to="/buy">
        <button>buy</button>
      </Link>
    </div>
  </div>
);

export default Header;
