import { useNavigate } from 'react-router-dom';
import { useAuth } from "../auth/auth.tsx";

const NavigationBar = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout=()=>{
    logout();
    navigate('/login');
  }
  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto px-2 py-3 flex items-center justify-between">
        <div className="logo text-xl font-bold text-blue-500">MyFoodApp</div>

        <nav aria-label="Main Navigation">
          <ul className="hidden sm:flex gap-6 items-center text-gray-700">
            <li>
              <button className="text-sm px-3 py-1 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavigationBar