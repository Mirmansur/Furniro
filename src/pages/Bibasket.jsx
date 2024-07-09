import str from "../assets/imegs/down.svg";
import logo from "../assets/imegs/logo.svg";
import "./Bibasket.css";
const Bibasket = () => {
  return (
    <div className="Bibasket">
      <div className="bibasket">
        <div className="container">
          <div className="shop">
            <div className="shop-all">
              <div className="shops-logo">
                <img src={logo} alt="" />
              </div>
              <div className="shops">
                <h1>Shop</h1>
              </div>
              <div className="shops-2">
                <h3>Home</h3>
                <img src={str} alt="" />
                <p>Shop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bibasket;
