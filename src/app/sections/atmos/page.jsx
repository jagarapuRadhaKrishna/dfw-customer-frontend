import AtmosPage from '@/components/atmos/AtmosPage';
import '@/styles/atmos/index.css';

export const metadata = {
  title: 'Atmos Collection',
  description: 'Discover the Atmos Collection of premium furniture for every room.',
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/atmos' },
};

export default function AtmosSectionPage() {
  return (
    <main className="atmos-section-route">
      <AtmosPage />
    </main>
  );
}
