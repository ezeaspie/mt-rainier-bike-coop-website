import React, { useState } from 'react';

const volunteerDataTest = [
    {
        name: 'John',
        role: 'Lead Organizer',
        description:'John was born in 2000 and has lived in Maryland since he was a child. He always loved to ride his bike and one day decided to make it his goal to help others with their bikes.',
        image:'./images/logo.png',
    }
];

const Volunteers = () => {

    let requestURL = `https://mt-rainier-bike-coop-backend.herokuapp.com/getVolunteerData` // In development? Use : http://localhost:8000/`;
    const getVolunteerData = () => {
      fetch(requestURL, {
        mode:"cors",
      })
      .then(res => res.json())
      .then(res =>{
        setVolunteerData(res);
        setCalledServer(true);
      });
    }

    const [volunteerData, setVolunteerData] = useState(volunteerDataTest);
    let [calledServer, setCalledServer] = useState(false);
    if(!calledServer){
      setTimeout(getVolunteerData,50);
    }
    return (
      <ul className="volunteers">
      {
          volunteerData.map((volunteer) => {
            return (
            <li className="volunteer">
                <img alt={volunteer.image.alt} className="volunteer-image" src={volunteer.image.url}></img>
                <div className="volunteer-info">
                    <h2 className="volunteer-name">{volunteer.name}</h2>
                    <p className="volunteer-description">{volunteer.description}</p>
                </div>
            </li>
            );
        })
      }
      </ul>  
    );
};

export default Volunteers;