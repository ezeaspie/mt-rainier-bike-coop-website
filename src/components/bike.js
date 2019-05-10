import React , { useState } from 'react';

const Bike = (props) => {
    let id = Number(props.match.params.bikeId);

    let requestURL = `https://mt-rainier-bike-coop-backend.herokuapp.com/getBikeData`;
    const getBikeData = () => {
      fetch(requestURL, {
        mode:"cors",
      })
      .then(res => res.json())
      .then(res =>{
        if(res.length !== 0){
            setBike(res[id]);
        }
        else{
            setBike({name:"Bike Not Found",price:0, image:{url:"#",alt:"not found"},description:"The Bike you requested was not found. Please make sure you have the correct URL."})
        }
        setCalledServer(true);
      });
    }

    let [calledServer, setCalledServer] = useState(false);
    let initalValue = {name:"Looking for Bike...",price:0,image:{url:'#',alt:"loading"},description:"Please wait while we find the bike..."};
    if(props.location.bikeData !== undefined){
        initalValue = props.location.bikeData;
    }
    let [bike, setBike] = useState(initalValue);
    if (bike.image.url === '#' && !calledServer) {
        setTimeout(getBikeData,50);
    }

    return (
        <div className="bike-for-sale">
            <div className="bike-main-info">
                <h3 className="name">{bike.name}</h3>
                <h3 className="price">$ {bike.price}</h3>
            </div>
            <div className="bike-description">
                <img src={bike.image.url} alt={bike.image.alt} />
                <p className="description">{bike.description}</p>
            </div>
        </div>
    );
}

export default Bike;