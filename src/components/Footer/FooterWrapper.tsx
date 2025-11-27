import { useFooterList } from '@/utils/query';
import { Footer } from '@/components/footer/Footer';

export const FooterWrapper = () => {
  const { data } = useFooterList();
  if (!data) return null;

  return (
    <Footer
      className="max-w-4xl mx-auto px-4 flex gap-10"
      footerFields={data}
    />
  );
};
