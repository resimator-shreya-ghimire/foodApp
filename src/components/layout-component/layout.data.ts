export type Food = {
  id: number;
  name: string;
  category: string;
  price: number;
  isVegetarian: boolean;
  image: string;
  description: string;
};

export type links={
  name:string;
  link:string;
}

export interface FooterFields{
  header:string;
  fields: links[];
}

export interface FooterProps {
    children?: React.ReactNode;
    className?: string;
    copyrightText?: string;
    footerFields?:FooterFields[];
    sideForm?: React.ReactNode;
  }

  export interface CardProps {
   Title?: string;
   header?: React.ReactNode | null;
   children?: React.ReactNode | null;
   image?: string;
   category?: string;
   description?: string;
   price?: number;
   className?: string;
   actions?: React.ReactNode | null;
   hoverEffect?: boolean;
   onClick?: () => void;
}
