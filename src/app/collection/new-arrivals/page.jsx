import NewArrivalsPage from '@/components/new-arrivals/NewArrivalsPage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/new-arrivals' },
  title: 'New Furniture Arrivals',
  description: 'Discover our latest furniture collection with 1129+ products. Shop new arrivals in sofas, beds, dining tables, and more at unbeatable prices.',
  keywords: 'new arrivals, latest furniture, new collection, furniture deals, modern furniture',
};

export default function NewArrivalsCollectionPage() {
  return (
    <main className="new-arrivals-route">
      <NewArrivalsPage />
    </main>
  );
}
