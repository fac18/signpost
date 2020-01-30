import React from 'react'
import { Link } from 'react-router-dom'
import InfoBar from '../InfoBar/InfoBar'
import BufferPage from '../BufferPage/BufferPage'
import PopUp from '../PopUp/PopUp'
import { Close } from '../Buttons/buttons.js'
import { Help } from '../Buttons/buttons.js'
import './Map.css'

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_TOKEN
const GOOGLE_GEOCODE_API_KEY = process.env.REACT_APP_GOOGLE_GEOCODE_TOKEN

const Map = ({
  selectedService,
  selectedServiceData,
  selectedMarker,
  setSelectedMarker,
  selectedMarkerData,
  setSelectedMarkerData,
}) => {
  const [searchLocation, setSearchLocation] = React.useState('')
  const [searchLocationGeocoded, setSearchLocationGeocoded] = React.useState(
    null
  )

  //switch from buffer to map after 2s
  const [showMap, setShowMap] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setShowMap(true), 1500)
  }, [])

  //show pop up after 8s of rendering the map, but don't render it more than once
  const [popUp, setPopUp] = React.useState(false)

  // Function to render the help pop-up only once
  // Can be done with either localStorage or sessionStorage
  // The difference is that while data in localStorage
  // doesn't expire, data in sessionStorage is cleared when the page session ends.
  React.useEffect(() => {
    window.setTimeout(() => {
      // First check, if sessionStorage is supported.
      if (window.sessionStorage) {
        // Get the expiration date of the previous popup.
        let nextPopup = sessionStorage.getItem('#myModal')

        if (nextPopup > new Date()) {
          return
        }

        // Store the expiration date of the current popup in sessionStorage.
        let expires = new Date()
        expires = expires.setHours(expires.getHours() + 24)

        sessionStorage.setItem('#myModal', expires)
      }

      setPopUp(true)
    }, 8000)
  }, [])

  // refs
  const googleMapRef = React.createRef()
  const googleMap = React.useRef(null)
  // helper functions
  const createGoogleMap = () => {
    const map = new window.google.maps.Map(googleMapRef.current, {
      zoom: 13,
      center: {
        lat: 51.5458,
        lng: -0.1043,
      },
    })
    map.addListener('click', () => {
      setSelectedMarker(null)
      setSelectedMarkerData(null)
    })
    createMarkers(map)
    return map
  }
  //function to iterate over the list of services and create a marker for each
  function createMarkers(map) {
    for (var i = 0; i < selectedServiceData.length; i++) {
      const markerImage = {
        url: require(`./pin-icons/${selectedService}.svg`),
        scaledSize: new window.google.maps.Size(48, 48),
      }
      const marker = new window.google.maps.Marker({
        position: {
          lat: Number(selectedServiceData[i].fields.Lat),
          lng: Number(selectedServiceData[i].fields.Lng),
        },
        map: map,
        icon: markerImage,
        animation: window.google.maps.Animation.DROP,
        title: selectedServiceData[i].fields.Name,
      })
      marker.addListener('click', function(e) {
        setSelectedMarker(e.tb.target.parentNode.title)
      })
    }
  }
  React.useEffect(() => {
    if (selectedServiceData && showMap) {
      const googleMapScript = document.createElement('script')
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
      window.document.body.appendChild(googleMapScript)
      googleMapScript.addEventListener('load', () => {
        googleMap.current = createGoogleMap()
      })
    }
  }, [selectedServiceData, showMap])

  React.useEffect(() => {
    if (selectedMarker) {
      const filteredData = selectedServiceData.filter(
        record => record.fields.Name === selectedMarker
      )
      setSelectedMarkerData(filteredData[0])
    }
  }, [selectedMarker])

  //reset selected marker when map mounts
  //(cant unset when dismounts or the service info page won't work)
  React.useEffect(() => {
    setSelectedMarker(null)
    setSelectedMarkerData(null)
  }, [])

  const geocodeSearch = () => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${searchLocation}&key=${GOOGLE_GEOCODE_API_KEY}&region=GB`
    )
      .then(res => res.json())
      .then(result => {
        //idea: add a message to say the search was invalid
        if (result.status != 'ZERO_RESULTS') {
          const lat = result.results[0].geometry.location.lat
          const lng = result.results[0].geometry.location.lng
          setSearchLocationGeocoded(new window.google.maps.LatLng(lat, lng))
        }
      })
  }

  //move map centre to search location
  React.useEffect(() => {
    if (googleMap.current) {
      googleMap.current.setZoom(15)
      googleMap.current.panTo(searchLocationGeocoded)
    }
  }, [searchLocationGeocoded])

  return (
    <>
      {!showMap ? (
        <BufferPage />
      ) : (
        <>
          {popUp ? <PopUp popUp={popUp} setPopUp={setPopUp} /> : null}
          <section className="nav-buttons">
            <Link to="/icons-page">
              <Close />
            </Link>
            <Link to="/help">
              <Help />
            </Link>
          </section>
          <input
            value={searchLocation}
            type="search"
            placeholder="search for a location"
            className="search-bar"
            onChange={event => setSearchLocation(event.target.value)}
          ></input>
          <button className="map-search" onClick={geocodeSearch}>
            submit
          </button>
          <div className="wrapper">
            <div id="google-map" ref={googleMapRef} className="map-area" />
            <div className="over-map">
              {selectedMarkerData ? (
                <Link to="/service">
                  <InfoBar
                    className="map-details"
                    name={selectedMarkerData.fields.Name}
                    description={selectedMarkerData.fields.ShortDescription}
                    address={selectedMarkerData.fields.Address}
                    timings={{
                      Mon: {
                        opening: selectedMarkerData.fields.MondayOpening,
                        closing: selectedMarkerData.fields.MondayClosing,
                      },
                      Tue: {
                        opening: selectedMarkerData.fields.TuesdayOpening,
                        closing: selectedMarkerData.fields.TuesdayClosing,
                      },
                      Wed: {
                        opening: selectedMarkerData.fields.WednesdayOpening,
                        closing: selectedMarkerData.fields.WednesdayClosing,
                      },
                      Thu: {
                        opening: selectedMarkerData.fields.ThursdayOpening,
                        closing: selectedMarkerData.fields.ThursdayClosing,
                      },
                      Fri: {
                        opening: selectedMarkerData.fields.FridayOpening,
                        closing: selectedMarkerData.fields.FridayClosing,
                      },
                      Sat: {
                        opening: selectedMarkerData.fields.SaturdayOpening,
                        closing: selectedMarkerData.fields.SaturdayClosing,
                      },
                      Sun: {
                        opening: selectedMarkerData.fields.SundayOpening,
                        closing: selectedMarkerData.fields.SundayClosing,
                      },
                    }}
                  />
                </Link>
              ) : null}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Map
