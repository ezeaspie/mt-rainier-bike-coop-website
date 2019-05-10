import React , { useState }from "react"
import Header from "./components/header";
import Bike from './components/bike';
import Volunteers from './components/Volunteers';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Contact from './components/contact';
import Footer from "./components/footer";

const IndexPage = (props) => {

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
  return(
    <BrowserRouter>
      <main>
      <Header />
        <Route
        exact={true}
        path="/"
        render={props => <HomePage {...props} serviceData={serviceData} />} />
        <Route path="/bikes/:bikeId" component={Bike} />
        <Route path="/volunteers" component={Volunteers} /> 
      </main>
      <Contact />
      <Footer />
    </BrowserRouter>
    
  );
}

export default IndexPage