import type { Food } from "../App.data";

export const getProductList = async (): Promise<Food[]> => {
    const response = await fetch('/mockDataApi/SomeData.json');
    const data = await response.json();
    const items = Array.isArray(data) ? data : [data];
    return items.map((item: any) => ({
        id: Number(item.id),
        name: String(item.name),
        category: String(item.category),
        price: Number(item.price),
        isVegetarian: Boolean(item.isVegetarian),
        description: String(item.description ?? ''),
        image: String(item.image ?? ''),
    }));
}

export const getProductById = async (id: number): Promise<Food | undefined> => {
    const items = await getProductList();
    return items.find((item) => item.id === id);
}