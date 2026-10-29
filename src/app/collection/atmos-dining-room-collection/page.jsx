import AtmosRoomPage from '@/components/atmos/AtmosRoomPage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/atmos-dining-room-collection' },
  title: 'Atmos Dining Room Collection',
  description: 'Shop the Atmos dining room collection: dining tables and chairs for gatherings at home.',
};

export default function AtmosDiningRoomCollectionPage() {
  return (
    <main>
      <AtmosRoomPage categoryId="dining-room" title="Atmos Dining Room Collection" />
    </main>
  );
}
