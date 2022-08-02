import classes from "./category.module.css";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import Productt from "../../../components/Product/Product";
import db from "../../../utils/db";
import Product from "../../../models/Product";
function getProductCategory(props) {
  const  productCategory  = JSON.parse(props.productCategory);
  const category = productCategory[0].category;
  return (
    <>
      <div className={classes.header_wrapper}>
        <div className={classes.header_img}>
          <Link href="/">
            <img src="/main-img/nav_img.png" />
          </Link>
        </div>
        <div className={classes.header_searchBox}>
          <input type="text" placeholder=" Search for product/ category.." />
        </div>
      </div>

      <h3 className={classes.h3}>{category}</h3>

      <div className={classes.main_content}>
        {productCategory.map((product) => {
          const id = product._id;
          return (
            <Link href={`/products/${id}`} key={id}>
              <div className={classes.product_item}>
                <Productt
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default getProductCategory;

export async function getStaticProps(context) {
  await db.connect();
  const data = await Product.find({category: context.params.category});
  const productCategory = JSON.stringify(data);
  await db.disconnect();
  // const category = context.params.category;
  // const data = await fetch(
  //   `http://localhost:3000/api/products/category/${category}`
  // );
  // const productCategory = await data.json();
  return {
    props: {
      productCategory,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: "hanggiadung" } },
      { params: { category: "donoithat" } },
      { params: { category: "vanphongpham" } },
      { params: { category: "thucpham" } },
      { params: { category: "lamdep" } },
      { params: { category: "trangphucnu" } },
      { params: { category: "tuivagiay" } },
      { params: { category: "dulich" } },
      { params: { category: "trangphucnam" } },
      { params: { category: "dungculuutru" } },
      { params: { category: "trangphucmacnhavamactrong" } },
      { params: { category: "dungcubanan" } },
      { params: { category: "dugcunhatam" } },
      { params: { category: "dungcunhabep" } },
    ],
    fallback: true, // false or 'blocking'
  };
}
