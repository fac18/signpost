import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Icons from "./components/IconsPage/IconsPage.js"
import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map/Map";
import LandingPage from "./components/LandingPage/LandingPage";
import IconsPage from "./components/IconsPage/IconsPage";
import AboutUs from "./components/AboutUs/AboutUs";
import AddNewService from "./components/AddNewService/AddNewService";
import SuggestChange from "./components/SuggestChange/SuggestChange";
import ThankYou from "./components/ThankYou/ThankYou";
import Info from "./components/ServiceInformation/ServiceInformation";

function App() {
  return (
    <Router>
      <Route exact path='/' component={LandingPage} />
      <Route path='/about' component={AboutUs} />
      <Route path='/iconspage' component={IconsPage} />
      <Route path='/map' component={Map} />
      <Route path='/addservice' component={AddNewService} />
      <Route path='/suggestchange' component={SuggestChange} />
      <Route path='thankyou' component={ThankYou} />
      <Route path='/info' component={Info} />
    </Router>
  );
}

export default App;
