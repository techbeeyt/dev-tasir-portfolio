import React, { useState } from 'react';
import './CourseCard.css'

const CourseCard = (props) => {
    const [cartBtnText, setCartBtnText] = useState(' Add to cart');
    const [cartBtnClass, setCartBtnClass] = useState('cart-btn');
    const [icon, setIcon] = useState('cart-plus')
    const [state, setState] = useState(true);
    const onClickFunc = () => {
        setCartBtnText('Added to cart');
        setCartBtnClass('cart-btn cart-added');
        setIcon('check');
        setState(false);
    }
    const {key,title,price,img} = props.product ;
    return (
        <>
            <div>
                <div className='course-details'>
                    <div><img src={img} alt="" /></div>
                    <div className='c-details'>
                        <h3>{title}</h3>
                        <h5 style={{color : '#f0f0f0'}}>{`$ ${price}`}</h5>
                        <button onClick={() => { if (state) { props.addToCart(props.product);} onClickFunc();}} className={cartBtnClass}><i class={`fas fa-${icon}`}></i>{cartBtnText}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseCard;