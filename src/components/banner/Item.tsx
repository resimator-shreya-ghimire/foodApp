
type BannerItemProps = {
    className?: string;
    children: React.ReactNode;
};

export const BannerItem = ({ className = "", children }: BannerItemProps) => {
    return <div
        className={`
        flex
        justify-center
        p-3
        ${className}
      `}
    >{children}</div>;
};


