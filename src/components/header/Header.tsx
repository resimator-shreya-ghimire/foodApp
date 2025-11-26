import TopHeader from '@/components/header/TopHeader';
import NavigationBar from '@/components/header/NavigationBar';

export const Header = () => {
  return (
    <div className="w-full flex flex-col">
      <TopHeader />
      <NavigationBar />
    </div>
  );
};
