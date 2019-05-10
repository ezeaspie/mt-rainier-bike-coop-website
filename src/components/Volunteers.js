import React from 'react';

const volunteerData = [
    {
        name: 'John',
        role: 'Lead Organizer',
        description:'John was born in 2000 and has lived in Maryland since he was a child. He always loved to ride his bike and one day decided to make it his goal to help others with their bikes.',
        image:'./images/logo.png',
    }
];

const Volunteers = () => {
    return (
      <ul className="volunteers">
      {
          volunteerData.map((volunteer) => {
            return (
            <li className="volunteer">
                <img alt="volunteer" className="volunteer-image" src={volunteer.image}></img>
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