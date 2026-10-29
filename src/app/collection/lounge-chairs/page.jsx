import LoungeChairsPage from '@/components/lounge-chairs/LoungeChairsPage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/lounge-chairs' },
  title: 'Lounge Chairs',
  description: 'Buy Lounge Chairs and Accent Chairs online in India. Modern and stylish lounge furniture',
  keywords: 'lounge chairs, accent chairs, seating furniture',
};

export default function LoungeChairsCollectionPage() {
  return (
    <main className="lounge-chairs-collection-route">
      <LoungeChairsPage />
    </main>
  );
}
