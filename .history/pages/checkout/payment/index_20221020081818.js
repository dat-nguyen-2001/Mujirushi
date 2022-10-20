import classes from "./payment.module.css";

import Nav from "../../../components/Nav/Nav";

import Modal from "../../../components/Modal/Modal";
import WestIcon from "@mui/icons-material/West";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Store } from "../../../utils/Store";
import React from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Payment() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: {cartItems, address, paymentMethod }
  } = state;
  console.log()
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(
      cartItems.reduce((amount, item) => amount + item.qty * item.price, 0)
    );
  }, []);
  const shippingFee = totalAmount / 50;
  const finalAmount = totalAmount + shippingFee;

  const [isOpen, setIsOpen] = useState(false);


  const capturePaymentMethod = (e) => {
    dispatch({type:"SET_PAYMENT_METHOD", payload: e.target.value})
  }

  const getName =(e) => {
    dispatch({type:"SET_NAME", payload: e.target.value})
  }
  const getPhone =(e) => {
    dispatch({type:"SET_PHONE", payload: e.target.value})
  }
  const getEmail =(e) => {
    dispatch({type:"SET_EMAIL", payload: e.target.value})
  }
  const getCountry =(e) => {
    dispatch({type:"SET_COUNTRY", payload: e.target.value})
  }
  const getCity =(e) => {
    dispatch({type:"SET_CITY", payload: e.target.value})
  }
  const getDistrict =(e) => {
    dispatch({type:"SET_DISTRICT", payload: e.target.value})
  }
  const getStreet =(e) => {
    dispatch({type:"SET_STREET", payload: e.target.value})
  }
  const getHouseNumber =(e) => {
    dispatch({type:"SET_HOUSE_NUMBER", payload: e.target.value})
  }

   async function purchaseHandler() {
    if(Object.values(address).includes('')) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }
    if(paymentMethod==='') {
      alert('Vui lòng chọn phương thức thanh toán');
      return;
    }

    try {
      await axios.post('/api/orders', {
        orderItems: cartItems,
        address,
        paymentMethod,
        totalAmount,
        shippingFee,
        finalAmount,
      });
      dispatch({type:'RESET_CART'})
      Cookies.set(
        'cart',
        JSON.stringify({
          cartItems: [],
          address: {
            name: "",
            phone: "",
            email: "",
            country: "",
            city: "",
            district: "",
            street: "",
            houseNumber: "",
          },
          paymentMethod:''
        })
      );
    } catch (err) {
      alert(err)
    }

    setIsOpen(true);
  }

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <div className={classes.background_wrapper}>
        <div className={classes.nav}>
          <Nav />
        </div>
        <div className={classes.shipping_address}>
          <h4>ĐỊA CHỈ GIAO HÀNG</h4>
          <div className={classes.address_item}>
            <p>Họ và tên người nhận</p>
            <input type={"text"} onChange={getName}></input>
          </div>
          <div className={classes.address_item}>
            <p>Số điện thoại</p>
            <input type={"text"} onChange={getPhone}></input>
          </div>
          <div className={classes.address_item}>
            <p>Tỉnh/Thành phố</p>
            <input type={"text"} onChange={getCity}></input>
          </div>
          <div className={classes.address_item}>
            <p>Quận/Huyện</p>
            <input type={"text"} onChange={getDistrict}></input>
          </div>
          <div className={classes.address_item}>
            <p>Tên đường</p>
            <input type={"text"} onChange={getStreet}></input>
          </div>
          <div className={classes.address_item}>
            <p>Số nhà</p>
            <input type={"text"} onChange={getHouseNumber}></input>
          </div>
        </div>

        <div className={classes.payment_methods}>
          <h4>PHƯƠNG THỨC THANH TOÁN</h4>
          <input
            type="radio"
            id="zalopay"
            name="payment_method"
            value="zalopay"
            onChange={capturePaymentMethod}
          />
          <label htmlFor="zalopay">
            <img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_zalopayapp.svg?q=101093" />
            Thanh toán bằng ZaloPay
          </label>
          <br />
          <br />
          <input
            type="radio"
            id="card"
            name="payment_method"
            value="card"
            onChange={capturePaymentMethod}
          />
          <label htmlFor="card">
            <img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_zalopayatm.svg?q=101093" />
            Thanh toán qua thẻ tín dụng/ thẻ ngân hàng
          </label>
          <br />
          <br />
          <input
            type="radio"
            id="cash"
            name="payment_method"
            value="cash"
            onChange={capturePaymentMethod}
          />
          <label htmlFor="cash">
            <img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_cashondelivery.svg?q=101093" />
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
              <div className={classes.checkout_right}>{numberWithCommas(totalAmount)}đ</div>
            </div>
            <div className={classes.checkout_shipping_fee}>
              <div className={classes.checkout_left}>Phí vận chuyển</div>
              <div className={classes.checkout_right}>{numberWithCommas(totalAmount / 50)}đ</div>
            </div>
            <div className={classes.checkout_final_amount}>
              <div className={classes.checkout_left}>Tổng số tiền</div>
              <div className={classes.checkout_right}>
                {numberWithCommas(totalAmount * 1.02)}đ
              </div>
            </div>
          </div>
          <div className={classes.checkout_bottom}>
            <Link href={"/checkout/cart"}>
              <div className={classes.back_to_cart}>
                <WestIcon />
                <p>Quay lại giỏ hàng</p>
              </div>
            </Link>
            <div className={classes.space}></div>
            <div className={classes.confirm}>
              <button onClick={purchaseHandler}>
                XÁC NHẬN THANH TOÁN
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={isOpen}>
        <p>
          Đơn hàng của quý khách đã được tiếp nhận. Cảm ơn quý khách đã mua hàng
          tại Muji
        </p>
      </Modal>
    </>
  );
}

export default Payment;
