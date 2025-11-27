import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { getProductById } from "@/api/mockapi";
import type { FoodDetailsData } from "@/pages/FoodDetails";
import type { FooterFields } from '@/components/footer/Footer';
import { getFooterList } from '@/api/mockapi';
import { getProductList } from '@/api/mockapi';
import type { FoodData } from '@/components/product-list/FoodList';

export const useFoodDetails = (id: string) => {
    return useQuery<FoodDetailsData>({
        queryKey: ["product", id],
        queryFn: () => getProductById(id),
        enabled: !!id,
    });
};

export const useFooterList = () => {
    return useQuery<FooterFields[], Error>({
        queryKey: ['footerlinks'],
        queryFn: getFooterList,
    }) ?? [];
}

type PageResponse = {
    items: FoodData[];
    nextPage?: number;
    pageParam?: number;
};

export const useProductList = () => {
    return useInfiniteQuery<PageResponse>({
        queryKey: ['foods'],
        queryFn: getProductList,
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });
}




