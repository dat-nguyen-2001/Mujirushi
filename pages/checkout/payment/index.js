import classes from './payment.module.css';
import React from 'react';
import {useContext, useEffect, useState} from 'react';
import {Store} from '../../../utils/Store';
import Link from 'next/link';

import Nav from '../../../components/Nav/Nav';
import Modal from '../../../components/Modal/Modal';
import WestIcon from '@mui/icons-material/West';

function Payment() {
    const {state, dispatch} = useContext(Store);
    const {cart : {cartItems}, address} = state;
    const [totalAmount, setTotalAmount] = useState(0)
    useEffect(() => {
        setTotalAmount(cartItems.reduce((amount, item) => amount + item.qty * item.price, 0))
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const setName = (val) => {
        dispatch({type: 'SET_NAME', payload: val.target.value})
    }

    const setPhone = (val) => {
        dispatch({type: 'SET_PHONE', payload: val.target.value})
    }

    const setEmail = (val) => {
        dispatch({type: 'SET_EMAIL', payload: val.target.value})
    }

    const setCountry = (val) => {
        dispatch({type: 'SET_COUNTRY', payload: val.target.value})
    }

    const setCity = (val) => {
        dispatch({type: 'SET_CITY', payload: val.target.value})
    }

    const setDistrict = (val) => {
        dispatch({type: 'SET_DISTRICT', payload: val.target.value})
    }

    const setStreet = (val) => {
        dispatch({type: 'SET_STREET', payload: val.target.value})
    }

    const setHouseNumber = (val) => {
        dispatch({type: 'SET_HOUSE_NUMBER', payload: val.target.value})
    }


    const purchase = function() {
        if(Object.values(address).includes('')) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }
        setIsOpen(true);
    }
  return (
<>
    <div className={classes.background_wrapper}>
    <div className={classes.nav}> <Nav /></div>
    <div className={classes.shipping_address}>
        <h4>ĐỊA CHỈ GIAO HÀNG</h4>
        <div className={classes.address_item}>
            <p>Họ và tên người nhận</p>
            <input type={'text'} onChange={setName}></input>
        </div>
        <div className={classes.address_item}>
            <p>Số điện thoại</p>
            <input type={'text'} onChange={setPhone}></input>
        </div>
        <div className={classes.address_item}>
            <p>Địa chỉ email</p>
            <input type={'text'} onChange={setEmail}></input>
        </div>
        <div className={classes.address_item}>
            <p>Quốc gia</p>
            <input type={'text'} onChange={setCountry}></input>
        </div>
        <div className={classes.address_item}>
            <p>Tỉnh/Thành phố</p>
            <input type={'text'} onChange={setCity}></input>
        </div>
        <div className={classes.address_item}>
            <p>Quận/Huyện</p>
            <input type={'text'} onChange={setDistrict}></input>
        </div>
        <div className={classes.address_item}>
            <p>Tên đường</p>
            <input type={'text'} onChange={setStreet}></input>
        </div>
        <div className={classes.address_item}>
            <p>Số nhà</p>
            <input type={'text'} onChange={setHouseNumber}></input>
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
                <button onClick={purchase}>XÁC NHẬN THANH TOÁN</button>
            </div>
        </div>
    </div>
    </div>
    <Modal open={isOpen}>
        <p>Đơn hàng của quý khách đã được tiếp nhận.
            Cảm ơn quý khách đã mua hàng tại Muji
        </p>
    </Modal>
</>
    
  )
}

export default Payment;
