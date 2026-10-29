import ProductCard from './ProductCard';
import { newArrivalProducts } from '@/features/newarrivals/data/products';

export default function ProductGrid() {
  return (
    <div className="product-grid">
      {newArrivalProducts.map((product, index) => (
        <ProductCard 
          key={`${product.href}-${index}`} 
          product={product} 
        />
      ))}
    </div>
  );
}
