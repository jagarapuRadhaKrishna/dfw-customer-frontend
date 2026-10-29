'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Atmos.module.css';

export default function AtmosCategoryCards({ categories }) {
  const featuredCategories = categories.filter((cat) => cat.featured);

  return (
    <div className={styles.categoriesGrid}>
      {featuredCategories.map((category) => (
        <Link
          key={category.id}
          href={category.href || `/collection/atmos#${category.id}`}
          className={styles.categoryCardLink}
        >
          <div className={styles.categoryCard}>
            <div className={styles.cardImageWrapper}>
              {category.image ? (
                <Image
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={300}
                  className={styles.categoryImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <div className={styles.cardImagePlaceholder}>{category.name}</div>
              )}
            </div>
            <div className={styles.categoryContent}>
              <h3 className={styles.categoryName}>{category.name}</h3>
              <p className={styles.categoryDescription}>{category.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.categoryLink}>Explore →</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
