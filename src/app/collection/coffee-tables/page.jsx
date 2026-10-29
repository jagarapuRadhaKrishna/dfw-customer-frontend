import CoffeeTablesPage from '@/components/coffee-tables/CoffeeTablesPage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/coffee-tables' },
  title: 'Coffee Tables',
  description: 'Buy Coffee Tables online in India @ low prices. Shop for modern & wooden coffee tables, center tables and more',
  keywords: 'coffee tables, center tables, living room furniture, coffee table online',
};

export default function CoffeeTablesCollectionPage() {
  return (
    <main className="coffee-tables-collection-route">
      <CoffeeTablesPage />
    </main>
  );
}
