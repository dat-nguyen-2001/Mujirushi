import classes from "./Nav.module.css";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "next-auth/react";

import Link from "next/link";
import { Store } from "../../utils/Store";
import { useContext, useEffect, useState } from "react";

import { useSession } from "next-auth/react";

function Nav() {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(
      cart.cartItems.reduce((num, item) => num + item.qty, 0),
      []
    );
  });

  const { data: session } = useSession();
  return (
    <>
      <div className={classes.nav_container}>
        <div className={classes.dropdownMenu}>
          <DensityMediumIcon />
        </div>
        <div className={classes.nav_img}>
          <Link href="/">
            <a>
              <img src="/main-img/nav_img.png" alt="Muji nav_bar logo" />
            </a>
          </Link>
        </div>

        <div className={classes.nav_user}>
          <div className={classes.login}>
            <div>
              <Link href="/login">
                <a>
                  <PersonRoundedIcon />
                </a>
              </Link>
            </div>
            <div className={classes.login_text}>
              <Link href="/login">
                <a>{session?.user ? `${session.user.name}` : "Đăng nhập"}</a>
              </Link>
            </div>
          </div>
          <div className={classes.cart}>
            <div>
              <Link href="/checkout/cart">
                <a>
                  <ShoppingCartRoundedIcon />
                  {cartItemsCount > 0 && (
                    <span className={classes.cartItemNumber}>
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
            </div>
            <div className={classes.cart_text}>
              <Link href="/checkout/cart">
                <a>Giỏ hàng</a>
              </Link>
            </div>
          </div>

          {session?.user ? (
            <div className={classes.info_logout} onClick={() => signOut()}>
              <div>
                <a>
                  <LogoutIcon />
                </a>
              </div>
              <div>
                <a>Đăng xuất</a>
              </div>
            </div>
          ) : (
            <div className={classes.info_logout}>
              <div>
                <Link href="/about">
                  <a>
                    <ErrorOutlineRoundedIcon />
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/about">
                  <a>Về MUJI</a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={classes.nav_options_ipad}>
        <div className={classes.options_ipad_item}>衣料品</div>
        <div className={classes.options_ipad_item}>生活雑貨</div>
        <div className={classes.options_ipad_item}>食品</div>
      </div>
    </>
  );
}

export default Nav;
