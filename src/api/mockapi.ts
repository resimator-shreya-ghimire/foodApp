import SomeData from '@/api/mock-data-api/SomeData.json';
import Footerlinks from '@/api/mock-data-api/Footerlinks.json';
import type { FoodData } from '@/components/product-list/FoodList';
import type { FooterFields } from '@/components/footer/Footer';

interface FoodDetails extends FoodData {
  reviews: Array<{
    user: string;
    comment: string;
    rating: number;
  }>;
  rating: number;
}

export const getProductList = async ({ pageParam }: { pageParam: unknown }) => {
  const limit = 6;
  const page = (pageParam as number) || 1;
  const start = (page - 1) * limit;
  const end = start + limit;

  const items = SomeData.slice(start, end).map(item => ({
    ...item,
    id: String(item.id)
  }));

  return {
    items,
    nextPage: items.length < limit ? undefined : page + 1,
    pageParam: page,
  };
};

export const getProductById = (id: string): Promise<FoodDetails> => {
  return new Promise((resolve, reject) => {
    const product = SomeData.find((item) => String(item.id) === id);
    console.log('product', product);
    if (product) resolve({ ...product, id: String(product.id) } as FoodDetails);
    else reject("Product not found");
  });
};


export const getFooterList = (): Promise<FooterFields[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(Footerlinks);
    } catch (err) {
      reject(err);
    }
  });
};

export const getCartCount = () => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(JSON.parse(localStorage.getItem('cartCount') ?? '0'));
    } catch (err) {
      reject(err);
    }
  });
};

