// src/components/Pagination.js
import React from 'react';
import './Pagination.css'; // إضافة ملف CSS إذا كنت تريد تخصيص الأنماط

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className='pagination-container'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='pagination-button'
      >
        &laquo; Previous
      </button>
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`pagination-button ${number === currentPage ? 'active' : ''}`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='pagination-button'
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default Pagination;
