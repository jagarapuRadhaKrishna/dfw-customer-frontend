import BestBuysPage from '@/components/best-buys/BestBuysPage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/best-buys-under-10000' },
  title: 'Furniture Under ₹10,000',
  description: 'Shop the best furniture deals under ₹10,000. Find affordable sofas, chairs, tables, and more with great discounts.',
  keywords: 'best buys under 10000, affordable furniture, budget furniture, furniture deals, cheap furniture',
};

export default function BestBuysCollectionPage() {
  return (
    <main className="best-buys-route">
      <BestBuysPage />
    </main>
  );
}
