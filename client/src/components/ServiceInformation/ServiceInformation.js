import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Close } from '../../assets/close.svg'
import { ReactComponent as Add } from '../../assets/add.svg'

import './ServiceInformation.css'
import { constructTimingsObject } from '../../utils/constructTimingsObject'

const ServiceInfo = ({ selectedMarkerData }) => {
  const [timings, setTimings] = React.useState(
    constructTimingsObject(selectedMarkerData)
  )

  return (
    <>
      <section className="navbar">
        <Link to="/map">
          <button className="close-button">
            <Close />
          </button>
        </Link>
        <Link to="/add-service">
          <button className="add-button">
            <Add />
          </button>
        </Link>
      </section>
      <fieldset className="service-info">
        <legend>{selectedMarkerData.fields.Name}</legend>
        <a href={'tel:' + selectedMarkerData.fields.Phone}>
          {selectedMarkerData.fields.Phone}
        </a>
        <br />
        <a href={'mailto:' + selectedMarkerData.fields.Email}>
          {selectedMarkerData.fields.Email}
        </a>
        <br />
        <a href={selectedMarkerData.fields.Website} target="_blank">
          {selectedMarkerData.fields.Website}
        </a>
        <p>{selectedMarkerData.fields.Description}</p>
        <p>{selectedMarkerData.fields.Address}</p>
        <p>
          {selectedMarkerData.fields.Accessible && 'Wheelchair accessible: Yes'}
        </p>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Opening</th>
              <th>Closing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>{timings.Mon.opening}</td>
              <td>{timings.Mon.closing}</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>{timings.Tue.opening}</td>
              <td>{timings.Tue.closing}</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>{timings.Wed.opening}</td>
              <td>{timings.Wed.closing}</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>{timings.Thu.opening}</td>
              <td>{timings.Thu.closing}</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>{timings.Fri.opening}</td>
              <td>{timings.Fri.closing}</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>{timings.Sat.opening}</td>
              <td>{timings.Sat.closing}</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>{timings.Sun.opening}</td>
              <td>{timings.Sun.closing}</td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      <Link to="/suggest-change">
        <button className="edit-button">Suggest edit</button>
      </Link>
    </>
  )
}

export default ServiceInfo
