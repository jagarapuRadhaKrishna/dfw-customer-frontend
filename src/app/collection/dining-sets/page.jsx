import DiningTablesPage from '@/components/dining-tables/DiningTablesPage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/dining-sets' },
  title: 'Dining Sets',
  description: 'Explore dining tables and sets for everyday meals and gatherings at home.',
};

export default function DiningSetsCollectionPage() {
  return (
    <main className="dining-sets-collection-route">
      <DiningTablesPage />
    </main>
  );
}
