import { Suspense } from 'react';
import { useFooterList } from '@/utils/query';
import { Footer } from '@/components/footer/Footer';
import { IconRenderer } from '@/components/footer/IconRenderer';


export const FooterWrapper = () => {
  const { data } = useFooterList();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Footer
        className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-10"
        footerFields={data}
        children={<IconRenderer />}
      />
    </Suspense>
  );
};
