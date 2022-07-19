import classes from './productInfo.module.css';
import Nav from '../../../components/Nav/Nav'
import Footer from '../../../components/Footer/Footer';
import Link from 'next/link';
import {useContext} from 'react';
import { Store } from '../../../utils/Store';

function getProductInfo(props) {
    const {state, dispatch} = useContext(Store);
    const product = props.product;
    const subImgs = product.subImg;
    const productCategory = product.category;
    let category;
    if(productCategory === 'HÀNG GIA DỤNG') {category='hanggiadung'};
    if(productCategory === 'VĂN PHÒNG PHẨM') {category='vanphongpham'};
    if(productCategory === 'ĐỒ NỘI THẤT') {category='donoithat'};
    if(productCategory === 'CHĂM SÓC SỨC KHỎE VÀ LÀM ĐẸP') {category='lamdep'};
    if(productCategory === 'DU LỊCH') {category='dulich'};
    if(productCategory === 'TRANG PHỤC NAM') {category='trangphucnam'};
    if(productCategory === 'TRANG PHỤC NỮ') {category='trangphucnu'};
    if(productCategory === 'THỰC PHẨM') {category='thucpham'};
    if(productCategory === 'DỤNG CỤ LƯU TRỮ') {category='dungculuutru'};
    if(productCategory === 'TÚI VÀ GIÀY') {category='tuivagiay'};
    if(productCategory === 'DỤNG CỤ NHÀ BẾP') {category='dungcunhabep'};
    if(productCategory === 'DỤNG CỤ NHÀ TẮM') {category='dungcunhatam'};
    if(productCategory === 'DỤNG CỤ BÀN ĂN') {category='dungcubanan'};
    if(productCategory === 'TRANG PHỤC MẶC NHÀ VÀ MẶC TRONG') {category='trangphucmacnhavamactrong'};


    const addToCartHandler = function() {
        if(product.countInStock <= 0) {
            alert('Product out of stock');
            return;
        }
        dispatch({type: 'ADD_TO_CART', payload: product});
        product.countInStock -=1;
    };

    return (
      <div>
        <Nav />
        <Link href={'/products'}>
            <h2 className={classes.h2}>TẤT CẢ SẢN PHẨM</h2>
        </Link>
        <section className={classes.product_detail_wrapper}>
            <img  src={product.image} alt={product.title}/>
            <div className={classes.product_details}>
                <h1>{product.title}</h1>
                <p><b>{product.price}</b> vnd</p>
                <Link href={`/products/category/${category}`}>
                    <div className={classes.product_category}>
                        <p>{productCategory}</p>
                    </div>
                </Link>
                <div className={classes.addToCart}>
                    <button className={classes.addToCart_btn} onClick={addToCartHandler}>
                        <span>THÊM VÀO GIỎ HÀNG</span>
                    </button>
                </div>
            </div>
        </section>
        
        {subImgs && <div className={classes.subImg}>
            {subImgs.map(subImg => {
                return (
                    <img src={subImg} className={classes.subImg_item}/>
                )
            })}
        </div>}
        
        <Footer />
      </div>
    )
}
  
export default getProductInfo;
  
  
  
  
  
  export async function getStaticProps(context) {
      const id = context.params.id;
      const data = await fetch(`http://localhost:3000/api/products/${id}`);
      const product = await data.json();
      return {
          props: {
              product,
          }
      }
  }
  
  export async function getStaticPaths() {
      const data =  await fetch('http://localhost:3000/api/products');
      const products = await data.json();
  
      const paths = products.map(product => {
          return {
              params: {id: product._id}
          }
      })
      return {
          paths,
          fallback: true // false or 'blocking'
      };
    }