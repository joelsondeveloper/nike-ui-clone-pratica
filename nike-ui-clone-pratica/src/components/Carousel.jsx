import "./Carousel.css";

const Carousel = ({  shoesData, getClassName }) => {
  return (
    <>
      {/* <img src={shoesData[0].src} alt={shoesData[0].name} className="shoesAbsolute"/> */}
      {shoesData.map((shoe, index) => (
        <img
          src={shoe.src}
          key={index}
          alt={shoe.name}
          className={`shoeAbsolute ${getClassName(index)}`} />
      ))}
    </>
  );
};

export default Carousel;
