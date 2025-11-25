import { Button } from "../button/Button";
import { useState } from "react";

const TopHeader = () => {
  const [show, setShow] = useState(sessionStorage.getItem('show-top-header') ? false : true);

  const handleClose = () => {
    sessionStorage.setItem('show-top-header', 'false');
    setShow(false);
  }

  return (
    show &&
    <div className=" text-sm p-2 flex justify-center items-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, iste.
      <Button label="close" type="text" onClick={handleClose} className="px-sm py-xs" />
    </div>
  );
};
export default TopHeader;
