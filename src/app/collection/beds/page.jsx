import BedsPage from '@/components/beds/BedsPage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/beds' },
  title: 'Beds for Every Bedroom',
  description: 'Explore beds in a range of sizes and styles for your bedroom.',
  keywords: 'beds, queen beds, king beds, storage beds, furniture, beds online, buy beds',
};

export default function BedsCollectionPage() {
  return (
    <main className="beds-collection-route">
      <BedsPage />
    </main>
  );
}
