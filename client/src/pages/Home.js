import React from 'react';
import './styles/home.scss';
import Carousel from 'react-bootstrap/Carousel';

function Home () {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 c-item"
          src={process.env.PUBLIC_URL + "/images/colorscheme/temple.jpeg"}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="caption">
            <h1>Solo Travel</h1>
            <p>Explore the beautiful places and meet like-minded people.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-item"
          src={process.env.PUBLIC_URL + "/images/colorscheme/ruins.jpeg"}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="caption">
          <h1>Travel and Learn </h1>
          <p>Adventures are the best way to learn.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-item"
          src={process.env.PUBLIC_URL + "/images/colorscheme/indiaarch.jpeg"}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="caption">
          <h1>Follow your dreams.</h1>
          <p>Life is short, and the world is wide.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 c-item"
          src={process.env.PUBLIC_URL + "/images/colorscheme/sahara.jpeg"}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="caption">
          <h1>Get inspired.</h1>
          <p>Go where you feel most alive.</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home;


