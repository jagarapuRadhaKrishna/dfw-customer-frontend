import AtmosRoomPage from '@/components/atmos/AtmosRoomPage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/atmos-bedroom-collection' },
  title: 'Atmos Bedroom Collection',
  description: 'Shop the Atmos bedroom collection: beds and bedroom furniture designed for restful, contemporary spaces.',
};

export default function AtmosBedroomCollectionPage() {
  return (
    <main>
      <AtmosRoomPage categoryId="bedroom" title="Atmos Bedroom Collection" />
    </main>
  );
}
