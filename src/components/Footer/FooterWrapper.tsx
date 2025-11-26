import { useQuery } from '@tanstack/react-query';
import { getFooterList } from '../../api/mockapi';
import { ContactForm } from './ContactForm';
import { Footer } from './Footer';

type links = {
  name: string;
  link: string;
};

export type FooterFields = {
  header: string;
  fields: links[];
};

export const FooterWrapper = () => {
  const { data } =
    useQuery<FooterFields[], Error>({
      queryKey: ['footerlinks'],
      queryFn: getFooterList,
    }) ?? [];

  return (
    <Footer
      className="max-w-4xl mx-auto px-4 flex gap-10"
      children={<ContactForm />}
      footerFields={data}
    />
  );
};
