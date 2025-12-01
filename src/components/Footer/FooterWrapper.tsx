import { useFooterList } from '@/utils/query';
import { Footer } from '@/components/footer/Footer';
import { Suspense } from 'react';

export const FooterWrapper = () => {
  const { data } = useFooterList();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Footer
        className="max-w-4xl mx-auto px-4 flex gap-10"
        footerFields={data}
      />
    </Suspense>
  );
};
