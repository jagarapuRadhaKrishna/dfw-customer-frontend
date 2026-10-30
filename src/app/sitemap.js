import { newArrivalProducts } from '@/features/newarrivals/data/products';
import { sofaProducts } from '@/features/sofas/data/products';
import { sofaCumBedProducts } from '@/features/sofa-cum-beds/data/products';
import { bedsProducts } from '@/features/beds/data/products';
import { bookshelvesProducts } from '@/features/bookshelves/data/products';
import { chestOfDrawersProducts } from '@/features/chest-of-drawers/data/products';
import { coffeeTablesProducts } from '@/features/coffee-tables/data/products';
import { diningTablesProducts } from '@/features/dining-tables/data/products';
import { loungeChairsProducts } from '@/features/lounge-chairs/data/products';
import { mattressesProducts } from '@/features/mattresses/data/products';
import { reclinersProducts } from '@/features/recliners/data/products';
import { shoeRacksProducts } from '@/features/shoe-racks/data/products';
import { sideboardsProducts } from '@/features/sideboards/data/products';
import { studyTablesProducts } from '@/features/study-tables/data/products';
import { tvUnitsProducts } from '@/features/tv-units/data/products';
import { wardrobesProducts } from '@/features/wardrobes/data/products';
import { bestBuysProducts } from '@/features/best-buys/data/products';
import { clearanceSaleProducts } from '@/features/clearance-sale/data/products';
import { decorOnSaleProducts } from '@/features/decor-on-sale/data/products';
import { SERVICE_AVAILABILITY } from '@/lib/location-data';
import { SITE_URL } from '@/lib/site-config';

const products = [
  ...newArrivalProducts,
  ...sofaProducts,
  ...sofaCumBedProducts,
  ...bedsProducts,
  ...bookshelvesProducts,
  ...chestOfDrawersProducts,
  ...coffeeTablesProducts,
  ...diningTablesProducts,
  ...loungeChairsProducts,
  ...mattressesProducts,
  ...reclinersProducts,
  ...shoeRacksProducts,
  ...sideboardsProducts,
  ...studyTablesProducts,
  ...tvUnitsProducts,
  ...wardrobesProducts,
  ...bestBuysProducts,
  ...clearanceSaleProducts,
  ...decorOnSaleProducts,
];

const staticRoutes = [
  '/',
  '/rental',
  '/locations',
  '/collection/all-decor-on-sale',
  '/collection/atmos',
  '/collection/atmos-bedroom-collection',
  '/collection/atmos-dining-room-collection',
  '/collection/atmos-living-room-collection',
  '/collection/beds',
  '/collection/best-buys-under-10000',
  '/collection/bookshelves',
  '/collection/chest-of-drawers',
  '/collection/clearance-sale',
  '/collection/coffee-tables',
  '/collection/dining-sets',
  '/collection/dining-tables',
  '/collection/lounge-chairs',
  '/collection/mattresses',
  '/collection/new-arrivals',
  '/collection/recliners',
  '/collection/shoe-racks',
  '/collection/sideboards',
  '/collection/sofa-cum-beds',
  '/collection/sofas',
  '/collection/study-tables',
  '/collection/tv-units',
  '/collection/wardrobes',
];

export default function sitemap() {
  const entries = staticRoutes.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
  }));
  const seen = new Set(entries.map((entry) => entry.url));

  for (const [city, availability] of Object.entries(SERVICE_AVAILABILITY)) {
    if (!availability.verified) continue;

    const slug = city.toLowerCase().replace(/\s+/g, '-');
    const url = new URL(`/location/${slug}`, SITE_URL).toString();
    if (seen.has(url)) continue;

    seen.add(url);
    entries.push({ url });
  }

  for (const product of products) {
    if (!product?.href || !/^\/product\/[a-z0-9-]+$/i.test(product.href)) continue;

    const url = new URL(product.href, SITE_URL).toString();
    if (seen.has(url)) continue;

    seen.add(url);
    entries.push({ url });
  }

  return entries;
}
