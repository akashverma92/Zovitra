import React from 'react';
import './Home.css';
import { FaUserCircle } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import sliderBg from '../assets/images/Slider-bg.jpg'; // Correct image import

const Home = () => {
  return (
    <div className="home-container">
      {/* Motto Slider with One Image */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="home-slider"
      >
        <SwiperSlide>
          <img
            src={sliderBg}  // Using imported image directly
            alt="Slide 1"
            className="slider-image"
          />
        </SwiperSlide>
      </Swiper>

      {/* Text Section */}
      <div className="slider-overlay">
        <h1 className="slider-title">Explore the Unseen Wonders of India</h1>
        <button className="explore-btn">Start Your Journey</button>
      </div>

      {/* Destinations Gallery */}
      <section className="destinations" id="destinations">
        <h2 className="section-title">Popular Destinations</h2>
        <div className="cards-container">
          <div className="destination-card">
            <img src={sliderBg} alt="Goa" />
            <div className="card-content">
              <h3>Goa</h3>
              <p>Beaches, nightlife, and adventure.</p>
            </div>
          </div>
          <div className="destination-card">
            <img src={sliderBg} alt="Kerala" />
            <div className="card-content">
              <h3>Kerala</h3>
              <p>Backwaters, wildlife, and scenic beauty.</p>
            </div>
          </div>
          <div className="destination-card">
            <img src={sliderBg} alt="Rajasthan" />
            <div className="card-content">
              <h3>Rajasthan</h3>
              <p>Deserts, forts, and royal heritage.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
