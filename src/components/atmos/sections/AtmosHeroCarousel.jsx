'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroCarousel.module.css';

const carouselSlides = [
  {
    id: 1,
    title: 'Atmos Collection',
    subtitle: 'Premium Furniture Curated for Every Room',
    description: 'Transform your living spaces with contemporary designs',
    ctaText: 'Explore Now',
    image: '/images/atmos/categories/living-room.jpg',
    imageAlt: 'Atmos Living Room Collection',
    backgroundColor: 'linear-gradient(135deg, #f07c41 0%, #ec7744 100%)',
  },
  {
    id: 2,
    title: 'Living Room',
    subtitle: 'Comfort Meets Style',
    description: 'Curated sofas, chairs, and coffee tables',
    ctaText: 'Shop Living Room',
    image: '/images/atmos/categories/living-room.jpg',
    imageAlt: 'Atmos Living Room Furniture',
    backgroundColor: 'linear-gradient(135deg, #f07c41 0%, #ec7744 100%)',
  },
  {
    id: 3,
    title: 'Bedroom',
    subtitle: 'Your Perfect Sanctuary',
    description: 'Beds, nightstands, and bedroom essentials',
    ctaText: 'Shop Bedroom',
    image: '/images/atmos/categories/bedroom.jpg',
    imageAlt: 'Atmos Bedroom Collection',
    backgroundColor: 'linear-gradient(135deg, #f07c41 0%, #ec7744 100%)',
  },
  {
    id: 4,
    title: 'Dining Room',
    subtitle: 'Gather & Celebrate',
    description: 'Premium dining tables and chairs',
    ctaText: 'Shop Dining',
    image: '/images/atmos/categories/dining-room.jpg',
    imageAlt: 'Atmos Dining Collection',
    backgroundColor: 'linear-gradient(135deg, #f07c41 0%, #ec7744 100%)',
  },
];

export default function AtmosHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setAutoPlay(false);
  };

  const slide = carouselSlides[currentSlide];

  return (
    <div className={styles.heroCarousel}>
      {/* Carousel Container */}
      <div className={styles.carouselWrapper}>
        {/* Slide Image */}
        <div
          className={styles.slideContent}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          {/* Overlay with gradient */}
          <div className={styles.slideOverlay}></div>

          {/* Text Content */}
          <div className={styles.textContent}>
            <h1 className={styles.mainTitle}>{slide.title}</h1>
            <h2 className={styles.subtitle}>{slide.subtitle}</h2>
            <p className={styles.description}>{slide.description}</p>
            <button className={styles.ctaButton}>{slide.ctaText}</button>
          </div>
        </div>

        {/* Carousel Info Box */}
        <div className={styles.infoBox}>
          <div className={styles.infoContent}>
            <h3 className={styles.infoTitle}>Special Collection</h3>
            <p className={styles.infoPrice}>Premium Quality</p>
            <p className={styles.infoSubtext}>Curated furniture for your home</p>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.emailInput}
            />
            <button className={styles.getOfferButton}>Get Updates</button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className={styles.paginationDots}>
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className={styles.navButton}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          className={styles.navButton}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
