import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../navBar';
import Avatar from '../avatar';

import '../../styles/mainScreen.css';
import '../../styles/checkoutScreen.css';
import '../../styles/button.css';

import { tryCatch, ArrayExtension } from '../../helper/util';
import Button from '../button';
import Card from '../card';

const format = (new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})).format;

const CheckoutDisplayOrders = ({ user }) => {
    const [cart, setCart] = useState(new ArrayExtension());

    const updateItemCount = (item, add) => {
        console.log("Cart: ", cart);

        tryCatch(async () => {
            let newCount = item.count + add;
            let newCart = new ArrayExtension(...cart);
            if (newCount < 1) {
                newCount = 0;
                const index = newCart.indexOf(item);
                newCart = newCart.remove(index);
            } else {
                newCart = new ArrayExtension(...cart);
                newCart.forEach(i => {
                    if (i.name === item.name) {
                        i.count = newCount;
                    }
                });
            }
            const response = await axios.put('/api/cart/update', {
                userId: user._id,
                newCart,
            });
            setCart(new ArrayExtension(...response.data));
        })();
    }

    useEffect(() => {
        setCart(user.cart);
    }, [user.cart]);

    return (
        <div className='checkout-display-orders'>
            {user.cart && user.cart.map((item, index) => {
                return (
                    <Card className='order' key={index}>
                        <img src="\images\preview_food.jpg" alt="cart_food_image" />
                        <div className='cart-item-info'>
                            <div className="dish-details">
                                <h3>{item.name}</h3>
                                <h4>Chef: {`${user.firstName} ${user.lastName}`}</h4>
                            </div>
                            <div className="price-details">
                                <p>Qty: <span>{item.count}</span></p>
                                <div>
                                    <Button label='+' onClick={() => updateItemCount(item, 1)} />
                                    <Button label='-' onClick={() => updateItemCount(item, -1)} />
                                </div>
                                <p>Price: <span>{format(item.price * item.count)}</span></p>
                                <p>ETA: <span>3:30PM</span></p>
                                <p>03/3/2022</p>
                            </div>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}


const OrderSummaryItems = (props) => {
    const { cart, summary: { cleanUpService, serviceFee } } = props;
    return (
        <div className='checkout-display-order-summary-items'>
            {cart && cart.length > 0 && (
                <>
                    <div className='checkout-display-order-summary-item'>
                        <p>Items:</p>
                        <p>{cart && cart.length > 0 ? format(cart.reduce((prev, next) => prev.price + next.price)) : "0"}</p>
                    </div>
                    <div className='checkout-display-order-summary-item'>
                        <p>Clean Up Service:</p>
                        <p>{format(cleanUpService)}</p>
                    </div>
                    <div className='checkout-display-order-summary-item'>
                        <p>Service Fee:</p>
                        <p>{format(serviceFee)}</p>
                    </div>
                </>
            )}
        </div>
    );
}


const CheckoutDisplaySummary = ({ user }) => {
    const { cart } = user;
    const cartTotal = cart ? cart.reduce((acc, curr) => acc + curr.price, 0) : 0;
    const serviceFee = cartTotal * 0.2;

    // Tax needs to be found for the region that the user is in.
    const cleanUpService = cartTotal * 0.03;
    const totalBeforeTax = cartTotal + serviceFee + cleanUpService;

    const tax = totalBeforeTax * 0.08;
    const totalWithTax = totalBeforeTax + tax + serviceFee + cleanUpService;

    return (
        <div className='checkout-display-order-summary'>
            <h2>Order Summary</h2>
            <OrderSummaryItems cart={cart} summary={{ cartTotal, cleanUpService, serviceFee }} />

            <div className='checkout-display-order-item'>
                <p>Total Before Tax:</p>
                <p>{format(totalBeforeTax)}</p>
            </div>
            <div className='checkout-display-order-item'>
                <p>Estimated Tax:</p>
                <p>{format(tax)}</p>
            </div>
            <div className='checkout-display-order-total'>
                <h3>Order Total:</h3>
                <h3>{format(totalWithTax)}</h3>
            </div>

            <Button label='Place Order' />
        </div>
    )
}

const CheckoutScreen = ({ navLinks }) => {
    const [user, setUser] = useState({});
    const location = useLocation();

    useEffect(() => {
        tryCatch(async () => {
            if (location.state === null) {
                const response = await axios.get('/api/auth/login');
                if (response.data) {
                    setUser(response.data);
                }
            } else {
                setUser(location.state.user);
            }
        })();
    }, []);

    return (
        <div className='main-screen'>
            <div className="main-screen-header" />
            <div className="main-screen-body">
                <NavBar user={user} />
                <Avatar user={user} navLinks={navLinks} />
                <div className='checkout'>
                    <CheckoutDisplayOrders user={user} />
                    <CheckoutDisplaySummary user={user} />
                </div>
            </div>
        </div>
    )
}

export default CheckoutScreen