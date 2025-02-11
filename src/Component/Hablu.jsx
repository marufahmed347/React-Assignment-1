import React from 'react'
import Hero from './Hero';
import Icon from './Icon';
import Card from './Card';
import Email from './Email';
import Slider from './Slider';
import Improvement from './Improvement';
import Footer from './Footer';

function Hablu() {
  return (
    <>
    <div className='max-w-[1440px] mx-auto'>
    <Hero/>
    <Icon/>
    <Card/>
    <Email/>
    <Slider/>
    <Improvement/>
    <Footer/>
    </div>
    </>
  )
}

export default Hablu;