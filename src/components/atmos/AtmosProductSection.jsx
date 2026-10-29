'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Atmos.module.css';

function getInternalProductHref(product) {
  if (product.href) return product.href;
  const match = typeof product.url === 'string' && product.url.match(/\/product\/([^/?#]+)/);
  return match ? `/product/${match[1]}` : '/collection/atmos';
}

export default function AtmosProductSection({ category, products }) {
  return (
    <section className={styles.productSection} id={category.id}>
      <div className={styles.sectionContainer}>
        <div className={styles.productSectionHeader}>
          <div>
            <h2 className={styles.productSectionTitle}>{category.name}</h2>
            <p className={styles.productDescription}>{category.description}</p>
          </div>
          <span className={styles.productCount}>{products.length} items</span>
        </div>

        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <Link
              key={`${category.id}-${index}`}
              href={getInternalProductHref(product)}
              className={styles.productCardLink}
            >
              <div className={styles.productCard}>
                <div className={styles.productImageWrapper}>
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={280}
                      height={280}
                      className={styles.productImage}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className={styles.productImagePlaceholder}>{product.name}</div>
                  )}
                </div>
                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDescription}>{category.name}</p>
                  <div className={styles.productFooter}>
                    <span className={styles.productViewMore}>View Details →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.sectionCta}>
          <Link href={category.href || `/collection/atmos#${category.id}`} className={styles.ctaButton}>
            View All {category.name} Items
          </Link>
        </div>
      </div>
    </section>
  );
}
