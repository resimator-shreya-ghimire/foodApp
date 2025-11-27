import { Button } from "@/components/button/Button";
import { useHeaderStore } from "@/store/header";

const TopHeader = () => {

  const { showTopHeader, setShowTopHeader } = useHeaderStore();

  return (
    showTopHeader &&
    <div className=" text-sm p-2 flex justify-center items-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, iste.
      <Button label="close" type="text" onClick={() => setShowTopHeader(false)} className="px-sm py-xs" />
    </div>
  );
};
export default TopHeader;
