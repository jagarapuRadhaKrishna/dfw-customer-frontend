'use client';

import { useState } from 'react';
import ProductImageGallery from './ProductImageGallery';
import ProductInformation from './ProductInformation';
import ExpertAssistance from './ExpertAssistance';
import MoreProductDetails from './MoreProductDetails';
import RatingsReviews from './RatingsReviews';
import SimilarProducts from './SimilarProducts';
import PromotionalBanner from './PromotionalBanner';
import RecentlyViewed from './RecentlyViewed';
import StickyBottomBar from './StickyBottomBar';
import { useShop } from '@/context/ShopContext';
import './styles/product-detail.css';

// Sofa sizes matching Urban Ladder
const SOFA_SIZES = [
  {
    name: '1 Seater',
    label: '1 Seater',
    priceMultiplier: 0.55,
    dimensions: '98 cm (W) x 91 cm (D) x 93 cm (H)',
    seatHeight: '48 cm',
    weight: '28.5 kg',
  },
  {
    name: '2 Seater',
    label: '2 Seater',
    priceMultiplier: 0.8,
    dimensions: '153 cm (W) x 91 cm (D) x 93 cm (H)',
    seatHeight: '48 cm',
    weight: '42.0 kg',
  },
  {
    name: '3 Seater',
    label: '3 Seater',
    priceMultiplier: 1.0,
    dimensions: '208 cm (W) x 91 cm (D) x 93 cm (H)',
    seatHeight: '48 cm',
    weight: '55.5 kg',
  },
  {
    name: '3 Seater + Lounger (Left Hand Facing)',
    label: '3 Seater + Lounger (Left Hand Facing)',
    priceMultiplier: 1.38,
    dimensions: '275 cm (W) x 165 cm (D) x 93 cm (H)',
    seatHeight: '48 cm',
    weight: '76.0 kg',
  },
  {
    name: '3 Seater + Lounger (Right Hand Facing)',
    label: '3 Seater + Lounger (Right Hand Facing)',
    priceMultiplier: 1.38,
    dimensions: '275 cm (W) x 165 cm (D) x 93 cm (H)',
    seatHeight: '48 cm',
    weight: '76.0 kg',
  },
];

const BED_SIZES = [
  {
    name: 'King Size',
    label: 'King Size (78 x 72 in)',
    priceMultiplier: 1.15,
    dimensions: '205 cm (W) x 195 cm (D) x 110 cm (H)',
    seatHeight: '45 cm',
    weight: '68 kg',
  },
  {
    name: 'Queen Size',
    label: 'Queen Size (78 x 60 in)',
    priceMultiplier: 1.0,
    dimensions: '205 cm (W) x 165 cm (D) x 110 cm (H)',
    seatHeight: '45 cm',
    weight: '58 kg',
  },
  {
    name: 'Single Size',
    label: 'Single Size (78 x 36 in)',
    priceMultiplier: 0.65,
    dimensions: '205 cm (W) x 105 cm (D) x 110 cm (H)',
    seatHeight: '45 cm',
    weight: '38 kg',
  },
];

const DINING_SIZES = [
  {
    name: '4 Seater',
    label: '4 Seater',
    priceMultiplier: 0.8,
    dimensions: '115 cm (W) x 75 cm (D) x 75 cm (H)',
    seatHeight: '45 cm',
    weight: '35 kg',
  },
  {
    name: '6 Seater',
    label: '6 Seater',
    priceMultiplier: 1.0,
    dimensions: '150 cm (W) x 90 cm (D) x 75 cm (H)',
    seatHeight: '45 cm',
    weight: '48 kg',
  },
  {
    name: '8 Seater',
    label: '8 Seater',
    priceMultiplier: 1.35,
    dimensions: '210 cm (W) x 100 cm (D) x 75 cm (H)',
    seatHeight: '45 cm',
    weight: '65 kg',
  },
];

export default function ProductDetailPage({ product, similarProducts, recentlyViewed }) {
  const isBed = (product.title || '').toLowerCase().includes('bed');
  const isDining = (product.title || '').toLowerCase().includes('dining');
  const sizesList = isBed ? BED_SIZES : isDining ? DINING_SIZES : SOFA_SIZES;
  const defaultCapacity = isBed ? 'Queen Size' : isDining ? '6 Seater' : '3 Seater';

  const [selectedColor, setSelectedColor] = useState('Beige');
  const [selectedCapacity, setSelectedCapacity] = useState(defaultCapacity);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const { addToCart } = useShop();

  // Price calculations
  const baseSalePrice =
    parseFloat((product.salePrice || '₹49,999').toString().replace(/[^0-9.]/g, '')) || 49999;
  const baseMrp =
    parseFloat((product.mrp || '₹66,599').toString().replace(/[^0-9.]/g, '')) || 66599;

  const currentSizeData =
    sizesList.find((s) => s.name === selectedCapacity) || sizesList[0];
  const currentPrice = Math.round(baseSalePrice * (currentSizeData?.priceMultiplier || 1));
  const currentMrp = Math.round(baseMrp * (currentSizeData?.priceMultiplier || 1));
  const discount = Math.round(((currentMrp - currentPrice) / currentMrp) * 100);
  const totalPrice = currentPrice * quantity;

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        salePrice: `₹${currentPrice.toLocaleString('en-IN')}`,
        mrp: `₹${currentMrp.toLocaleString('en-IN')}`,
      },
      quantity,
      { size: selectedCapacity, color: selectedColor }
    );
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <nav className="pdp-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span className="bc-sep">›</span>
        <a href="/collection/sofas">Furniture</a>
        <span className="bc-sep">›</span>
        <a href="/collection/sofas">Sofas</a>
        <span className="bc-sep">›</span>
        <span className="bc-current">{product.title}</span>
      </nav>

      {/* Main product layout — two column grid */}
      <div className="product-layout">
        {/* Left: Image Gallery with vertical thumbnails */}
        <ProductImageGallery product={product} />

        {/* Right: Product Information */}
        <ProductInformation
          product={product}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedCapacity={selectedCapacity}
          setSelectedCapacity={setSelectedCapacity}
          quantity={quantity}
          setQuantity={setQuantity}
          currentPrice={currentPrice}
          currentMrp={currentMrp}
          discount={discount}
          currentSizeData={currentSizeData}
          addedToCart={addedToCart}
          onAddToCart={handleAddToCart}
        />
      </div>

      {/* Expert Assistance banner — full width */}
      <ExpertAssistance />

      {/* More Product Details — tabbed section */}
      <MoreProductDetails product={product} />

      {/* Ratings & Reviews */}
      <RatingsReviews product={product} />

      {/* Similar Products grid */}
      <SimilarProducts products={similarProducts} />

      {/* Promotional Banner */}
      <PromotionalBanner />

      {/* Recently Viewed Products */}
      <RecentlyViewed products={recentlyViewed} />

      {/* Sticky Bottom Bar — Fixed at bottom of page */}
      <StickyBottomBar
        product={product}
        selectedCapacity={selectedCapacity}
        quantity={quantity}
        totalPrice={totalPrice}
        addedToCart={addedToCart}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
