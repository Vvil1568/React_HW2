import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/Product.ts';
import './ProductList.css';

interface ProductListProps {
    products: Product[];
}


const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.name} product={product} />
            ))}
        </div>
    );
};


export default ProductList;