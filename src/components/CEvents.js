import React, { useState } from 'react';
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
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
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
                      <div className="cevent" key={i}>
                        <h3 className="cevent-name">{event.name}</h3>
                        <div 
                          dangerouslySetInnerHTML={{__html: event.description}}
                          className="cevent description"
                          />
                        <Slider {...settings}>
                          {
                            event.images.map((image) => {
                              return(
                                <div key={image.image}>
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



