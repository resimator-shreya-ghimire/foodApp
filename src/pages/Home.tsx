import { FoodList } from '@/components/product-list/FoodList';
import { FooterWrapper } from '@/components/footer/FooterWrapper';
import { Banner } from '@/components/banner/Banner';
import { Image } from '@/components/image/Image';

const Home = () => {
  return (
    <div>
      <Banner layout="flex-row" className="relative bg-gradient-to-r from-orange-500 to-red-500 h-[500px] max-w-full mx-auto overflow-hidden">
        <Banner.Item className="relative w-full">
          <div className="absolute inset-0">
            <Image
              src="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M="
              alt="Delicious food collection"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/20 to-transparent" />
          </div>
          <div className="relative z-10 h-full flex items-center px-12 md:px-20">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-pink mb-4 leading-tight text-shadow-lg">
                Try Our <span className="text-orange-400 text-shadow-lg">Food</span>
              </h1>
              <p className="text-xl md:text-2xl  mb-8 leading-relaxed text-black text-shadow-lg">
                Experience the finest flavors crafted with passion.
                <br />
                <span className="text-red-600 font-semibold text-shadow-lg">Fresh ingredients, unforgettable taste.</span>
              </p>
            </div>
          </div>
        </Banner.Item>
      </Banner>

      <FoodList />
      <FooterWrapper />
    </div>
  );
};

export default Home;
