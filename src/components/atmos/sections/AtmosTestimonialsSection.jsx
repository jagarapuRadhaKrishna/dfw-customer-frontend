'use client';

import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    author: 'Rajesh Kumar',
    city: 'Bangalore',
    rating: 5,
    text: 'The Atmos collection transformed my living room. Premium quality and excellent design. Highly recommended!',
    image: '/images/testimonials/user-1.jpg',
  },
  {
    id: 2,
    author: 'Priya Sharma',
    city: 'Mumbai',
    rating: 5,
    text: 'Best furniture investment I made. The bedroom set is incredibly comfortable and stylish.',
    image: '/images/testimonials/user-2.jpg',
  },
  {
    id: 3,
    author: 'Arun Patel',
    city: 'Delhi',
    rating: 5,
    text: 'Fantastic dining collection! Perfect for family gatherings. Great craftsmanship and durability.',
    image: '/images/testimonials/user-3.jpg',
  },
  {
    id: 4,
    author: 'Sneha Desai',
    city: 'Pune',
    rating: 5,
    text: 'Loved the contemporary design. The study desk has improved my work-from-home setup significantly.',
    image: '/images/testimonials/user-4.jpg',
  },
];

export default function AtmosTestimonialsSection() {
  return (
    <section className={styles.testimonialsContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Customer Reviews</h2>
        <p className={styles.subtitle}>What our customers love about Atmos</p>
      </div>

      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <div className={styles.stars}>
              {'★'.repeat(testimonial.rating)}
            </div>
            <p className={styles.testimonialText}>"{testimonial.text}"</p>
            <div className={styles.authorInfo}>
              <div className={styles.authorDetails}>
                <h4 className={styles.authorName}>{testimonial.author}</h4>
                <p className={styles.authorCity}>{testimonial.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
