import classes from "./productInfo.module.css";

import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import { useContext } from "react";
import { Store } from "../../../utils/Store";
import db from "../../../utils/db";
import Product from "../../../models/Product";
import { ObjectID } from "bson";

function GetProductInfo({product}) {
  const { state, dispatch } = useContext(Store);
  // const product = props.product;
  const subImgs = product.subImg;
  const category = product.category;

  const addToCartHandler = function () {
    if (product.countInStock <= 0) {
      alert("Product out of stock");
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: product });
    product.countInStock -= 1;
  };

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      <Nav />
      <Link href={"/products"}>
        <h2 className={classes.h2}>TẤT CẢ SẢN PHẨM</h2>
      </Link>
      <section className={classes.product_detail_wrapper}>
        <img src={product.image} alt={product.title} />
        <div className={classes.product_details}>
          <h1>{product.title}</h1>
          <p>
            <b>{numberWithCommas(product.price)}</b> đ
          </p>
          <Link href={`/products/category/${category}`}>
            <div className={classes.product_category}>
              <p>{category}</p>
            </div>
          </Link>
          <div className={classes.addToCart}>
            <button
              className={classes.addToCart_btn}
              onClick={addToCartHandler}
            >
              <span>THÊM VÀO GIỎ HÀNG</span>
            </button>
          </div>
        </div>
      </section>

      {subImgs && (
        <div className={classes.subImg}>
          {[...subImgs].map((subImg) => {
            return (
              <img
                src={subImg}
                className={classes.subImg_item}
                key={Math.random()}
              />
            );
          })}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default GetProductInfo;

export async function getStaticProps(context) {
  const id = new ObjectID(context.params.id);
  await db.connect();
  const res = await Product.find({ _id: id });
  const data = JSON.stringify(res[0]);
  const product = JSON.parse(data);
  await db.disconnect();
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  await db.connect();
  const res = await Product.find();
  const products = Object.values(res);
  await db.disconnect();
  const paths = products.map((product) => {
    return {
      params: { id: product._id.toString() },
    };
  });
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}
