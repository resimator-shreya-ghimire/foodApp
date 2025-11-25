import React, { useState, useEffect, useRef } from 'react';
import { ListItem } from './ListItem';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

type FieldName = {
    title?: string;
    metaDescription?: string;
    avatar?: string;
};

type ListProps = {
    header?: React.ReactNode;
    title?: string;
    footer?: React.ReactNode;
    mapFieldName?: FieldName;
    items?: any[];
    itemsRenderer?: (item: any) => React.ReactNode;
    actions?: (item: any) => React.ReactNode;
    onItemClick?: (item: any) => void;
};

export const List = ({
    header,
    title,
    footer,
    mapFieldName,
    items,
    itemsRenderer,
    actions,
    onItemClick,
}: ListProps) => {
    const loadMoreRef = useRef<HTMLDivElement | null>(null);
    const pageSize = 8;
    const [page, setPage] = useState(0);
    const [listItems, setListItems] = useState<any[]>([]);

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

    const mappedItems = listItems?.map((item: any) => {
        if (mapFieldName) {
            return {
                ...item,
                title: item[mapFieldName.title as string],
                metaDescription: item[mapFieldName.metaDescription as string],
                avatar: item[mapFieldName.avatar as string],
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
                itemsRenderer(items)
                : mappedItems.map((item?: any) => (
                    <ListItem
                        key={item.id}
                        title={item.title}
                        metaDescription={item.metaDescription}
                        avatar={item.avatar}
                        onClick={() => onItemClick && onItemClick(item)}
                        actions={actions ? actions(item) : null}
                    />
                ))}
            <div ref={loadMoreRef} className="h-4" />
            {footer}
        </div>
    );
};
