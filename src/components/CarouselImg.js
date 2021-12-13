import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselImg = ({ pageData }) => {
  
    return (
    <Carousel variant="dark">
      {pageData.img.map((el, index) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + el}
              alt={pageData.alt[index]}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselImg;
