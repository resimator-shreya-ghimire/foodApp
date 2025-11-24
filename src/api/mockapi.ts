import SomeData from './mock-data-api/SomeData.json';
import Footerlinks from './mock-data-api/Footerlinks.json';

type Food = {
  id: number;
  name: string;
  category: string;
  price: number;
  isVegetarian: boolean;
  description: string;
  image: string;
};

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

export const getFooterList = () => {
  return new Promise<any[]>(async (resolve, reject) => {
    try {
      resolve(Footerlinks);
    } catch (err) {
      reject(err);
    }
  });
};
