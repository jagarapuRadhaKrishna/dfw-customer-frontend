'use client';

import Head from 'next/head';
import HeroCarousel from './sections/AtmosHeroCarousel';
import CategoriesGrid from './sections/AtmosCategoriesGrid';
import RoomsSection from './sections/AtmosRoomsSection';
import ProcessSection from './sections/AtmosProcessSection';
import TestimonialsSection from './sections/AtmosTestimonialsSection';
import BenefitsSection from './sections/AtmosBenefitsSection';
import styles from './Atmos.module.css';

export default function AtmosPage() {
  return (
    <>
      <Head>
        <title>Atmos Collection - Premium Furniture at DIVYA FURNITURE WORLD</title>
        <meta 
          name="description" 
          content="Explore the Atmos Collection - a curated selection of premium furniture for living rooms, bedrooms, and dining areas. Shop contemporary designs that blend style and comfort."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>

      <main className={styles.atmosContainer}>
        {/* Hero Carousel Section */}
        <section className={styles.heroSection}>
          <HeroCarousel />
        </section>

        {/* Categories Grid Section */}
        <section className={styles.categoriesSection}>
          <CategoriesGrid />
        </section>

        {/* Rooms Section */}
        <section className={styles.roomsSection}>
          <RoomsSection />
        </section>

        {/* Process Section */}
        <section className={styles.processSection}>
          <ProcessSection />
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <TestimonialsSection />
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <BenefitsSection />
        </section>
      </main>
    </>
  );
}
