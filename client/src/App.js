import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Map from './components/Map/Map';
import LandingPage from './components/LandingPage/LandingPage';
import IconsPage from './components/IconsPage/IconsPage';
import AboutUs from './components/AboutUs/AboutUs';
import AddNewService from './components/AddNewService/AddNewService';
import SuggestChange from './components/SuggestChange/SuggestChange';
import ThankYou from './components/ThankYou/ThankYou';
import ServiceInfo from './components/ServiceInformation/ServiceInformation';
import Help from './components/HelpPage/HelpPage';

function App() {
  //INITIAL STATE WILL BE NULL WHEN AIRTABLE DATA IS COMING THROUGH
  //set when icon is is selected, data populated from airtable
  const [selectedService, setSelectedService] = React.useState('Wellbeing');
  const [selectedServiceData, setSelectedServiceData] = React.useState([
    {
      Name: 'The Margins Project',
      Lat: '51.5449449',
      Lng: '-0.1049151',
      description: 'Enter description here',
      address: '123 here',
      timings: '12:00'
    },
    {
      Name: 'Other Project',
      Lat: '51.555667',
      Lng: '-0.0991213',
      description: 'szfasf',
      address: 'asdgasdg',
      timings: '12'
    },
    {
      Name: 'And Another Project',
      Lat: '51.543596',
      Lng: '-0.091032',
      description: 'asdgdsg',
      address: '146',
      timings: 'sdgasd'
    }
  ]);

  // When the selectedService is changed, trigger the API call to the backend

  const getData = async () => {
    await fetch(`/api/airtable?q=${selectedService}`)
      .then(res => res.json())
      .then(info => setSelectedServiceData(info.records));
  };

  React.useEffect(() => {
    getData();
  }, [selectedService]);

  React.useEffect(() => {
    console.log(selectedService);
  }, [selectedService]);

  //set when map marker is clicked, data is filtered from selectedServiceData
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  const [selectedMarkerData, setSelectedMarkerData] = React.useState(null);

  return (
    <Router>
      <Route exact path='/' component={LandingPage} />
      <Route path='/about' component={AboutUs} />
      <Route
        path='/iconspage'
        render={() => (
          <IconsPage
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        )}
      />
      <Route
        path='/map'
        render={() => (
          <Map
            selectedService={selectedService}
            selectedServiceData={selectedServiceData}
            selectedMarker={selectedMarker}
            setSelectedMarker={setSelectedMarker}
            selectedMarkerData={selectedMarkerData}
            setSelectedMarkerData={setSelectedMarkerData}
          />
        )}
      />
      <Route path='/add-service' component={AddNewService} />
      <Route
        path='/suggest-change'
        render={() => <SuggestChange selectedMarker={selectedMarker} />}
      />
      <Route path='/thank-you' component={ThankYou} />
      <Route path='/help' component={Help} />
      <Route
        path='/service'
        render={() => <ServiceInfo selectedMarkerData={selectedMarkerData} />}
      />
    </Router>
  );
}

export default App;
