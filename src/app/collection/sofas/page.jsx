import SofasPage from '@/components/sofas/SofasPage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/sofas' },
  title: 'Sofas & Sofa Sets',
  description: 'Explore sofa styles, sizes, and upholstery options for your living space.',
  keywords: 'sofa sets, sofas, recliners, furniture, sofas online, buy sofas',
};

export default function SofasCollectionPage() {
  return (
    <main className="sofas-collection-route">
      <SofasPage />
    </main>
  );
}
