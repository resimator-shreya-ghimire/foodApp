import { Image } from '@/components/image/Image';

type ListItemProps = {
    title?: string;
    metaDescription?: string;
    avatar?: string;
    actions?: React.ReactNode;
    onClick?: () => void;
};

export const ListItem = ({ title, metaDescription, avatar, actions, onClick }: ListItemProps) => {
    return (
        <div
            className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer gap-4"
            onClick={onClick}
        >
            {avatar && (
                <div className="flex-shrink-0">
                    <Image
                        src={avatar}
                        alt={title || 'Item avatar'}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                </div>
            )}
            <div className="flex-grow min-w-0">
                {title && <h4 className="text-lg font-semibold text-gray-900 truncate">{title}</h4>}
                {metaDescription && <p className="text-sm text-gray-500 line-clamp-2">{metaDescription}</p>}
            </div>
            {actions && <div className="flex-shrink-0 ml-4" onClick={(e) => e.stopPropagation()}>{actions}</div>}
        </div>
    );
};
