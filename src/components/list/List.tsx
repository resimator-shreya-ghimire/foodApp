import React, { useState, useEffect, useRef } from 'react';
import { ListItem } from '@/components/list/ListItem';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

type FieldName = {
    title?: string;
    metaDescription?: string;
    avatar?: string;
};

export type ListItems = {
    id?: string;
    title?: string;
    metaDescription?: string;
    avatar?: string;
};

type ListProps<T extends ListItems> = {
    header?: React.ReactNode;
    title?: string;
    footer?: React.ReactNode;
    mapFieldName?: FieldName;
    items?: T[];
    itemsRenderer?: (items: T[]) => React.ReactNode;
    actions?: (item: T) => React.ReactNode;
    onItemClick?: (item: T) => void;
};

export const List = <T extends ListItems>({
    header,
    title,
    footer,
    mapFieldName,
    items,
    itemsRenderer,
    actions,
    onItemClick,
}: ListProps<T>) => {
    const loadMoreRef = useRef<HTMLDivElement | null>(null);
    const pageSize = 8;
    const [page, setPage] = useState(0);
    const [listItems, setListItems] = useState<T[]>([]);

    useEffect(() => {
        if (items && items.length) {
            const firstPage = items.slice(0, pageSize);
            setListItems(firstPage);
            setPage(1);
        } else {
            setListItems([]);
            setPage(0);
        }
    }, [items]);

    useInfiniteScroll({
        ref: loadMoreRef,
        onIntersect: () => {
            if (!items) return;
            if (listItems.length >= items.length) return;
            const start = page * pageSize;
            const end = Math.min(start + pageSize, items.length);
            const nextSlice = items.slice(start, end);
            setListItems(prev => [...prev, ...nextSlice]);
            setPage(prev => prev + 1);
        },
        enabled: true,
    });

    const mappedItems: T[] = listItems?.map((item: T) => {
        if (mapFieldName) {
            return {
                ...item,
                title: item?.[mapFieldName?.title as keyof T] ?? '',
                metaDescription: item?.[mapFieldName?.metaDescription as keyof T] ?? '',
                avatar: item?.[mapFieldName?.avatar as keyof T] ?? '',
            };
        }
        return item;
    }) ?? [];

    return (
        <div className="flex flex-col gap-4">
            {header}
            {title && <h3 className="text-xl font-bold text-gray-800">{title}</h3>}
            {items?.length === 0 && <p className="text-gray-500">No items found</p>}
            {itemsRenderer ?
                itemsRenderer(mappedItems)
                : mappedItems.map((item) => (
                    <ListItem
                        key={item?.id}
                        title={item?.title}
                        metaDescription={item?.metaDescription}
                        avatar={item?.avatar}
                        onClick={() => onItemClick && onItemClick(item)}
                        actions={actions ? actions(item) : null}
                    />
                ))}
            <div ref={loadMoreRef} className="h-4" />
            {footer}
        </div>
    );
};
