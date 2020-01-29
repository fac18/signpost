import React from 'react'
import './BufferPage.css'

// function chargebattery() {
//   let a
//   a = document.getElementById('buffer')
//   a.image = ''
//   setTimeout(function() {
//     a.innerHTML = '&#xf243;'
//   }, 1000)
//   setTimeout(function() {
//     a.innerHTML = '&#xf242;'
//   }, 2000)
//   setTimeout(function() {
//     a.innerHTML = '&#xf241;'
//   }, 3000)
//   setTimeout(function() {
//     a.innerHTML = '&#xf240;'
//   }, 4000)
// }
// chargebattery()
// setInterval(chargebattery, 5000)

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
      <p>finding community contributions</p>
    </div>
  )
}

export default BufferPage
