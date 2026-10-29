import NewArrivalsPage from '@/components/new-arrivals/NewArrivalsPage';

export const metadata = {
  title: 'New Furniture Arrivals',
  description: 'Explore recently added furniture across sofas, beds, dining tables, and other collections.',
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/new-arrivals' },
  keywords: 'new arrivals, latest furniture, new collection, furniture deals, modern furniture',
};

export default function ExploreOasisCollectionPage() {
  return (
    <main className="new-arrivals-route">
      <NewArrivalsPage />
    </main>
  );
}
