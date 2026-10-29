import DiningTablesPage from '@/components/dining-tables/DiningTablesPage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/dining-tables' },
  title: 'Dining Tables',
  description: 'Buy Dining Tables and Dining Sets online in India @ low prices. Shop for dining furniture sets',
  keywords: 'dining tables, dining sets, dining table sets, furniture',
};

export default function DiningTablesCollectionPage() {
  return (
    <main className="dining-tables-collection-route">
      <DiningTablesPage />
    </main>
  );
}
