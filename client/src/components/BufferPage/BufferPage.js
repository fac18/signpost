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
    <>
      <img
        src={require(`./icons/magnifying-glass.svg`)}
        alt={'magnifying glass icon'}
        className="magnifying-glass"
      ></img>
      <img
        src={require(`./icons/food-water-button.svg`)}
        alt={'food icon'}
        className="food"
      ></img>
      <img
        src={require(`./icons/shelter-button.svg`)}
        alt={'shelter icon'}
        id="shelter"
      ></img>
      <img
        src={require(`./icons/shower-button.svg`)}
        alt={'shower icon'}
        id="shower"
      ></img>
      <img
        src={require(`./icons/learning-button.svg`)}
        alt={'learning icon'}
        id="learning"
      ></img>
      <p>finding community contributions</p>
    </>
  )
}

export default BufferPage
