import classes from "./products.module.css";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import Productt from "../../components/Product/Product";
import { useState } from "react";
import Product from "../../models/Product";
import db from "../../utils/db";
import { useRouter } from 'next/router'


function Products({ products, query }) {
  const productss = query.search ? JSON.parse(products).filter(product => product.title.includes((query.search).toUpperCase())): JSON.parse(products);
  const [numOfProducts, setNumOfProducts] = useState(20);


  const loadMoreHandler = function () {
    setNumOfProducts(numOfProducts + 20);
  };

  const productsList = productss.slice(0, numOfProducts);

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [search, setSearch] = useState('');
  const router = useRouter();
  const searchInput = document.getElementById('searchInput')
  const searchHandler = function(e) {
    e.preventDefault();
    router.push(`/products?search=${search}`)
  }

  return (
    <>
      <Head>
        <title>DANH MỤC SẢN PHẨM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/main-img/logo.webp" />
      </Head>
      <div className={classes.header_wrapper}>
        <div className={classes.header_img}>
          <Link href="/">
            <img src="/main-img/nav_img.png" />
          </Link>
        </div>
        <form className={classes.header_searchBox} onSubmit={searchHandler}>
          <input type="text" placeholder="Tìm kiếm tên sản phẩm / danh mục ..." onChange={(e) => setSearch(e.currentTarget.value)}/>
        </form>
      </div>
      <h3 className={classes.h3}>
        <Link href="/">Trang Chủ</Link>
      </h3>
      <div className={classes.category_list}>
        <ul className={classes.common_search_options}>
          <Link href="/products/category/hanggiadung">
            <li>HÀNG GIA DỤNG</li>
          </Link>
          <Link href="/products/category/donoithat">
            <li>ĐỒ NỘI THẤT</li>
          </Link>
          <Link href="/products/category/vanphongpham">
            <li>VĂN PHÒNG PHẨM</li>
          </Link>
          <Link href="/products/category/thucpham">
            <li>THỰC PHẨM</li>
          </Link>
          <Link href="/products/category/lamdep">
            <li>CHĂM SÓC SỨC KHỎE VÀ LÀM ĐẸP</li>
          </Link>
          <Link href="/products/category/trangphucnu">
            <li>TRANG PHỤC NỮ</li>
          </Link>
          <Link href="/products/category/tuivagiay">
            <li>TÚI VÀ GIÀY</li>
          </Link>
          <Link href="/products/category/dulich">
            <li>DU LỊCH</li>
          </Link>
          <Link href="/products/category/trangphucnam">
            <li>TRANG PHỤC NAM</li>
          </Link>
          <Link href="/products/category/dungculuutru">
            <li>DỤNG CỤ LƯU TRỮ</li>
          </Link>
          <Link href="/products/category/trangphucmacnhavamactrong">
            <li>TRANG PHỤC MẶC NHÀ VÀ MẶC TRONG</li>
          </Link>
          <Link href="/products/category/dungcubanan">
            <li>DỤNG CỤ BÀN ĂN</li>
          </Link>
          <Link href="/products/category/dungcunhatam">
            <li>DỤNG CỤ NHÀ TẮM</li>
          </Link>
          <Link href="/products/category/dungcunhabep">
            <li>DỤNG CỤ NHÀ BẾP</li>
          </Link>
        </ul>
      </div>
      <h3 className={classes.h3_under}>TẤT CẢ SẢN PHẨM</h3>
      <div className={classes.main_content}>
        {productsList.map((product) => {
          const id = product._id;
          return (
            <Link href={`/products/${id}`} key={id}>
              <div className={classes.product_item}>
                <Productt
                  title={product.title}
                  image={product.image}
                  price={numberWithCommas(product.price)}
                />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Load more button go here */}
      {numOfProducts < 100 && (
        <div className={classes.loadMoreBtn}>
          <button onClick={loadMoreHandler}>XEM THÊM</button>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Products;

export async function getServerSideProps({ query }) {
  await db.connect();
  const data = await Product.find();
  const products = JSON.stringify(data);
  await db.disconnect();
  if (query === undefined) {
    return {
      props: {
        products,
        query: null
      }
    }
  }
  return {
    props: {
      products,
      query
    },
  };
}
