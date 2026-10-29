import AtmosRoomPage from '@/components/atmos/AtmosRoomPage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/atmos-living-room-collection' },
  title: 'Atmos Living Room Collection',
  description: 'Shop the Atmos living room collection: sofas, chairs, and coffee tables designed for contemporary homes.',
};

export default function AtmosLivingRoomCollectionPage() {
  return (
    <main>
      <AtmosRoomPage categoryId="living-room" title="Atmos Living Room Collection" />
    </main>
  );
}
