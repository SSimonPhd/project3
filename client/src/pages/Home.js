import React from 'react';
import './styles/home.scss';
import Carousel from 'react-bootstrap/Carousel';

function Home () {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 c-item"
          src={process.env.PUBLIC_URL + "/images/community.jpeg"}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="caption">
            <h1>Solo Traveler</h1>
            <p>Explore the beautiful places and meet likeminded people</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-item"
          src={process.env.PUBLIC_URL + "/images/tourist.jpeg"}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="caption">
          <h1>Travel and learn </h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-item"
          src={process.env.PUBLIC_URL + "/images/northernlights.jpeg"}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="caption">
          <h1>Adventure Travel</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home;


