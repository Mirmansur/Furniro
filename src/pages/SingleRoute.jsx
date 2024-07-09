import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../pages/SingleRoute.css";
import str from "../assets/imegs/str.svg";
import group1 from "../assets/imegs/group1.png";
import group2 from "../assets/imegs/group2.png";
import images1 from "../assets/imegs/images1.png";
import images2 from "../assets/imegs/images2.png";
import images3 from "../assets/imegs/images3.png";
import images4 from "../assets/imegs/images4.png";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
const SingleRoute = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/products/${id}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  });
  const [productCount, setProductCount] = useState(0);
  const incrementProductCount = () => {
    setProductCount(productCount + 1);
  };
  const decrementProductCount = () => {
    setProductCount(productCount - 1);
  };
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
    <div className="Sing">
      <section>
        <div className="sing">
          <div className="container">
            <section>
              <div className="safa">
                <h2>Home</h2>
                <img src={str} alt="" />
                <h2>Shop</h2>
                <img src={str} alt="" />
                <p>Asgaard sofa</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section>
        <div className="inform">
          <div className="container">
            <div className="informs">
              <div className="img">
                <img src={data?.imegs} alt="" />
              </div>
              <div className="text">
                <h1>Asgaard sofa</h1>
                <h2>{data?.price}</h2>
                <p>
                  Setting the bar as one of the loudest speakers in its class,
                  the Kilburn is a compact, stout-hearted hero with a
                  well-balanced audio which boasts a clear midrange and extended
                  highs for a sound.
                </p>
                <p>{data?.body}</p>
                <div className="btn">
                  <div className="plus1">
                    <button className="" onClick={decrementProductCount}>
                      -
                    </button>
                    <span>{productCount}</span>
                    <button className="" onClick={incrementProductCount}>
                      +
                    </button>
                  </div>
                  <button className="add">Add To Cart</button>
                  <button className="add">+ Compare</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="Description">
          <div className="container">
            <div className="descrip">
              <div className="desc-start">
                <h1>Description</h1>
                <h2>Additional Information</h2>
                <h3>Reviews [5]</h3>
              </div>
              <div className="desc-p">
                <p>
                  Embodying the raw, wayward spirit of rock ‘n’ roll, the
                  Kilburn portable active stereo speaker takes the unmistakable
                  look and sound of Marshall, unplugs the chords, and takes the
                  show on the road.
                </p>
                <p>
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece
                  of vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact,
                  stout-hearted hero with a well-balanced audio which boasts a
                  clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to
                  fine tune the controls to your personal preferences while the
                  guitar-influenced leather strap enables easy and stylish
                  travel.
                </p>
              </div>
              <div className="desc-img">
                <img src={group1} alt="" />
                <img src={group2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="Related">
          <div className="container">
            <div className="related">
              <div className="related-start">
                <h1>Related Products</h1>
              </div>
              <div className="related-finish">
                <div className="finish">
                  <div className="finisg-img">
                    <img src={images1} alt="" />
                  </div>
                  <div className="finish-words">
                    <h2>Syltherine</h2>
                    <p>Stylish cafe chair</p>
                    <h3>Rp 2.500.000</h3>
                  </div>
                </div>
                <div className="finish">
                  <div className="finisg-img">
                    <img src={images2} alt="" />
                  </div>
                  <div className="finish-words">
                    <h2>Leviosa</h2>
                    <p>Stylish cafe chair</p>
                    <h3>Rp 2.500.000</h3>
                  </div>
                </div>
                <div className="finish">
                  <div className="finisg-img">
                    <img src={images3} alt="" />
                  </div>
                  <div className="finish-words">
                    <h2>Lolito</h2>
                    <p>Luxury big sofar</p>
                    <h3>Rp 7.000.000</h3>
                  </div>
                </div>
                <div className="finish">
                  <div className="finisg-img">
                    <img src={images4} alt="" />
                  </div>
                  <div className="finish-words">
                    <h2>Respira</h2>
                    <p>Outdoor bar table and stool</p>
                    <h3>Rp 500.000</h3>
                  </div>
                </div>
              </div>
              <div className="related-btn">
                <button>Show More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BackToTop />
    </div>
  );
};

export default SingleRoute;
