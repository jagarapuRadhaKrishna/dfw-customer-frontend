import AtmosPage from '@/components/atmos/AtmosPage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/atmos' },
  title: 'Atmos Collection',
  description: 'Explore the Atmos Collection - a curated selection of premium furniture for living rooms, bedrooms, and dining areas. Shop contemporary designs that blend style and comfort.',
  keywords: 'atmos collection, furniture collection, living room, bedroom, dining, premium furniture',
};

export default function AtmosCollectionPage() {
  return (
    <main>
      <AtmosPage />
    </main>
  );
}
