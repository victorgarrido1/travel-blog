import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MobilePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h1 className="text-center text-2xl font-bold mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Bora Bora Mobile App
      </h1>
      <p className="text-center mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Experience the ultimate convenience with the Bora Bora mobile app. 
        Manage your bookings, explore destinations, and much more.
      </p>
      <div className="mx-auto max-w-md">
        <Slider {...settings}>
          <div>
            <img src="image1.jpg" alt="Feature 1" className="w-full h-auto" />
          </div>
          <div>
            <img src="image2.jpg" alt="Feature 2" className="w-full h-auto" />
          </div>
          <div>
            <img src="image3.jpg" alt="Feature 3" className="w-full h-auto" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MobilePage;
