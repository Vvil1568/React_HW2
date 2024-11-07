import React from 'react';
import './Modal.css';
import { Product } from '../../types/Product.ts';
import placeholderImage from '../../assets/placeholder.png';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Категория: {product.category}</p>
                <p>Количество: {product.quantity} {product.unit}</p>
                <img src={product.image || placeholderImage} alt={product.name} />
            </div>
        </div>
    );
};

export default Modal;