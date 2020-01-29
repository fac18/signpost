import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import './index.css'
import Map from './components/Map/Map'
import LandingPage from './components/LandingPage/LandingPage'
import IconsPage from './components/IconsPage/IconsPage'
import AboutUs from './components/AboutUs/AboutUs'
import AddNewService from './components/AddNewService/AddNewService'
import SuggestChange from './components/SuggestChange/SuggestChange'
import ThankYou from './components/ThankYou/ThankYou'
import ServiceInfo from './components/ServiceInformation/ServiceInformation'
import Help from './components/HelpPage/HelpPage'
import PopUp from './components/PopUp/PopUp'
import getData from './utils/getData'

function App() {
  //INITIAL STATE WILL BE NULL WHEN AIRTABLE DATA IS COMING THROUGH
  //set when icon is is selected, data populated from airtable
  const [selectedService, setSelectedService] = React.useState(null)
  const [selectedServiceData, setSelectedServiceData] = React.useState(null)

  //set when map marker is clicked, data is filtered from selectedServiceData
  const [selectedMarker, setSelectedMarker] = React.useState(null)
  const [selectedMarkerData, setSelectedMarkerData] = React.useState(null)

  // When the selectedService is changed, trigger the API call to the backend

  React.useEffect(() => {
    getData(selectedService).then(res => {
      setSelectedServiceData(res.records)
      console.log(res)
    })
  }, [selectedService])

  //navigating to /map (without selectedService set) will redirect you to landing
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={AboutUs} />
      <Route
        path="/icons-page"
        render={() => (
          <IconsPage
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        )}
      />
      <Route
        path="/map"
        render={() =>
          selectedService ? (
            <Map
              selectedService={selectedService}
              selectedServiceData={selectedServiceData}
              selectedMarker={selectedMarker}
              setSelectedMarker={setSelectedMarker}
              selectedMarkerData={selectedMarkerData}
              setSelectedMarkerData={setSelectedMarkerData}
            />
          ) : (
            <Redirect to="/icons-page" />
          )
        }
      />
      <Route path="/add-service" component={AddNewService} />
      <Route
        path="/suggest-change"
        render={() => <SuggestChange selectedMarker={selectedMarker} />}
      />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/help" component={Help} />
      <Route
        path="/service"
        render={() => <ServiceInfo selectedMarkerData={selectedMarkerData} />}
      />
    </Router>
  )
}

export { App, getData }
