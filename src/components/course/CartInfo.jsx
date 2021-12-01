import React, { useState } from 'react';
import './CartInfo.css'

const CartInfo = (props) => {
    const [mblCart,setMblCart] = useState(true);
    const showMobileCartInfo = () => {
        setMblCart(!mblCart);
    }
    const cartProducts = props.cart;
    let totalPrice = cartProducts.reduce((sum, product) => sum + parseFloat(product.price), 0)
    totalPrice = totalPrice.toFixed(2);
    let discount = 0;
    let toBePaid = totalPrice;
    if (totalPrice > 50) {
        discount = 10;
        toBePaid = (totalPrice - discount).toFixed(2);
    }
    if (totalPrice > 100) {
        discount = 20;
        toBePaid = (totalPrice - discount).toFixed(2);
    }
    return (
        <>
            <div className={`cart-info ${mblCart ? '' : 'mbl-cart'}`}>
                <h3>Cart Info</h3>
                Course Selected : {cartProducts.length}<br />
                Total Price : $ {totalPrice}<br />
                Discount : $ {discount}<br />
                To Be Paid : $ {toBePaid} <br />
                <button className='gotopayment'>Go to Payment</button>
                <div className="added-items">
                    {
                        cartProducts.map((item) => {
                            return (
                                <div className="added-item">
                                    <div className="added-item-name">{item.title}</div>
                                    <div className="remove-added-item"><i class="fas fa-check"></i></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="mobile-cart-info" onClick={showMobileCartInfo}>
                <i class="fas fa-shopping-cart"></i>
                <span className="cart-len">{cartProducts.length}</span>
            </div>
        </>
    );
};

export default CartInfo;