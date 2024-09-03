// src/components/Filter.js
import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import "./test.css";


const Filter = ({ onFilterChange, categories, brands, maxPrice }) => {
    const [sortOption, setSortOption] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedRatings, setSelectedRatings] = useState([]);
    const [discount, setDiscount] = useState(false);
    const [priceRange, setPriceRange] = useState([1, maxPrice]);

    const sortOptions = [
        { value: 'all', label: 'All' },
        { value: 'newest', label: 'Newest Arrivals' },
        { value: 'priceLowToHigh', label: 'Price: Low to High' },
        { value: 'priceHighToLow', label: 'Price: High to Low' },
        { value: 'rating', label: 'Product Rating' },
    ];

    const handleSortChange = (event) => {
        const selectedOption = sortOptions.find(option => option.value === event.target.value);
        setSortOption(selectedOption);
        onFilterChange({ sort: selectedOption, category: selectedCategory, brands: selectedBrands, rating: selectedRatings, discount, priceRange });
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        onFilterChange({ sort: sortOption, category, brands: selectedBrands, rating: selectedRatings, discount, priceRange });
    };

    const handleBrandChange = (brand) => {
        setSelectedBrands(prevBrands => {
            const newBrands = prevBrands.includes(brand)
                ? prevBrands.filter(b => b !== brand)
                : [...prevBrands, brand];
            onFilterChange({ sort: sortOption, category: selectedCategory, brands: newBrands, rating: selectedRatings, discount, priceRange });
            return newBrands;
        });
    };

    const handleRatingChange = (star) => {
        setSelectedRatings(prevRatings => {
            const newRatings = prevRatings.includes(star)
                ? prevRatings.filter(r => r !== star)
                : [...prevRatings, star];
            onFilterChange({ sort: sortOption, category: selectedCategory, brands: selectedBrands, rating: newRatings, discount, priceRange });
            return newRatings;
        });
    };

    const handleDiscountChange = (event) => {
        setDiscount(event.target.checked);
        onFilterChange({ sort: sortOption, category: selectedCategory, brands: selectedBrands, rating: selectedRatings, discount: event.target.checked, priceRange });
    };

    const handlePriceRangeChange = (range) => {
        setPriceRange(range);
        onFilterChange({ sort: sortOption, category: selectedCategory, brands: selectedBrands, rating: selectedRatings, discount, priceRange: range });
    };

    return (
        <div className="filter-container">
            <div className='Sort'>
                <label>Sort By:</label>
                <select value={sortOption.value || ''} onChange={handleSortChange}>
                    {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className='Sort'>
                <p className='title-Category'>CATEGORY</p>
                <ul className='link-cat'>
                    <li className='all'
                        style={{ cursor: 'pointer', fontWeight: selectedCategory === '' ? 'bold' : 'normal' }}
                        onClick={() => handleCategoryClick('')}
                    >
                        Supermarket
                    </li>
                    {categories.map((category) => (
                        <li
                            className='link-cat'
                            key={category}
                            style={{ cursor: 'pointer', fontWeight: selectedCategory === category ? 'bold' : 'normal' }}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='Sort'>
                <p className='title-Category'>BRAND</p>
                <div className='brand'>
                {brands.map((brand) => (
                    <div key={brand}>
                        <label className='p-prand'>
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(brand)}
                                onChange={() => handleBrandChange(brand)}
                            />
                            {brand}
                        </label>
                    </div>
                ))}
                </div>
            </div>
            <div className='Sort'>
            <p className='title-Category'>DISCOUNT</p>
                <label className='p-prand'>
                    <input
                        type="checkbox"
                        checked={discount}
                        onChange={handleDiscountChange}
                    />
                    Show only discounted items
                </label>
            </div>
            <div  className='Sort'>
            <p className='title-Category'>PRICE (EGP)</p>
                <ReactSlider
                    className="price-slider"
                    thumbClassName="thumb"
                    trackClassName="track"
                    min={1}
                    max={maxPrice}
                    value={priceRange}
                    onChange={handlePriceRangeChange}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                />
                <input
                    type='number'
                    min={priceRange[0]}
                    className='min'
                    value={priceRange[0]}
                />
                _
                <input
                    type='number'
                    max={priceRange[1]}
                    className='max'
                    value={priceRange[1]}
                />
            </div>
            <div  className='Sort'>
            <p className='title-Category'>PRODUCT RATING (EGP)</p>
                {[1, 2, 3, 4, 5].map(star => (
                    <div key={star}>
                        <label className='p-prand'>
                            <input
                                type="checkbox"
                                checked={selectedRatings.includes(star)}
                                onChange={() => handleRatingChange(star)}
                            />
                            {star} Star
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
