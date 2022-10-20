import classes from "./category.module.css";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import Productt from "../../../components/Product/Product";
import db from "../../../utils/db";
import Product from "../../../models/Product";
import { useRouter } from 'next/router'



function getProductCategory(props) {
  const productCategory = JSON.parse(props.productCategory);
  const category = productCategory[0].category;

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const router = useRouter();
  const searchInput = document.getElementById('searchInput')
  const searchHandler = function(e) {
    e.preventDefault();
    router.push(`/products?search=${searchInput.value}`)
    searchInput.value = ''
  }

  return (
    <>
      <div className={classes.header_wrapper}>
        <div className={classes.header_img}>
          <Link href="/">
            <img src="/main-img/nav_img.png" />
          </Link>
        </div>
        <form className={classes.header_searchBox} onSubmit={searchHandler}>
          <input id="searchInput" type="text" placeholder=" Search for product/ category.." />
        </form>
      </div>

      <h3 className={classes.h3}>{
        category === 'hanggiadung' && 'Hàng Gia Dụng' ||
        category === 'donoithat' && 'Đồ Nội Thất' ||
        category === 'vanphongpham' && 'Văn Phòng Phẩm' ||
        category === 'lamdep' && 'Chăm Sóc Sức Khỏe Và Làm Đẹp' ||
        category === 'thucpham' && 'Thực Phẩm' ||
        category === 'trangphucnu' && 'Trang Phục Nữ' ||
        category === 'trangphucnam' && 'Trang Phục Nam' ||
        category === 'tuivagiay' && 'Túi Và Giày' ||
        category === 'dulich' && 'Du Lịch' ||
        category === 'trangphucmacnhavamactrong' && 'Trang Phục Mặc Nhà Và Mặc Trong' ||
        category === 'dungculuutru' && 'Dụng Cụ Lưu Trữ' ||
        category === 'dungcubanan' && 'Dụng Cụ Bàn Ăn' ||
        category === 'dungcunhatam' && 'Dụng Cụ Nhà Tắm' ||
        category === 'dungcunhabep' && 'Dụng Cụ Nhà Bếp'
      }</h3>


      <div className={classes.main_content}>
        {productCategory.map((product) => {
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
      <Footer />
    </>
  );
}

export default getProductCategory;

export async function getStaticProps(context) {
  const chosenCategory = context.params.category;
  await db.connect();
  const data = await Product.find({ category: chosenCategory });
  const productCategory = JSON.stringify(data);
  await db.disconnect();
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
      { params: { category: "dungcunhatam" } },
      { params: { category: "dungcunhabep" } },
    ],
    fallback: false, // false or 'blocking'
  };
}
