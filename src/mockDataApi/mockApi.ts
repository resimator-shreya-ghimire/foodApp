export type Food = {
    id: number;
    name: string;
    category: string;
    price: number;
    isVegetarian: boolean;
    description: string;
    image: string;
}

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