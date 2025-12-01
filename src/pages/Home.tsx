import { FoodList } from '@/components/product-list/FoodList';
import { FooterWrapper } from '@/components/footer/FooterWrapper';
import { WebBanner } from '@/components/landing-page/WebBanner';
import { Features } from '@/components/landing-page/Features';

const Home = () => {
  return (
    <div>
      <WebBanner />
      <Features />
      <FoodList />
      <FooterWrapper />

    </div>
  );
};

export default Home;
