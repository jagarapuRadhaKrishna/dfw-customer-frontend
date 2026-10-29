'use client';

import Link from 'next/link';
import styles from './CategoriesGrid.module.css';

const categories = [
  {
    id: 1,
    name: 'Living Room',
    description: 'Sofas, chairs, and coffee tables',
    image: '/images/atmos/categories/living-room.jpg',
    link: '/collection/atmos-living-room-collection',
  },
  {
    id: 2,
    name: 'Bedroom',
    description: 'Beds, nightstands, and essentials',
    image: '/images/atmos/categories/bedroom.jpg',
    link: '/collection/atmos-bedroom-collection',
  },
  {
    id: 3,
    name: 'Dining Room',
    description: 'Dining tables and chairs',
    image: '/images/atmos/categories/dining-room.jpg',
    link: '/collection/atmos-dining-room-collection',
  },
  {
    id: 4,
    name: 'Study & Work',
    description: 'Desks and ergonomic seating',
    image: '/images/atmos/categories/study.jpg',
    link: '/collection/study-tables',
  },
  {
    id: 5,
    name: 'Storage & Organization',
    description: 'Bookshelves and storage solutions',
    image: '/images/atmos/categories/storage.jpg',
    link: '/collection/bookshelves',
  },
  {
    id: 6,
    name: 'All Products',
    description: 'Browse complete Atmos collection',
    image: '/images/atmos/categories/all-products.jpg',
    link: '/collection/atmos',
  },
];

export default function AtmosCategoriesGrid() {
  return (
    <section className={styles.categoriesContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Atmos Collections</h2>
        <p className={styles.subtitle}>Explore premium furniture for every room in your home</p>
      </div>

      <div className={styles.gridContainer}>
        {categories.map((category) => (
          <Link key={category.id} href={category.link} className={styles.categoryCard}>
            <div className={styles.imageWrapper}>
              <img
                src={category.image}
                alt={category.name}
                className={styles.image}
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
              <h3 className={styles.categoryName}>{category.name}</h3>
              <p className={styles.categoryDescription}>{category.description}</p>
              <span className={styles.cta}>Explore →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
