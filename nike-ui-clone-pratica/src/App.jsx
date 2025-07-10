import { FaUser } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useState } from "react";

import shoesData from "./data/data.jsx";

import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const [shoeIndex, setShoeIndex] = useState(4);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState("next");

  const getClassName = (index) => {
    if (index === shoeIndex) return "shoeActive";
    if (index === prevIndex) {
      const isNext = shoeIndex === (prevIndex + 1) % shoesData.length;
      return isNext ? "fromPrev" : "fromNext";
    }
    if (
      index === (shoeIndex - 1 + shoesData.length) % shoesData.length &&
      direction === "prev"
    )
      return "fromPrev";
    if (index === (shoeIndex + 1) % shoesData.length && direction === "next")
      return "fromNext";
    return "awaiting";
  };

  const themeColor = shoesData[shoeIndex].gradient;
  const color = shoesData[shoeIndex].color;
  const features = shoesData[shoeIndex].features;

  const handleNext = () => {
    setPrevIndex(shoeIndex);
    setDirection("next");
    setShoeIndex((shoeIndex + 1) % shoesData.length);
  };

  const handlePrev = () => {
    setPrevIndex(shoeIndex);
    setDirection("prev");
    setShoeIndex((shoeIndex - 1 + shoesData.length) % shoesData.length);
  };

  return (
    <div className="app">
      <section className="section-banner" style={{ background: themeColor }}>
        <header className="header">
          <h1 className="header-title">Nike Clone</h1>
          <nav className="header-nav">
            <ul className="header-nav-list">
              <li className="header-nav-item active">
                <a href="#">Home</a>
              </li>
              <li className="header-nav-item">
                <a href="#">Sobre</a>
              </li>
              <li className="header-nav-item">
                <a href="#">Historia</a>
              </li>
              <li className="header-nav-item">
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>
          <button className="header-login">
            <FaUser />
            <span>Login</span>
          </button>
        </header>
        <div className="banner-carroussel">
          <div className="banner-carroussel_info">
            <h2>
              Use seu estilo <br /> com conforto
            </h2>
            <p>marca do tenis</p>
          </div>
          <div className="banner-carroussel_size">
            <span>12</span>
            <span>14</span>
            <span>16</span>
          </div>
        </div>
        <div className="banner-carroussel-btn">
          <button type="button" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button type="button" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
        <div className="banner-options">
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ex,
            saepe.
          </p>
          <div className="banner-options_btn">
            <div className="banner-options_btn-quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className="options_btn-sell">Comprar</button>
          </div>
        </div>
      </section>
      <section className="section-info" style={{ color: color }}>
        <h2 className="info-title">{shoesData[shoeIndex].name}</h2>
        <p className="info-description">{shoesData[shoeIndex].description}</p>
        <button className="info-btn">Comprar</button>
      </section>
      <section className="section-tags">
        <h2 className="tags-title">
          qualidade <br /> que fala
        </h2>
        {features.map((feature, index) => {
          if (index > 6)
            <span key={index} className={`feature-${index}`}>
              {feature}
            </span>;
        })}
      </section>
      <Carousel shoesData={shoesData} getClassName={getClassName} />
    </div>
  );
}

export default App;
