
type BannerItemProps = {
    className?: string;
    children: React.ReactNode;
};

export const BannerItem = ({ className = "", children }: BannerItemProps) => {
    return <div
        className={`
        flex
        items-center
        justify-center
        p-3
        bg-white
        ${className}
      `}
    >{children}</div>;
};


