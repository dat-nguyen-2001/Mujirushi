import classes from "./cart.module.css";

import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Store } from "../../../utils/Store";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";

function Cart() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const totalAmount = cartItems.reduce(
    (amount, item) => amount + item.qty * item.price,
    0
  );
  const totalQuantity = cartItems.reduce(
    (amount, item) => amount + item.qty,
    0
  );
  const shippingFee = totalAmount / 50;
  const finalAmount = totalAmount + shippingFee;

  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (!session?.user) {
      router.push(redirect || "/login");
    }
  }, [router, session, redirect]);

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <Nav />

      <div className={classes.cart_wrapper}>
        <h3>GIỎ HÀNG</h3>

        {/* When there's no product in the cart */}
        {cartItems.length === 0 ? (
          <div className={classes.cartItems_wrapper}>
            <img src="/noCartItem.jpg" />
            <p>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
            <Link href={"/products"}>
              <a className={classes.continue_shopping}>Tiếp tục mua sắm</a>
            </Link>
          </div>
        ) : 
        // When there is product(s) in the cart
        (
          <div className={classes.cart_ui_content}>
            <div className={classes.cart_left}>
              <div>
                <div className={classes.header_cart_item}>
                  <div className={classes.flex_5_8}>
                    <h4>Sản phẩm</h4>
                  </div>
                  <div className={classes.flex_1_8}>
                    <h4>Số lượng</h4>
                  </div>
                  <div className={classes.flex_1_8}>
                    <h4>Thành tiền</h4>
                  </div>
                  <div className={classes.flex_1_8}></div>
                </div>
                <div className={classes.cart_item_wrapper}>
                  {cartItems.map((item) => (
                    <>
                      <div className={classes.cart_item}>
                        <div className={classes.cart_item_img}>
                          <Link href={`/products/${item._id}`}>
                            <img src={item.image}></img>
                          </Link>
                        </div>
                        <div className={classes.cart_item_info}>
                          <div className={classes.item_info}>
                            <div>
                              <Link href={`/products/${item._id}`}>
                                <h5>{item.title}</h5>
                              </Link>
                            </div>
                            <div className={classes.item_price}>
                              {numberWithCommas(item.price)} đ
                            </div>
                          </div>
                          <div className={classes.item_number}>
                            <div className={classes.item_quantity}>
                              <div
                                onClick={() =>
                                  dispatch({
                                    type: "DECREASE_QUANTITY",
                                    payload: item._id,
                                  })
                                }
                              >
                                <ArrowDownwardIcon className={classes.change_quantity_icon}/>
                              </div>
                              {item.qty}
                              <div
                                onClick={() =>
                                  dispatch({
                                    type: "INCREASE_QUANTITY",
                                    payload: item._id,
                                  })
                                }
                              >
                                <ArrowUpwardIcon className={classes.change_quantity_icon} />
                              </div>
                            </div>
                            <div className={classes.item_total_price}>
                              {item.qty * item.price} vnd
                            </div>
                          </div>
                        </div>
                        <div
                          className={classes.cart_item_remove}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item._id,
                            })
                          }
                        >
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
                  <div className={classes.title_cart_right}>
                    {totalAmount} vnd
                  </div>
                </div>
                <div className={classes.shipping_fee}>
                  <div className={classes.title_cart_left}>Phí vận chuyển</div>
                  <div className={classes.title_cart_right}>
                    {shippingFee} vnd
                  </div>
                </div>
                <div className={classes.final_amount}>
                  <div className={classes.title_cart_left}>
                    Tổng({totalQuantity} sản phẩm)
                  </div>
                  <div className={classes.title_cart_right}>
                    {finalAmount} vnd
                  </div>
                </div>
              </div>
              <div className={classes.checkout_button}>
                <Link href={"/checkout/payment"}>
                  <button>THANH TOÁN</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
