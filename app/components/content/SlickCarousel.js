'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
<div>
  <Slider {...settings}>
    <div className='w-40  p-3'>
      <img className='w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300' src='/happy.jpg' alt='Image 1'/>
    </div>
    <div className='w-40  p-3'>
      <img className='w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300' src='/happy.jpg' alt='Image 2'/>
    </div>
    <div className='w-40  p-3'>
      <img className='w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300' src='/happy.jpg' alt='Image 3'/>
    </div>
    <div className='w-40  p-3'>
      <img className='w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300' src='/happy.jpg' alt='Image 4'/>
    </div>
  </Slider>
</div>

  );
};

export default SlickCarousel;
