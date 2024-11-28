import React from 'react';
import Hero from '../components/Hero';
import Product from '../components/Product';
import Services from '../components/Services';
import ImageGallery from '../components/ImageGallery';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Product />
      <Services />
      <ImageGallery />
      <Testimonials />
      <Stats />
    </>
  );
};

export default HomePage;