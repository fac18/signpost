import React from 'react';

import { ReactComponent as Advice } from './icons/Advice.svg';
import { ReactComponent as Animals } from './icons/Animals.svg';
import { ReactComponent as Children } from './icons/Children.svg';
import { ReactComponent as Food } from './icons/Food.svg';
import { ReactComponent as Laundry } from './icons/Laundry.svg';
import { ReactComponent as Learning } from './icons/Learning.svg';
import { ReactComponent as Map } from './icons/Map.svg';
import { ReactComponent as Medical } from './icons/Medical.svg';
import { ReactComponent as Shelter } from './icons/Shelter.svg';
import { ReactComponent as Shower } from './icons/Shower.svg';
import { ReactComponent as Wellbeing } from './icons/Wellbeing.svg';
import { ReactComponent as Women } from './icons/Women.svg';

import './IconsPage.css';


function populateMap = () => {

}

const Icons = props => {
  return (
    <section className='icon-panel'>
      <button type="submit" value="Advice" > <Advice /> </button>
      <button type="submit" onclick="populateMap({value})" value="Advice" > <Advice /> </button>
      <Animals />
      <Children />
      <Food />
      <Laundry />
      <Learning />
      <Map />
      <Medical />
      <Shelter />
      <Shower />
      <Wellbeing />
      <Women />
    </section>
  );
};
export default Icons;
