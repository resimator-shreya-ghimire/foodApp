import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../auth/auth.tsx';
import { Button } from '../button/Button.tsx';

const NavigationBar = () => {
  const { user, logout } = useAuthStore();

  const navigate = useNavigate();
  const handleLogout = () => {
    if (user?.email) {
      sessionStorage.setItem('user-email', user?.email);
    }
    logout();
    navigate('/login');
  };

  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto px-2 py-3 flex items-center justify-between">
        <div className="logo text-xl font-weight-500 text-black">Foodyhood</div>
        <nav aria-label="Main Navigation">
          <ul className="hidden sm:flex gap-6 items-center text-gray-700">
            <li>
              <Button label="Logout" variant="delete" onClick={handleLogout} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
