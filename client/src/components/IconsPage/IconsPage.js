import React from 'react'
import { Add } from '../Buttons/buttons.js'
import { Back } from '../Buttons/buttons.js'
import { Link } from 'react-router-dom'

import './IconsPage.css'

const categories = [
  'Shelter',
  'Shower',
  'Medical',
  'Food',
  'Clothing',
  'Learning',
  'Women',
  'Wellbeing',
  'Advice',
  'Children',
  'Animals',
  'All',
]

const Icons = ({ selectedService, setSelectedService }) => {
  return (
    <>
      <Link to="/add-service">
        <Add />
      </Link>
      <Link to="/">
        <Back />
      </Link>
      <section>
        <h1> Which service do you need? </h1>
        <article className="icon-panel">
          {categories.map(category => (
            <Link key={category} to="/map">
              <section
                className="icon-panel__button"
                value={category}
                onClick={() => setSelectedService(category)}
              >
                <figure>
                  <img
                    className="icon-panel__button__image"
                    src={require(`./icons/${category}.svg`)}
                    alt={category}
                  />
                  <figcaption className="icon-text">{category}</figcaption>
                </figure>
              </section>
            </Link>
          ))}
        </article>
      </section>
    </>
  )
}

export default Icons
