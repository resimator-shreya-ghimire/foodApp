import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login.tsx';
import Home from './pages/Home.tsx';
import FoodDetails from './pages/FoodDetails.tsx';
import PageNotFound from './pages/PageNotFound.tsx';

const PrivateRoute = () => {
  let auth = { token: localStorage.getItem('token') };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
