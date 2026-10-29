'use client';

import Image from 'next/image';
import styles from './Atmos.module.css';

export default function AtmosBanner({ title, description, image, height = 400 }) {
  return (
    <div className={styles.banner} style={{ height: `${height}px` }}>
      {image && (
        <Image
          src={image}
          alt={title}
          className={styles.bannerImage}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      )}
      <div className={styles.bannerOverlay} />
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerTitle}>{title}</h1>
        {description && (
          <p className={styles.bannerDescription}>{description}</p>
        )}
      </div>
    </div>
  );
}
