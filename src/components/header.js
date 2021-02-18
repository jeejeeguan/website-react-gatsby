import { Link } from "gatsby";
import React from "react";
import "./Header.css";

/* const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={require("../images/logo.svg")} alt="" width="30" />
      </Link>
      <Link to="/courses">courses</Link>
      <Link to="/downloads">downloads</Link>
      <Link to="/workshop">workshop</Link>
      <Link to="/">
        <button>buy</button>
      </Link>
    </div>
  </div>
); */

/* function Header(props) {
  return (
    <div className="Header">
      <div className="HeaderGroup">
        <Link to="/">
          <img src={require("../images/logo.svg")} alt="" width="30" />
        </Link>
        <Link to="/courses">courses</Link>
        <Link to="/downloads">downloads</Link>
        <Link to="/workshop">workshop</Link>
        <Link to="/">
          <button>BUY</button>
        </Link>
      </div>
    </div>
  );
} */

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 80) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={require("../images/logo.svg")} alt="" width="30" />
          </Link>
          <Link to="/courses">courses</Link>
          <Link to="/downloads">downloads</Link>
          <Link to="/workshop">workshop</Link>
          <Link to="/">
            <button>buy</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
