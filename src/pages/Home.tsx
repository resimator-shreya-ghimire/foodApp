import { FoodList } from '../components/product-list/FoodList';
import { FooterWrapper } from '../components/Footer/FooterWrapper';
import { Header } from '../components/header/Header';

const Home = () => {
  return (
    <div className=" h-[100vh]">
      <Header />
      <FoodList />
      <FooterWrapper />
    </div>
  );
};

export default Home;
