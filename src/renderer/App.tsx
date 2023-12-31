import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Category from './pages/Category';
import Login from './pages/Login';
import POS from './pages/POS';
import Product from './pages/Product';
import Provider from './pages/Provider';
import User from './pages/User';
import AppProvider from './providers/app';

// Providers
import ProductProvider from './context/ProductContext';
import UserProvider from './context/UserContext';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <UserProvider>
          <ProductProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<Layout />}>
                <Route path="/home" element={<POS />} />
                <Route path="/category" element={<Category />} />
                <Route path="/provider" element={<Provider />} />
                <Route path="/user" element={<User />} />
                <Route path="/product" element={<Product />} />
              </Route>
            </Routes>
          </ProductProvider>
        </UserProvider>
      </Router>
    </AppProvider>
  );
}
