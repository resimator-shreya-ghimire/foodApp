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

export const Footer = ({ children, className = "", copyrightText = `© ${new Date().getFullYear()} MyFoodApp`, footerFields=[] }:FooterProps) => {
  return (
    <footer className={`w-full bg-gray-200 text-gray-700 py-6 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-2">
        {children}
        {footerFields?.length > 0 && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
            {footerFields?.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-2">{section?.header}</h4>
                <ul>
                  {section?.fields?.map((field, idx) => (
                    <li key={idx} className="mb-1">
                      <a href={field?.link} className="hover:underline">
                        {field.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div className="text-sm opacity-80">{copyrightText}</div>
      </div>
    </footer>
  );
};

export default Footer;
