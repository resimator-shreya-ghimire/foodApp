import { FoodList } from '../components/product-list/FoodList';
import { FooterWrapper } from '../components/Footer/FooterWrapper';

const Home = () => {
  return (
    <div className=" h-[100vh]">
      <FoodList />
      <FooterWrapper />
    </div>
  );
};

export default Home;
