import React from 'react';
import Carousel from 'nuka-carousel';

const HomeSlider = () => (
  <section class="page-section relative">
  <Carousel>
        <div style={{ backgroundImage: "url(/img/slider1.jpg)", height: '90vh' }}>
          <div class="slider-overlay"></div>
        </div>
        <div style={{ backgroundImage: "url(/img/slider2.jpg)", height: '90vh' }}>
          <div class="slider-overlay"></div>
        </div>
        <div style={{ backgroundImage: "url(/img/slider3.jpg)", height: '90vh' }}>
          <div class="slider-overlay"></div>
        </div>
  </Carousel>

      <div class="btn-wrapper">
          <a href="#/shop" class="btn-theme btn-home">Shop Now</a>
      </div>
  </section>
)

export default HomeSlider;
