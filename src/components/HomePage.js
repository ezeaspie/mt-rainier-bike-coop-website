import React , { useState } from 'react';
import ServiceItem from './serviceItem';
import Carousel from "./carousel";
import { Link } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';


const HomePage = (props) => {
    let requestURL = `https://mt-rainier-bike-coop-backend.herokuapp.com/` // In development? Use : http://localhost:8000/`;
    const getCalenderData = () => {
      fetch(requestURL, {
        mode:"cors",
      })
      .then(res => res.json())
      .then(res =>{
        if(res[0].length !== 0){
          setCalenderData(res[0]);
        }
        if(res[2].length !== 0){
            setServicesData(res[2]);
        }
        setCalledServer(true);
      });
    }

    const serviceData = [
        {
          name:"Bike Repair",
          description: "Access bike repair tools, patches, pumps, and get repair assistance for free",
          image: "url('./images/bikerepair.jpg')",
        },
        {
          name:"Used Bikes and Bike Parts",
          description: "Used parts and bikes available for monetary or labor donation",
          image: "url(./images/bikeparts.jpg)",
        },
        {
          name: "Community Outreach",
          description: "Working to give back to the community via workshops and public events",
          image:"url(./images/communityoutreach.jpg)",
        }
      ]

    let [calenderData, setCalenderData] = useState([{link:'#',start:{timeHourStart:"Sorry!", timeMonthDay:"N/A"},name:"No Events Planned"}]);
    let [servicesData, setServicesData] = useState(serviceData);
    
    let [calledServer, setCalledServer] = useState(false);
    if(!calledServer){
      setTimeout(getCalenderData,50);
    }

    return(
        <div>
            <section className="banner">
                    <Carousel />
                    <h2 className="mission content-container">
                    MRBC aims to enable and encourage people to own, maintain, and ride bicycles safely. We reclaim, refurbish, and redistribute used bicycles that would otherwise be heading for the landfill. 
                    </h2>
                    <img className="track" src="./images/tireTrack.png" alt="tireTrack"/>
                </section>
                <section className="about" id="vu">
                    <div className="about-title-card">
                    <img className="visit-us" src="./images/visitUs.png" alt="VISIT-US!" />
                    <img className="about-title-card-image" src="./images/mtRainer.jpg" alt="aerial view of Mt Rainer" />
                    <a href="https://www.google.com/maps/place/Mount+Rainier+Bike+Co-op/@38.9387985,-76.9605424,17z/data=!4m13!1m7!3m6!1s0x89b7c70cabaee009:0x6686ba9d853ad5cb!2s3601+Bunker+Hill+Rd,+Mt+Rainier,+MD+20712!3b1!8m2!3d38.9387985!4d-76.9583537!3m4!1s0x89b7c70cba911ec9:0xb5ed8b3dc9b8f31a!8m2!3d38.9388006!4d-76.958357" target="_blank" rel="noopener noreferrer">3601 Bunker Hill Rd, Mt Rainier MD 20712</a>
                    </div>
                    <div className="about-description">
                    <p>Located in Mount Rainier in Maryland, we are easily accessible for residents of Maryland and the District of Columbia</p>
                    <div className="about-description-times">
                        <img className="weAreOpen" src="./images/weAreOpen.png" alt="We Are Open" />
                        <div className="hours-section">
                        <div className="open-times">
                            <div className="businessHours">
                            <span className="days">Thursdays</span><span className="hours">2pm-5pm</span>
                            </div>
                            <div className="businessHours">
                            <span className="days">Sundays</span><span className="hours">1pm-4pm</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </section>
                <section className="events-section" id="ue">
                    <div className="events-title-card">
                    <div className="events-title-card-image-container">
                    <img src='./images/bike png.png' alt="Bike" />
                    </div>
                    
                    <h2>Upcoming Events</h2>
                    </div>
                    <ul className="event-list">
                    {
                        calenderData.map((event)=>{
                          console.log(event);
                        return(
                            <li className="event" key={event.start.timeDay + event.start.timeHour}>
                            <a href={event.link} target="_blank" rel="noopener noreferrer">
                            <div className="event-date-time">
                                <h3 className="event-date-month">{event.start.timeMonth}</h3>
                                <h3 className="event-date-day">{event.start.timeDay}</h3>
                                <h3 className="event-date-hour">{event.start.timeHour}</h3>
                            </div>
                            <h3 className="event-name">{event.name}</h3>
                            <p className="event-desc" dangerouslySetInnerHTML={{__html:event.description}}/>
                            </a>
                            </li>
                        )
                        })
                    }
                    </ul>
                </section>
                <section className="services">
                    <h2>Services We Offer</h2>
                    {
                    servicesData.map((service)=> <ServiceItem key={service.name} serviceData={service}/>)
                    }
                </section>
                <ul className="bottom navigation-links">
                  <li><NavLink to="/bikes">Bikes for Sale</NavLink></li>
                  <li><NavLink to="/#ue">Upcoming Events</NavLink></li>
                  <li><NavLink to="/#c">Contact Us</NavLink></li>
                  <li><Link to="/volunteers">Meet Our Core Volunteers</Link></li>
                </ul>
        </div>
        
    );
}

export default HomePage;