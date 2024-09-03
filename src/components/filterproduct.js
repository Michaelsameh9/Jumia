import React, { useState, useEffect } from 'react';

const data = {
    categories: ['Electronics', 'Clothing', 'Books'],
    brands: ['Brand A', 'Brand B', 'Brand C'],
    products: [
        { id: 1, category: 'Electronics', brand: 'Brand A', name: 'Laptop', price: 999, rating: 4.5, arrivalDate: '2024-05-01', description: 'A powerful laptop.' },
        { id: 2, category: 'Electronics', brand: 'Brand B', name: 'Smartphone', price: 699, rating: 4.2, arrivalDate: '2024-07-01', description: 'A latest smartphone.' },
        { id: 3, category: 'Clothing', brand: 'Brand C', name: 'T-shirt', price: 29, rating: 4.7, arrivalDate: '2024-08-01', description: 'Comfortable cotton T-shirt.' },
        { id: 4, category: 'Clothing', brand: 'Brand A', name: 'Jeans', price: 49, rating: 4.3, arrivalDate: '2024-06-01', description: 'Stylish denim jeans.' },
        { id: 5, category: 'Books', brand: 'Brand B', name: 'Novel', price: 15, rating: 4.0, arrivalDate: '2024-04-01', description: 'A fascinating novel.' },
        { id: 6, category: 'Books', brand: 'Brand C', name: 'Biology', price: 25, rating: 4.5, arrivalDate: '2024-03-01', description: 'A comprehensive biology book.' }
    ]
};

function Producte() {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const [arrivalFilter, setArrivalFilter] = useState('');

    useEffect(() => {
        // Load categories, brands, and products from static data or API
        setCategories(data.categories);
        setBrands(data.brands);
        setProducts(data.products);
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleBrandChange = (event) => {
        setBrandFilter(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handleRatingChange = (event) => {
        setRatingFilter(event.target.value);
    };

    const handleArrivalChange = (event) => {
        setArrivalFilter(event.target.value);
    };

    // Filtering and sorting logic
    const filteredProducts = products
        .filter((product) => !selectedCategory || product.category === selectedCategory)
        .filter((product) => product.brand.toLowerCase().includes(brandFilter.toLowerCase()))
        .filter((product) => !ratingFilter || product.rating >= ratingFilter)
        .sort((a, b) => {
            if (sortOrder === 'priceLowToHigh') return a.price - b.price;
            if (sortOrder === 'priceHighToLow') return b.price - a.price;
            if (sortOrder === 'newestArrivals') return new Date(b.arrivalDate) - new Date(a.arrivalDate);
            return 0;
        });

    return (
        <div className="App">
            <header>
                <h1>Product Page</h1>
            </header>
            <aside className="sidebar">
                <div className="category-list">
                    <h2>Categories</h2>
                    <ul>
                        {categories.map((category) => (
                            <li key={category} onClick={() => handleCategoryChange(category)}>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="brand-filter">
                    <h2>Filter by Brand</h2>
                    <input
                        type="text"
                        placeholder="Enter brand name"
                        value={brandFilter}
                        onChange={handleBrandChange}
                    />
                </div>
                <div className="filter-options">
                    <h2>Sort By</h2>
                    <select value={sortOrder} onChange={handleSortChange}>
                        <option value="">Select</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="newestArrivals">Newest Arrivals</option>
                    </select>
                </div>
                <div className="rating-filter">
                    <h2>Filter by Rating</h2>
                    <select value={ratingFilter} onChange={handleRatingChange}>
                        <option value="">Select Rating</option>
                        <option value="4">4 Stars & Up</option>
                        <option value="4.5">4.5 Stars & Up</option>
                    </select>
                </div>
            </aside>
            <main className="item-list">
                <h2>Products</h2>
                {filteredProducts.length > 0 ? (
                    <ul>
                        {filteredProducts.map((product) => (
                            <li key={product.id} className="product-item">
                                <h3>{product.name}</h3>
                                <p>Brand: {product.brand}</p>
                                <p>Price: ${product.price}</p>
                                <p>Rating: {product.rating} Stars</p>
                                <p>Arrival Date: {new Date(product.arrivalDate).toLocaleDateString()}</p>
                                <p>{product.description}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No products available for this filter.</p>
                )}
            </main>
        </div>
    );
}

export default Producte;
