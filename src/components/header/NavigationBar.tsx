import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth.tsx";
import { Icon } from "@/components/icon/Icon.tsx";
import { faCartShopping, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Popover } from "@/components/popover/Popover.tsx";
import { Button } from "@/components/button/Button.tsx";
import { useCart } from "@/store/cart";

const NavigationBar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const { cartCount } = useCart();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    if (user?.email) sessionStorage.setItem("user-email", user?.email);
    logout();
  };

  return (
    <header className="w-full shadow-sm">
      <div className="max-w-6xl mx-auto px-3 py-4 flex items-center justify-between">
        <div
          className="text-xl font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Foodyhood
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-gray-700">
          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 text-xs rounded-full flex items-center justify-center">
              {cartCount}
            </span>
            <Icon
              icon={faCartShopping}
              className="text-xl cursor-pointer"
              onClick={() => navigate("/cart")}
            />
          </div>

          <Popover
            direction="bottom"
            content={
              <div className="flex flex-col gap-3">
                <div className="border-b pb-2">
                  <p className="text-sm text-gray-500">Signed in as</p>
                  <p className="font-medium text-gray-800">{user?.email}</p>
                </div>
                <Button
                  onClick={handleLogout}
                  label="Logout"
                  className="text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
                />
              </div>
            }
          >
            <Icon icon={faUser} className="text-xl cursor-pointer" />
          </Popover>
        </nav>

        <button className="sm:hidden" onClick={() => setOpen(!open)}>
          <Icon icon={open ? faTimes : faBars} className="text-2xl" />
        </button>
      </div>

      {open && (
        <div className="sm:hidden bg-white shadow-md px-4 py-4 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="text-gray-700" onClick={() => navigate("/cart")}>Cart</span>
            <p className="text-sm text-gray-500">Signed in as</p>
            <p className="font-medium">{user?.email}</p>
            <Button
              onClick={handleLogout}
              label="Logout"
              className="px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded"
            />
          </div>

        </div>
      )}
    </header>
  );
};

export default NavigationBar;
