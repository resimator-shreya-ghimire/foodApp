import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login.tsx';
import Home from './pages/Home.tsx';
import FoodDetails from './pages/FoodDetails.tsx';
import PageNotFound from './pages/PageNotFound.tsx';
import Cart from './pages/Cart.tsx';
import { ToastHost } from './components/Toast/ToastHost.tsx';
import Layout from './pages/Layout.tsx';

const PrivateRoute = () => {
  let auth = { token: localStorage.getItem('token') };
  return auth.token ? <Layout /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <ToastHost />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
