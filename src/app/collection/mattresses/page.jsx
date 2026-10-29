import MattressesPage from '@/components/mattresses/MattressesPage';
export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/mattresses' },
  title: 'Mattresses',
  description: 'Buy Mattresses online. Memory foam, spring & latex mattresses',
  keywords: 'mattresses, memory foam, spring mattress, beds',
};
export default function MattressesCollectionPage() {
  return <main><MattressesPage /></main>;
}
