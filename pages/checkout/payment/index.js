import classes from './payment.module.css';
import {useContext, useEffect, useState} from 'react';
import {Store} from '../../../utils/Store';
import Link from 'next/link'
import Nav from '../../../components/Nav/Nav';
import WestIcon from '@mui/icons-material/West';

function Payment() {
    const {state, dispatch} = useContext(Store);
    const {cart : {cartItems}} = state;
    const [totalAmount, setTotalAmount] = useState(0)
    useEffect(() => {
        setTotalAmount(cartItems.reduce((amount, item) => amount + item.qty * item.price, 0))
    }, []);
  return (
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
    
  )
}

export default Payment;
