import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Close } from '../../assets/close.svg'
import './PopUp.css'

const PopUp = ({ showPopUp, setShowPopUp }) => {
  const hideModal = () => {
    setShowPopUp(prev => !prev)
  }

  return (
    <div className="modal" id="myModal">
      <button className="close-button">
        <Close onClick={hideModal} />
      </button>
      <div className="modal-content">
        <h2>Not sure what to do?</h2>
        <p>Click the question mark to learn how to use the map.</p>
      </div>
    </div>
  )
}

export default PopUp
