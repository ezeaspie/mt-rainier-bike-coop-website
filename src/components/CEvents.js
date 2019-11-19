import React, { useState } from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import Slider from "react-slick";

const CEvents = () => {

  let requestURL = `https://mt-rainier-bike-coop-backend.herokuapp.com/getEventData` // In development? Use : `;
    const getCalenderData = () => {
      fetch(requestURL, {
        mode:"cors",
      })
      .then(res => res.json())
      .then(res =>{
        console.log(res);
        setEventData(res);
        setCalledServer(true);
      });
    }
    
    let [calledServer, setCalledServer] = useState(false);
    let [eventData, setEventData] = useState([]);
    if(!calledServer){
      setTimeout(getCalenderData,50);
    }
    const settings = {
      className: "",
      dots: true,
      infinite: true,
      lazyLoad: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };

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
      <div className="events-main">
              {
                eventData.length === 0? null
                :
                <section className="events-container" id="bfs">
                  {
                    eventData.length < 2 ?
                    <h2>Recent Event</h2>:
                    <h2>Recent Events</h2>
                  }
                <div className="cevents-list">
                {
                    eventData.map((event, i) => (
                      <div className="cevent">
                        <h3 className="cevent-name">{event.name}</h3>
                        <div 
                          dangerouslySetInnerHTML={{__html: event.description}}
                          className="cevent description"
                          />
                        <Slider {...settings}>
                          {
                            event.images.map((image) => {
                              return(
                                <div right>
                                <div className="cevent-image-container">
                                <img className="cevent-image" src={image.image} alt={image.description}/>
                                <p className="cevent-image-caption">{image.description}</p>
                                </div>
                                </div>
                              )
                            })
                          }
                        </Slider>
                      </div>
                    ))
                }
                </div>
                </section>
              }
      </div>
    );
};

export default CEvents;



