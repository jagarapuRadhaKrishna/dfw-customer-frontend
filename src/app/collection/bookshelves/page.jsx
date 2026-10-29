import BookshelvesPage from '@/components/bookshelves/BookshelvesPage';

export const metadata = {
  alternates: { canonical: 'https://divyafurnitureworld.com/collection/bookshelves' },
  title: 'Bookshelves',
  description: 'Buy Bookshelves online in India @ low prices. Shop for variety of Bookshelves & Storage Units',
  keywords: 'bookshelves, storage, display cabinet, furniture, bookshelves online, buy bookshelves',
};

export default function BookshelvesCollectionPage() {
  return (
    <main className="bookshelves-collection-route">
      <BookshelvesPage />
    </main>
  );
}
