import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
const Header = lazy(() => import("./compponets/Header"));
const Footer = lazy(() => import("./compponets/Footer"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
import SingleRoute from "./pages/SingleRoute";
import BiBasket from "./pages/Bibasket";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SingleRoute />} />
          <Route path="/bibasket" element={<BiBasket />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
