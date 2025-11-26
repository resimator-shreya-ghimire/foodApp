import SomeData from './mock-data-api/SomeData.json';
import Footerlinks from './mock-data-api/Footerlinks.json';
import type { FoodData } from '../components/product-list/FoodList';

interface FoodDetails extends FoodData {
  reviews: Array<{
    user: string;
    comment: string;
    rating: number;
  }>;
  rating: number;
}

export const getProductList = async ({ pageParam = 1 }) => {
  const limit = 6;
  const start = (pageParam - 1) * limit;
  const end = start + limit;

  const items = SomeData.slice(start, end);

  return {
    items,
    nextPage: items.length < limit ? undefined : pageParam + 1,
  };
};

export const getProductById = (id: number): Promise<FoodDetails> => {
  return new Promise((resolve, reject) => {
    const product = SomeData.find((item) => item.id === id);
    console.log('product', product);
    if (product) resolve(product as FoodDetails);
    else reject("Product not found");
  });
};


export const getFooterList = () => {
  return new Promise<any[]>(async (resolve, reject) => {
    try {
      resolve(Footerlinks);
    } catch (err) {
      reject(err);
    }
  });
};

export const getCartCount = () => {
  return new Promise<any[]>(async (resolve, reject) => {
    try {
      resolve(JSON.parse(localStorage.getItem('cartCount') ?? '0'));
    } catch (err) {
      reject(err);
    }
  });
};

