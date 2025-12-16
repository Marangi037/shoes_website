import React from 'react';
import { Body } from './Testimonials/Body.jsx';
import { testimonials } from './assets/images.js';


export const Testimonials = () => {
  return (
    <section className='testimonials'>
        <h1 className='testimonialsHeader'>Testimonials</h1>
        <Body/>
    </section>
  )
}
