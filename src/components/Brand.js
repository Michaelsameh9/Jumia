import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/Brand.css";
import { Form } from 'react-bootstrap/';
import { MdOutlineSearch } from "react-icons/md";
import Price from "../components/Price.js";

export default function Brand() {
    return (
        <div>
            <h1 className='brand-title'>
                BRAND
            </h1>
            <Form.Control
                type="search"
                placeholder="Search"
                className="search"
                aria-label="Search"
            />
            <MdOutlineSearch className='icon-search2' />
            <div className='label'>
                <label className='sidebar-label-container'>
                    <Form.Check aria-label="option 1" />
                    <span className='checkmark'>915 Generation</span>
                </label>
                <label className='sidebar-label-container'>
                    <Form.Check aria-label="option 1" />
                    <span className='checkmark'>ABC</span>
                </label>
                <label className='sidebar-label-container'>
                    <Form.Check aria-label="option 1" />
                    <span className='checkmark'>Abu Auf </span>
                </label>
                <label className='sidebar-label-container'>
                    <Form.Check aria-label="option 1" />
                    <span className='checkmark'>Alaseal</span>
                </label>
                <label className='sidebar-label-container'>
                    <Form.Check aria-label="option 1" />
                    <span className='checkmark'>Al Qahawi</span>
                </label>
                <label className='sidebar-label-container'>
                    <Form.Check aria-label="option 1" />
                    <span className='checkmark'>AL Ramalah</span>
                </label>
                <label className='sidebar-label-container'>
                    <Form.Check aria-label="option 1" />
                    <span className='checkmark'>AlRehab</span>
                </label>
                <label className='sidebar-label-container'>
                    <Form.Check aria-label="option 1" />
                    <span className='checkmark'>Arrow</span>
                </label>
                <label className='sidebar-label-container'>
                    <Form.Check aria-label="option 1" />
                    <span className='checkmark'>As Seen On Tv</span>
                </label>
                <label className='sidebar-label-container'>
                    <Form.Check aria-label="option 1" />
                    <span className='checkmark'>Balon</span>
                </label>
            </div>
            <div className="discount">
                <h1 className='discount-title'>
                    DISCOUNT
                </h1>
                <div className='label'>
                    <label className='sidebar-label-container'>
                        <Form.Check aria-label="option 1" />
                        <span className='checkmark'>Show only discounted items</span>
                    </label>
                </div>
            </div>
            <Price />
        </div>
    )
}
