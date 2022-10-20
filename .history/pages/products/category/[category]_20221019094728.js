import classes from "./category.module.css";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import Productt from "../../../components/Product/Product";
import db from "../../../utils/db";
import Product from "../../../models/Product";
function getProductCategory(props) {
  const productCategory = JSON.parse(props.productCategory);
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

      <h3 className={classes.h3}>{
      category==='hanggiadung' && 'Hàng Gia Dụng' || 
      category==='donoithat' && 'Đồ Nội Thất' || 
      category==='vanphongpham' && 'Văn Phòng Phẩm' ||
      category==='lamdep' && 'Chăm Sóc Sức Khỏe Và Làm Đẹp' || 
      category==='thucpham' && 'Thực Phẩm'
      category==='trangphucnu' && 'Trang Phục Nữ'
      category==='trangphucnam' && 'Trang Phục Nam'
      
      
      }</h3>
      {/* <h3 className={classes.h3}>{category==='donoithat' && 'Đồ Nội Thất'}</h3>
      <h3 className={classes.h3}>{category==='vanphongpham' && 'Văn Phòng Phẩm'}</h3>
      <h3 className={classes.h3}>{category==='lamdep' && 'Chăm Sóc Sức Khỏe Và Làm Đẹp'}</h3>
      <h3 className={classes.h3}>{category==='thucpham' && 'Thực Phẩm'}</h3>
      <h3 className={classes.h3}>{category==='trangphucnu' && 'Trang Phục Nữ'}</h3>
      <h3 className={classes.h3}>{category==='trangphucnam' && 'Trang Phục Nam'}</h3>
      <h3 className={classes.h3}>{category==='tuivagiay' && 'Túi Và Giày'}</h3>
      <h3 className={classes.h3}>{category==='dulich' && 'Du Lịch'}</h3>
      <h3 className={classes.h3}>{category==='trangphucmacnhavamactrong' && 'Trang Phục Mặc Nhà Và Mặc Trong'}</h3>
      <h3 className={classes.h3}>{category==='dungculuutru' && 'Dụng Cụ Lưu Trữ'}</h3>
      <h3 className={classes.h3}>{category==='dungcubanan' && 'Dụng Cụ Bàn Ăn'}</h3>
      <h3 className={classes.h3}>{category==='dungcunhatam' && 'Dụng Cụ Nhà Tắm'}</h3>
      <h3 className={classes.h3}>{category==='dungcunhabep' && 'Dụng Cụ Nhà Bếp'}</h3> */}


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
