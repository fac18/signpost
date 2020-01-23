import React from 'react';

// import { ReactComponent as Advice } from './icons/Advice.svg';
// import { ReactComponent as Animals } from './icons/Animals.svg';
// import { ReactComponent as Children } from './icons/Children.svg';
// import { ReactComponent as Food } from './icons/Food.svg';
// import { ReactComponent as Laundry } from './icons/Laundry.svg';
// import { ReactComponent as Learning } from './icons/Learning.svg';
// import { ReactComponent as Map } from './icons/Map.svg';
// import { ReactComponent as Medical } from './icons/Medical.svg';
// import { ReactComponent as Shelter } from './icons/Shelter.svg';
// import { ReactComponent as Shower } from './icons/Shower.svg';
// import { ReactComponent as Wellbeing } from './icons/Wellbeing.svg';
// import { ReactComponent as Women } from './icons/Women.svg';

import './IconsPage.css';

const categories = [
  'Shelter',
  'Shower',
  'Medical',
  'Food',
  'Learning',
  'Women',
  'Wellbeing',
  'Advice',
  'Children',
  'Animals',
  'Laundry',
  'Map'
];

const Icons = props => {
  const [chosenCategory, setCategory] = React.useState(null);

  React.useEffect(() => {
    console.log(chosenCategory);
  }, [chosenCategory]);

  return (
    <section className='icon-panel'>
      {categories.map(category => (
        <a
          className='icon-panel__button'
          value={category}
          onClick={() => setCategory({ category })}
        >
          <img
            className='icon-panel__button__image'
            src={require(`./icons/${category}.svg`)}
            alt={category}
          />
        </a>
      ))}
    </section>
  );
};

export default Icons;
