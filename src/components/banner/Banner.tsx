import { BannerItem } from "@/components/banner/Item";

type BannerProps = {
    layout?: string;
    className?: string;
    children: React.ReactNode;
}

export const Banner = ({ layout = "", className = "", children }: BannerProps) => {
    return (
        <div className={`${layout} ${className}`}>
            {children}
        </div>

    )
}

Banner.Item = BannerItem;
