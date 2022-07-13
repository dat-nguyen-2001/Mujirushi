import classes from './cart.module.css';

import Nav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer'
import Link from 'next/link';
import { useContext } from 'react';
import {Store} from '../../../utils/Store';
import DeleteIcon from '@mui/icons-material/Delete';
import dynamic from 'next/dynamic';


function index() {
    const {state, dispatch} = useContext(Store);
    const {cart : {cartItems}} = state;
    const totalAmount = cartItems.reduce((amount, item) => amount + item.qty * item.price, 0);
    const shippingFee = totalAmount/50;
    const finalAmount = totalAmount + shippingFee;
  return (
    <>
        <Nav />

    <div className={classes.cart_wrapper}>
    <h2>GIỎ HÀNG</h2>

    {/* When there's no product in the cart */}
    {cartItems.length === 0 ? (
        <div className={classes.cartItems_wrapper}>
            <img src='/noCartItem.jpg' />
            <p>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
            <Link href={'/products'}>
                <a className={classes.continue_shopping}>Tiếp tục mua sắm</a>
            </Link>
        </div>
    ):
    (
      <div className={classes.cart_ui_content}>
        <div className={classes.cart_left}>
          <div>
            <div className={classes.header_cart_item}>
              <div className={classes.flex_5_8}><h3>Sản phẩm</h3></div>
              <div className={classes.flex_1_8}><h3>Số lượng</h3></div>
              <div className={classes.flex_1_8}><h3>Thành tiền</h3></div>
              <div className={classes.flex_1_8}></div>
            </div>
            <div className={classes.cart_item_wrapper}>
              {cartItems.map(item => (
                <>
                <div className={classes.cart_item}>
                  <div className={classes.cart_item_img}>
                    <Link href={`/products/${item._id}`}><img src={item.image}></img></Link>
                  </div>
                  <div className={classes.cart_item_info}>
                    <div className={classes.item_info}>
                      <div>
                        <Link href={`/products/${item._id}`}><h4>{item.title}</h4></Link>
                      </div>
                      <div className={classes.item_price}>
                        {item.price} vnd
                      </div>
                    </div>
                    <div className={classes.item_number}>
                      <div className={classes.item_quantity}>{item.qty}</div>
                      <div className={classes.item_total_price}>{item.qty * item.price} vnd</div>
                    </div>
                  </div>
                  <div className={classes.cart_item_remove}>
                    <DeleteIcon />
                  </div>
                </div>
                <div className={classes.border_item}></div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.cart_right}>
          <div className={classes.cart_summary}>
            <div className={classes.total_amount}>
              <div className={classes.title_cart_left}>Thành tiền</div>
              <div className={classes.title_cart_right}>{totalAmount} vnd</div>
            </div>
            <div className={classes.shipping_fee}>
              <div className={classes.title_cart_left}>Phí vận chuyển</div>
              <div className={classes.title_cart_right}>{shippingFee} vnd</div>
            </div>
            <div className={classes.final_amount}>
              <div className={classes.title_cart_left}>Tổng số tiền</div>
              <div className={classes.title_cart_right}>{finalAmount} vnd</div>
            </div>
          </div>
          <div className={classes.checkout_button}>
            <Link href={'/checkout/payment'}>
              <button>THANH TOÁN</button>
            </Link>
          </div>
        </div>

      </div>
    )}
    
    </div>

    <Footer />
    </>

  )
}

export default dynamic(() => Promise.resolve(index), {ssr: false})