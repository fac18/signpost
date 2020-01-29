import React from 'react'
import './BufferPage.css'

const BufferPage = () => {
  return (
    <div className="buffer">
      <div className="images">
        {/* <img
          src={require(`./icons/magnifying-glass.svg`)}
          alt={'magnifying glass icon'}
          className="magnifying-glass"
        ></img> */}
        <img
          src={require(`./icons/food-water-button.svg`)}
          alt={'food icon'}
          className="food slide slide1"
        ></img>
        <img
          src={require(`./icons/shelter-button.svg`)}
          alt={'shelter icon'}
          className="shelter slide slide2"
        ></img>
        <img
          src={require(`./icons/shower-button.svg`)}
          alt={'shower icon'}
          className="shower slide slide3"
        ></img>
        <img
          src={require(`./icons/learning-button.svg`)}
          alt={'learning icon'}
          className="learning slide slide4"
        ></img>
      </div>
      <p>Finding community contributions...</p>
    </div>
  )
}

export default BufferPage
