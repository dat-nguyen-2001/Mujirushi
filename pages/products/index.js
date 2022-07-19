import classes from './products.module.css';
import Head from 'next/head';
import Footer from '../../components/Footer/Footer';
import Link from 'next/link';
import Product from '../../components/Product/Product';
import {useState} from 'react';

function index(props) {
  const [numOfProducts, setNumOfProducts] = useState(20);
  let productsList;

  const loadMoreHandler = function() {
    setNumOfProducts(numOfProducts + 20)
  }



  productsList = props.products.slice(0, numOfProducts);


  return (
    <>
    <Head>
        <title>DANH MỤC SẢN PHẨM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/main-img/logo.webp"/>
    </Head>
      <div className={classes.header_wrapper}>
        <div className={classes.header_img}>
            <Link href='/'><a><img src='/main-img/nav_img.png'/></a></Link>
        </div>
        <div className={classes.header_searchBox}>
            <input type="text" placeholder=" Search for product/ category.." />
        </div>
      </div>
      <h3 className={classes.h3}><Link href='/'><a>Trang Chủ</a></Link></h3>
      <div className={classes.category_list}>
        <ul className={classes.common_search_options}>
          <Link href='/products/category/hanggiadung' >
            <li>HÀNG GIA DỤNG</li>
          </Link>
          <Link href='/products/category/donoithat' >
            <li>ĐỒ NỘI THẤT</li>
          </Link>
          <Link href='/products/category/vanphongpham' >
            <li>VĂN PHÒNG PHẨM</li>
          </Link>
          <Link href='/products/category/thucpham' >
            <li>THỰC PHẨM</li>
          </Link>
          <Link href='/products/category/lamdep' >
            <li>CHĂM SÓC SỨC KHỎE VÀ LÀM ĐẸP</li>
          </Link>
          <Link href='/products/category/trangphucnu' >
            <li>TRANG PHỤC NỮ</li>
          </Link>
          <Link href='/products/category/tuivagiay' >
            <li>TÚI VÀ GIÀY</li>
          </Link>
          <Link href='/products/category/dulich' >
            <li>DU LỊCH</li>
          </Link>
          <Link href='/products/category/trangphucnam' >
            <li>TRANG PHỤC NAM</li>
          </Link>
          <Link href='/products/category/dungculuutru' >
            <li>DỤNG CỤ LƯU TRỮ</li>
          </Link>
          <Link href='/products/category/trangphucmacnhavamactrong' >
            <li>TRANG PHỤC MẶC NHÀ VÀ MẶC TRONG</li>
          </Link>
          <Link href='/products/category/dungcubanan' >
            <li>DỤNG CỤ BÀN ĂN</li>
          </Link>
          <Link href='/products/category/dungcunhatam' >
            <li>DỤNG CỤ NHÀ TẮM</li>
          </Link>
          <Link href='/products/category/dungcunhabep' >
            <li>DỤNG CỤ NHÀ BẾP</li>
          </Link>
        </ul>
        
      </div>
      <h3 className={classes.h3_under}>TẤT CẢ SẢN PHẨM</h3>
      <div className={classes.main_content}>
        {productsList.map(product => {
          const id = product._id;
          return (
            <Link href={`/products/${id}`}>
              <div className={classes.product_item}><Product title={product.title} image={product.image} price={product.price}/></div>
            </Link>
          )
        })}
      </div>
      
      {/* Load more button go here */}
      {numOfProducts<100 && 
      <div className={classes.loadMoreBtn} >
        <button 
        onClick={loadMoreHandler}>
        XEM THÊM
        </button>
      </div>}
      <Footer />
    </>
  )
}

export default index;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}

