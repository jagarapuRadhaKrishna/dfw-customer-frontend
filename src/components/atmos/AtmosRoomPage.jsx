'use client';

import Link from 'next/link';
import ProductCard from '../new-arrivals/ProductCard';
import FilterBar from '../new-arrivals/FilterBar';
import AtmosBanner from './AtmosBanner';
import { getAtmosCategory, getAtmosRoomProducts } from './atmosProductUtils';
import styles from './Atmos.module.css';
import '@/styles/new-arrivals.css';

export default function AtmosRoomPage({ categoryId, title }) {
  const category = getAtmosCategory(categoryId);
  const products = getAtmosRoomProducts(categoryId);
  const heading = title || category?.name || 'Atmos Collection';
  
  // Map products to match ProductCard format
  const formattedProducts = products
    .filter(product => product && product.name && product.image)
    .map(product => ({
      id: product.url || product.name,
      href: product.url || `/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`,
      title: product.name,
      image: product.image,
      badge: 'Atmos',
      salePrice: '₹0',
      mrp: null
    }));

  return (
    <div className={styles.atmosPage}>
      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
        <Link href="/collection/atmos">Atmos</Link>
        <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
        <span aria-current="page">{heading}</span>
      </nav>

      {/* Banner with Image and Text */}
      <AtmosBanner
        title={heading}
        description={category?.description || 'Discover premium furniture for your space'}
        image={category?.image}
        height={400}
      />

      {/* Product Listing Section with Filter */}
      <div className="new-arrivals-page">
        {/* Sticky Filter Bar */}
        <div className="sticky-filter-section">
          <FilterBar />
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {formattedProducts.map((product, index) => (
            <ProductCard 
              key={`${product.href}-${index}`} 
              product={product} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
