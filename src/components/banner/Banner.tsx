import { BannerItem } from "@/components/banner/Item";

type BannerProps = {
    layout?: string;
    className?: string;
    children: React.ReactNode;
}

export const Banner = ({ layout = "flex-row", className = "", children }: BannerProps) => {
    return (
        <div className={`flex flex-col sm:flex-row ${layout} ${className}`}>
            {children}
        </div>

    )
}

Banner.Item = BannerItem;
