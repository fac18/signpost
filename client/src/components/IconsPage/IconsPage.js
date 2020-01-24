import React from 'react';

// import { ReactComponent as Advice } from './icons/Advice.svg';
// import { ReactComponent as Animals } from './icons/Animals.svg';
// import { ReactComponent as Children } from './icons/Children.svg';
// import { ReactComponent as Food } from './icons/Food.svg';
// import { ReactComponent as Clothing } from './icons/Clothing.svg';
// import { ReactComponent as Learning } from './icons/Learning.svg';
// import { ReactComponent as All } from './icons/All.svg';
// import { ReactComponent as Medical } from './icons/Medical.svg';
// import { ReactComponent as Shelter } from './icons/Shelter.svg';
// import { ReactComponent as Shower } from './icons/Shower.svg';
// import { ReactComponent as Wellbeing } from './icons/Wellbeing.svg';
// import { ReactComponent as Women } from './icons/Women.svg';

import './IconsPage.css';
import { Link } from 'react-router-dom';

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
  'All'
];

const Icons = ({ selectedService, setSelectedService }) => {
  React.useEffect(() => {
    console.log(selectedService);
  }, [selectedService]);

  return (
    <section>
      <h1 className='headline'> Which service do you need? </h1>
      <article className='icon-panel'>
        {categories.map(category => (
          <Link to='/map'>
            <a
              className='icon-panel__button'
              value={category}
              onClick={() => setSelectedService(category)}
            >
              <figure>
                <img
                  className='icon-panel__button__image'
                  src={require(`./icons/${category}.svg`)}
                  alt={category}
                />
                <figcaption className='icon-text'>{category}</figcaption>
              </figure>
            </a>
          </Link>
        ))}
      </article>
    </section>
  );
};

export default Icons;
