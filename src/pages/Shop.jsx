import "../pages/Shop.css";
import str from "../assets/imegs/down.svg";
import filter from "../assets/imegs/filter.svg";
import grid from "../assets/imegs/grid.svg";
import view from "../assets/imegs/view.svg";
import { useEffect, useState } from "react";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import kub from "../assets/imegs/kub.png";
import give from "../assets/imegs/give.png";
import coll from "../assets/imegs/coll.png";
import good from "../assets/imegs/good.png";
import axios from "axios";
import { Link } from "react-router-dom";
const Shop = () => {
  const [error, setError] = useState("");
  const [shop, setshop] = useState([]);
  console.log(shop);

  const fetchShop = async () => {
    try {
      const res = await axios.get("http://localhost:4000/products");
      const data = await res.data;
      setshop(data);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchShop();
  }, []);

  const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <button
        className={`back-to-top ${isVisible ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <MdOutlineVerticalAlignTop className="top-icon" />
      </button>
    );
  };

  return (
    <div className="Shop">
      <div className="conatiner">
        <section>
          <div className="shop">
            <div className="shops">
              <h1>Shop</h1>
            </div>
            <div className="shops-2">
              <h3>Home</h3>
              <img src={str} alt="" />
              <p>Shop</p>
            </div>
          </div>
        </section>
        <section className="bg-show">
          <div className="container">
            <div className="show">
              <div className="show-logo">
                <div className="filter">
                  <img src={filter} alt="" />
                  <h2>Filter</h2>
                </div>
                <div className="images">
                  <img src={grid} alt="" />
                  <img src={view} alt="" />
                </div>
                <div className="border"></div>
                <p>Showing 1–16 of 32 results</p>
              </div>
              <div className="show-number">
                <div className="number1">
                  <h2>Show</h2>
                  <button>16</button>
                </div>
                <div className="number2">
                  <h2>Short by</h2>
                  <button>Default</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Carousel>
          <section>
            <div className="container">
              <div className="card">
                <div className="cards">
                  {shop.map((shops) => (
                    <div key={shops}>
                      <div className="cards-word">
                        <img src={shops.imegs} alt="" />
                        <div className="words">
                          <Link to={`/product/${shops.id}`}>
                            <h2> {shops.title}</h2>
                          </Link>
                          <p>{shops.body}</p>
                          <h3>
                            {shops.price}
                            <p>Rp 3.500.000</p>
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Carousel>
        <section className="jobs">
          <div className="container">
            <div className="job">
              <div className="job-img">
                <div className="kub-img">
                  <img src={kub} alt="" />
                </div>
                <div className="kub-word">
                  <h2>High Quality</h2>
                  <p>crafted from top materials</p>
                </div>
              </div>
              <div className="job-img">
                <div className="kub-img">
                  <img src={good} alt="" />
                </div>
                <div className="kub-word">
                  <h2>Warranty Protection</h2>
                  <p>Over 2 years</p>
                </div>
              </div>
              <div className="job-img">
                <div className="kub-img">
                  <img src={give} alt="" />
                </div>
                <div className="kub-word">
                  <h2>Free Shipping</h2>
                  <p>Order over 150 $</p>
                </div>
              </div>
              <div className="job-img">
                <div className="kub-img">
                  <img src={coll} alt="" />
                </div>
                <div className="kub-word">
                  <h2>24 / 7 Support</h2>
                  <p>Dedicated support</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {error && <div>{error}</div>}
      <BackToTop />
    </div>
  );
};

export default Shop;
