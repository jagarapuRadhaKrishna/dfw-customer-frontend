import { atmosData } from '@/data/categories/atmos';
import { newArrivalProducts } from '@/features/newarrivals/data/products';

export function getAtmosCategory(categoryId) {
  return atmosData.categories.find(
    (category) => category.id === categoryId || category.slug === categoryId
  );
}

export function getAtmosRoomProducts(categoryId) {
  return atmosData.products
    .filter((item) => item.category === categoryId)
    .map((item) => {
      const matched = newArrivalProducts.find(
        (product) => product.image === item.image || product.title === item.name
      );
      if (matched) return matched;

      const slug = typeof item.url === 'string' && item.url.match(/\/product\/([^/?#]+)/);
      return {
        title: item.name,
        href: slug ? `/product/${slug[1]}` : '/collection/atmos',
        image: item.image,
        salePrice: '',
        mrp: '',
      };
    });
}
