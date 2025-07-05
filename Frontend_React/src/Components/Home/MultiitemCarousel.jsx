import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeal } from './topMeal';
import CarouselItem from './Carouselitem';


const MultiitemCarousel = () => {
    const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed:1900
};

  return (
    <div>
      <Slider {...settings}>
        {topMeal.map((item) => (
            <CarouselItem image={item.image} title={item.title} />
            ))}
            </Slider>

    </div>
  )
}

export default MultiitemCarousel
