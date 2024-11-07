import React, { useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import Navigation from './components/Navigation/Navigation.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import { Product } from './types/Product.ts';
import productData from './data/products.json';
import './App.css';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products] = useState<Product[]>(productData);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Navigation toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="main-content">
        <Sidebar isOpen={isSidebarOpen} />
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default App;