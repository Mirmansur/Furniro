import { Link, NavLink } from "react-router-dom";
import logo from "../assets/imegs/logo.svg";
import "../compponets/Header.css";
import icon1 from "../assets/imegs/icon1.svg";
import icon2 from "../assets/imegs/icon2.svg";
import icon3 from "../assets/imegs/icon3.svg";
import icon4 from "../assets/imegs/icon4.svg";
const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="" />
            <h1>Furniro</h1>
          </div>
          <div className="link">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="icon">
            <button>
              {" "}
              <img src={icon1} alt="" />
            </button>
            <button>
              {" "}
              <img src={icon2} alt="" />
            </button>
            <button>
              {" "}
              <img src={icon3} alt="" />
            </button>
            <Link to={"bibasket"}>
              <button>
                <img src={icon4} alt="" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
