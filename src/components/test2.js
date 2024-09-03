// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { allProducts } from "./Data";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import "./test2.css";
import { IoMdCheckmark } from "react-icons/io";
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from './cartSlice'; // تحديث الاستيرادات
import { useDispatch, useSelector } from 'react-redux'; // افترض أنك تستخدم Redux
import { Link } from 'react-router-dom'; // لإضافة روابط إلى صفحات أخرى
import Pagination from "./Pagination"

const ProductList = ({ filters }) => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20; // عدد المنتجات في كل صفحة

    useEffect(() => {
        const fetchProducts = () => {

            let result = allProducts;

            // Apply category filter
            if (filters.category) {
                result = result.filter(product => product.category === filters.category);
            }

            // Apply brand filter
            if (filters.brands.length > 0) {
                result = result.filter(product => filters.brands.includes(product.brand));
            }

            // Apply rating filter
            if (filters.rating.length > 0) {
                result = result.filter(product => filters.rating.includes(product.rating));
            }

            // Apply discount filter
            if (filters.discount) {
                result = result.filter(product => product.discount);
            }

            // Apply price range filter
            if (filters.priceRange) {
                result = result.filter(product => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]);
            }

            // Apply sorting
            if (filters.sort) {
                switch (filters.sort.value) {
                    case 'priceLowToHigh':
                        result.sort((a, b) => a.price - b.price);
                        break;
                    case 'priceHighToLow':
                        result.sort((a, b) => b.price - a.price);
                        break;
                    case 'rating':
                        result.sort((a, b) => b.rating - a.rating);
                        break;
                    case 'newest':
                        // Implement sorting by newest if you have a date field
                        break;
                    default:
                        break;
                }
            }

            setProducts(result);
        };

        fetchProducts();
    }, [filters]);


    const [notification, setNotification] = useState(""); // حالة لإظهار الإشعار


    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        setNotification(`Product added successfully`); // Set notification message
        setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
    };

    const handleIncrement = (productId) => {
        dispatch(incrementQuantity(productId));
        setNotification(`Product added successfully`);
        setTimeout(() => setNotification(""), 3000);
    };

    const handleDecrement = (productId) => {
        dispatch(decrementQuantity(productId));
        setNotification(`Item quantity has been updated`);
        setTimeout(() => setNotification(""), 3000);
    };

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
        setNotification(`Product was removed from cart successfully`);
        setTimeout(() => setNotification(""), 3000);
    };

    const isProductInCart = (productId) => {
        return cart.some(item => item.id === productId);
    };

    const getProductQuantity = (productId) => {
        const item = cart.find(item => item.id === productId);
        return item ? item.quantity : 0;
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className='product-container'>
            <div className='title-super'>
                <p className='tit-super1'>
                    Supermarket
                    <span>
                        (7457 products found)
                    </span>
                </p>
            </div>
            {notification && <div className='notification'><IoMdCheckmark />{notification}</div>}  {/* Show notification */}
            <div className='producte2'>
                {products.length > 0 ? (
                    currentProducts.map(product => (
                        <div className='card-products' key={product.id}>
                            <Link to={`/detail/${product.id}`} className='card-link'>
                                <img src={product.img} alt='product' className='img-product' />
                                <span className={product.class}>{product.title1}</span>
                                <div className='like-product'>
                                    <FaRegHeart className='icon-like' />
                                </div>
                                <p className='card-detalis'>{product.title2}</p>
                                <div className='card-price'>
                                    <div className='price'>EGP{product.price.toFixed(2)}
                                        <del>{product.prevprice}</del>
                                        <p className='sales'>{product.sale}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='star2'>{product.star}</p>
                                </div>
                                <img src={product.logo} alt="jumia express" className={product.express} />
                                <div className={product.Sponsored}>
                                    <p className='Sponsored1'>Sponsored</p>
                                    <AiOutlineExclamationCircle />
                                </div>
                            </Link>
                            <div className='btn-add'>
                                {isProductInCart(product.id) ? (
                                    <div className='cart-controls'>
                                        <button className='btn-mins2' onClick={() => handleDecrement(product.id)} disabled={getProductQuantity(product.id) <= 1}>-</button>
                                        <span className='btn-num2'>{getProductQuantity(product.id)}</span>
                                        <button className='btn-plus' onClick={() => handleIncrement(product.id)}>+</button>
                                        <button className='btn-remove2' onClick={() => handleRemove(product.id)}>REMOVE</button>
                                    </div>
                                ) : (
                                    <div className='btn-add'>
                                        <button className='add' onClick={() => handleAddToCart(product)}>ADD TO CART</button>
                                    </div>
                                )}
                            </div>
                            <div className='di'>
                                <p>Category: {product.category}</p>
                                <p>Brand: {product.brand}</p>
                                <p>Rating: {product.rating} Star(s)</p>
                                {product.discount && <p>Discounted</p>}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default ProductList;
