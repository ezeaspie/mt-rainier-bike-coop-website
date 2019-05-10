import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

const Carousel = () => {
    const CarouselUI = ({ position, total, handleClick, children }) => (
        <div className="carousel-container">
          <div className="carousel-children">
            {children}
            <div className="arrow left" onClick={handleClick} data-position={position - 1}>{'<'}</div>
            <div className="arrow right" onClick={handleClick} data-position={position + 1}>{'>'}</div>
          </div>
          <span className="container-dots">
            {Array(...Array(total)).map( (val, index) =>
              <span className="container-dot" key={index} onClick={handleClick} data-position={index}>
                {index === position ? '● ' : '○ ' }
              </span>
            )}
          </span>
        </div>
      );
      const Carousel = makeCarousel(CarouselUI);
      
      return (
        <Carousel>
          <Slide right>
            <div className="carousel-slide">
              <img src="./images/bike1.jpg" alt="slider1"/>
            </div>
          </Slide>
          <Slide right>
            <div className="carousel-slide">
              <img src="./images/bike2.jpg" alt="slider2"/>
            </div>
          </Slide>
          <Slide right>
            <div className="carousel-slide">
              <img src="./images/bike3.jpg" alt="slider3"/>
            </div>
          </Slide>
        </Carousel>
      );
}

export default Carousel;
