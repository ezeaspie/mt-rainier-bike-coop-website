import React , { useState }from "react"
import Header from "./components/header";
import Bike from './components/bike';
import Volunteers from './components/Volunteers';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Contact from './components/contact';
import Footer from "./components/footer";

const IndexPage = (props) => {
  return(
    <BrowserRouter>
      <main>
      <Header />
        <Route
        exact={true}
        path="/"
        render={props => <HomePage {...props} />} />
        <Route path="/bikes/:bikeId" component={Bike} />
        <Route path="/volunteers" component={Volunteers} /> 
      </main>
      <Contact />
      <Footer />
    </BrowserRouter>
    
  );
}

export default IndexPage