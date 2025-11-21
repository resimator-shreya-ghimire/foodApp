import SomeData from './mock-data-api/SomeData.json';

type Food = {
    id: number;
    name: string;
    category: string;
    price: number;
    isVegetarian: boolean;
    description: string;
    image: string;
}


export const getProductList = (): Promise<Food[]> => {
    return new Promise<Food[]>(async (resolve, reject) => {
        try {
            resolve(SomeData);
        } catch (err) {
            reject(err);
        }
    });
}

export const getProductById = (id: number): Promise<Food | undefined> => {
    return new Promise<Food | undefined>((resolve, reject) => {
        getProductList()
            .then((items) => resolve(items.find((item) => item.id === id)))
            .catch(reject);
    });
}