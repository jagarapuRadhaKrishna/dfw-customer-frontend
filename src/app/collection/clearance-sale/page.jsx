import ClearanceSalePage from '@/components/clearance-sale/ClearanceSalePage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/clearance-sale' },
  title: 'Clearance Furniture',
  description: 'Shop our clearance sale with huge discounts on sofas, beds, dining tables, and more. Limited stock available!',
  keywords: 'clearance sale, furniture sale, discount furniture, end of season sale, furniture deals',
};

export default function ClearanceSaleCollectionPage() {
  return (
    <main className="clearance-sale-route">
      <ClearanceSalePage />
    </main>
  );
}
