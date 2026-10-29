import DecorOnSalePage from '@/components/decor-on-sale/DecorOnSalePage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/all-decor-on-sale' },
  title: 'Home Décor Collection',
  description: 'Shop home decor items on sale. Find great deals on wall shelves, showcases, prayer units, and more.',
  keywords: 'decor on sale, home decor sale, wall decor, decorative items, furniture decor',
};

export default function DecorOnSaleCollectionPage() {
  return (
    <main className="decor-on-sale-route">
      <DecorOnSalePage />
    </main>
  );
}
