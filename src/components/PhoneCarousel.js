
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import phones from '../data/phones'; // Your array of 3 phone objects

const PhoneCarousel = () => (
  <Carousel
    autoPlay
    interval={5000}
    infiniteLoop
    showThumbs={false}
    showStatus={false}
    showIndicators={true}
    swipeable
    emulateTouch
    stopOnHover
  >
    {phones.map(phone => (
      <div key={phone.id} style={{ padding: '2rem 0' }}>
        <img src={phone.image} alt={phone.name} style={{ maxHeight: 350, objectFit: 'contain' }} />
        <h2 style={{ margin: '1rem 0 0.5rem 0', color: '#4bcffa' }}>{phone.name}</h2>
        <p style={{ color: '#fff', fontSize: '1.1rem' }}>{phone.description}</p>
        <p style={{ color: '#ffe066', fontWeight: 'bold', fontSize: '1.2rem' }}>${phone.price}</p>
        <button className="buy-btn">BUY NOW</button>
      </div>
    ))}
  </Carousel>
);

export default PhoneCarousel;
