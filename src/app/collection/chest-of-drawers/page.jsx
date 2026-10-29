import ChestOfDrawersPage from '@/components/chest-of-drawers/ChestOfDrawersPage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/chest-of-drawers' },
  title: 'Chest of Drawers',
  description: 'Buy Chest of Drawers online in India @ low prices. Shop for variety of Chest of Drawers & Storage Units',
  keywords: 'chest of drawers, storage, bedroom furniture, furniture, chest of drawers online, buy chest',
};

export default function ChestOfDrawersCollectionPage() {
  return (
    <main className="chest-of-drawers-collection-route">
      <ChestOfDrawersPage />
    </main>
  );
}
