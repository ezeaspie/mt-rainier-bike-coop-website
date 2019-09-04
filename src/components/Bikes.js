import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Bikes = () => {

  let requestURL = `https://mt-rainier-bike-coop-backend.herokuapp.com/` // In development? Use : http://localhost:8000/`;
    const getCalenderData = () => {
      fetch(requestURL, {
        mode:"cors",
      })
      .then(res => res.json())
      .then(res =>{
        setBikeData(res[1]);
        setCalledServer(true);
      });
    }
    
    let [calledServer, setCalledServer] = useState(false);
    let [bikeData, setBikeData] = useState([]);
    if(!calledServer){
      setTimeout(getCalenderData,50);
    }
    return (
      <div className="bikes">
              {
                bikeData.length === 0? null
                :
                <section className="bikes-for-sale" id="bfs">
                <h2>Bikes for Sale</h2>
                <div className="bike-image-list">
                {
                    bikeData.map((bike, i) => (
                    <Link key={bike.name + i} className="bike-image-link" to={{pathname: `/bikes/${i}`, bikeData: bike}}>
                    <h3 className="bike-name">{bike.name}</h3>
                    <img src={bike.image.url} alt={bike.image.alt} />
                    </Link>
                    ))
                }
                </div>
                </section>
              }
      </div>
    );
};

export default Bikes;



