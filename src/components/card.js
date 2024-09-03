import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/card.css";

import { FaRegHeart } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import { Products } from "./Data";
export default function Card() {
    return (
        <>
            {Products.map((i) =>
                <div className='card-products' key={i.id}>
                    <a href='/' className='card-ref'>
                        <img src={i.img} alt="" className='img-pro' />
                        <span className='title-header'>{i.title1}</span>
                        <div className='bagr-icon'>
                            <FaRegHeart className='card-icon' />
                        </div>
                        <p className='card-detalis'>{i.title2}</p>
                        <div className='card-price'>
                            <div className='price'>{i.price}
                                <del>{i.prevprice}</del>
                                <p className='descount'>{i.descount}</p>
                            </div>
                        </div>
                        <div>
                            {i.star1}{i.star2}{i.star3}{i.star4}{i.star5}
                        </div>
                        <img src={i.logo} alt="jumia express" className='express' />
                    </a>
                    <div className={i.Sponsored}>
                        <p className='Sponsored'>Sponsored</p>
                        <AiOutlineExclamationCircle />
                    </div>
                    <button className='add'>
                        ADD TO CART
                    </button>
                </div>
            )}
        </>
    )
}
