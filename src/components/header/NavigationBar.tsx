
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/auth.tsx';
import { Icon } from '@/components/icon/Icon.tsx';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Popover } from '@/components/popover/Popover.tsx';
import { Button } from '@/components/button/Button.tsx';
import { useCart } from '@/store/cart';
import { useModalStore } from '@/store/useModalStore';
import { Modal } from '@/components/modal/Modal.tsx';


const NavigationBar = () => {
  const { user, logout } = useAuthStore();
  const { cartCount } = useCart();
  const { showModal } = useModalStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (cartCount === 0) return;
    showModal({
      title: 'Cart',
      id: 'cart',
      variant: 'content',
      content: <div> You have some items in your cart </div>,
      onConfirm: () => navigate('/cart'),
      onCancel: () => { },
      confirmText: 'Go to Cart',
      cancelText: 'Cancel',
    });
  }, []);

  const handleLogout = () => {
    if (user?.email) {
      sessionStorage.setItem('user-email', user?.email);
    }
    logout();
  };

  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto px-2 py-4 flex items-center justify-between">
        <div className="logo text-xl font-weight-500 text-black cursor-pointer" onClick={() => navigate('/')}>Foodyhood</div>
        <nav aria-label="Main Navigation">
          <ul className="hidden sm:flex gap-6 items-center text-gray-700">
            <li>
              <span className="absolute top-1.5 count-badge bg-red-500 text-white w-3 h-3 px-2 py-2 rounded-full flex items-center justify-center">{cartCount}</span>
              <Icon
                icon={faCartShopping}
                title="Cart"
                className="text-xl cursor-pointer"
                onClick={() => navigate('/cart')}
              />
            </li>
            <li>
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
                      className="text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded transition-colors"
                    />
                  </div>
                }
              >
                <Icon
                  icon={faUser}
                  title="User"
                  className="text-xl cursor-pointer"
                />
              </Popover>
            </li>
          </ul>
          <Modal id="cart" content={<div> somethings </div>} />
        </nav>
      </div>
    </header >
  );
};

export default NavigationBar;
