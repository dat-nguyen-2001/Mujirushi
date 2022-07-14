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
    <>
    <div className={classes.background_wrapper}>
    <div className={classes.nav}><Nav /></div>
    <div className={classes.shipping_address}>
        <h4>ĐỊA CHỈ GIAO HÀNG</h4>
        <div className={classes.address_item}>
            <p>Họ và tên người nhận</p>
            <input type={'text'}></input>
        </div>
        <div className={classes.address_item}>
            <p>Số điện thoại</p>
            <input type={'text'}></input>
        </div>
        <div className={classes.address_item}>
            <p>Địa chỉ email</p>
            <input type={'text'}></input>
        </div>
        <div className={classes.address_item}>
            <p>Quốc gia</p>
            <input type={'text'}></input>
        </div>
        <div className={classes.address_item}>
            <p>Tỉnh/Thành phố</p>
            <input type={'text'}></input>
        </div>
        <div className={classes.address_item}>
            <p>Quận/Huyện</p>
            <input type={'text'}></input>
        </div>
        <div className={classes.address_item}>
            <p>Phường/Xã</p>
            <input type={'text'}></input>
        </div>
        <div className={classes.address_item}>
            <p>Địa chỉ cụ thể</p>
            <input type={'text'}></input>
        </div>  
    </div>

    <div className={classes.payment_methods}>
        <h4>PHƯƠNG THỨC THANH TOÁN</h4>
        <input type="radio" id="zalopay" name="payment_method" value="zalopay"/>
        <label for="zalopay">
            <img src='https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_zalopayapp.svg?q=101093'/>
            Thanh toán bằng ZaloPay
        </label>
        <br/><br/>
        <input type="radio" id="card" name="payment_method" value="card"/>
        <label for="card">
            <img src='https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_zalopayatm.svg?q=101093'/>
            Thanh toán qua thẻ tín dụng/ thẻ ngân hàng
        </label>
        <br/><br/>
        <input type="radio" id="cash" name="payment_method" value="cash"/>
        <label for="cash">
            <img src='https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_cashondelivery.svg?q=101093'/>
            Thanh toán băng tiền mặt khi nhận hàng
        </label>
    </div>
    <div className={classes.bottom_lengthen}></div>
    </div>

    <div className={classes.sidebar}>
    <div className={classes.sidebar_container}>
        <div className={classes.checkout_top}>
            <div className={classes.checkout_total_amount}>
                <div className={classes.checkout_left}>Thành tiền</div>
                <div className={classes.checkout_right}>{totalAmount}đ</div>
            </div>
            <div className={classes.checkout_shipping_fee}>
                <div className={classes.checkout_left}>Phí vận chuyển</div>
                <div className={classes.checkout_right}>{totalAmount/50}đ</div>
            </div>
            <div className={classes.checkout_final_amount}>
                <div className={classes.checkout_left}>Tổng số tiền</div>
                <div className={classes.checkout_right}>{totalAmount * 1.02}đ</div>
            </div>
        </div>
        <div className={classes.checkout_bottom}>
            <Link href={'/checkout/cart'}>
                <div className={classes.back_to_cart}>
                    <WestIcon />
                    <p>Quay lại giỏ hàng</p>
                </div>
            </Link>
            <div className={classes.space}></div>
            <div className={classes.confirm}>
                <button>XÁC NHẬN THANH TOÁN</button>
            </div>
        </div>
    </div>
    </div>

</>
    <Footer />
    </>

  )
}

export default dynamic(() => Promise.resolve(index), {ssr: false})