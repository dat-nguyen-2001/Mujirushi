import classes from './cart.module.css';

import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer'
import Link from 'next/link';
import { useContext } from 'react';
import {Store} from '../../../utils/Store';



export default function index() {
    const {state, dispatch} = useContext(Store);
    const {cartItems} = state.cart;

  return (
    <>
    <div className={classes.cart_wrapper}>
    <Nav />

    <h2>GIỎ HÀNG</h2>

    {/* When there's no product in the cart */}
    {cartItems.length === 0 && (
        <div className={classes.cartItems_wrapper}>
            <img src='/noCartItem.jpg' />
            <p>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
            <Link href={'/products'}>
                <a className={classes.continue_shopping}>Tiếp tục mua sắm</a>
            </Link>
        </div>
    )}
    </div>

    <Footer />
    </>

  )
}
