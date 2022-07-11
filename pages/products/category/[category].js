import classes from './category.module.css';
import Nav from '../../../components/Nav/Nav'
import Footer from '../../../components/Footer/Footer';
import Link from 'next/link';
import Product from '../../../components/Product/Product';

function getProductCategory(props) {
    const {productCategory} = props;
    console.log(productCategory);
    const category = productCategory[0].category;
    return (
        <>
          <div className={classes.header_wrapper}>
            <div className={classes.header_img}>
                <Link href='/'><a><img src='/main-img/nav_img.png'/></a></Link>
            </div>
            <div className={classes.header_searchBox}>
                <input type="text" placeholder=" Search for product/ category.." />
            </div>
          </div>

          <h3 className={classes.h3}>{category}</h3>
          
          <div className={classes.main_content}>
            {productCategory.map(product => {
              const id = product._id;
              return (
                <Link href={`http://localhost:3000/products/${id}`}>
                  <div className={classes.product_item}><Product title={product.title} image={product.image} price={product.price}/></div>
                </Link>
              )
            })}
          </div>
          
          {/* Load more button go here */}
          {/* {numOfProducts<100 && 
          <div className={classes.loadMoreBtn} >
            <button 
            onClick={loadMoreHandler}>
            XEM THÊM
            </button>
          </div>} */}
          <Footer />
        </>
    )
}
  
export default getProductCategory;
  
  
  
  
  
  export async function getStaticProps(context) {
      const category = context.params.category;
      const data = await fetch(`http://localhost:3000/api/products/category/${category}`);
      const productCategory = await data.json();
      return {
          props: {
              productCategory,
          }
      }
  }
  
  export async function getStaticPaths() {
      return {
          paths: [
            {params: {category: 'hanggiadung'}},
            {params: {category: 'donoithat'}},
            {params: {category: 'vanphongpham'}},
            {params: {category: 'thucpham'}},
            {params: {category: 'lamdep'}},
            {params: {category: 'trangphucnu'}},
            {params: {category: 'tuivagiay'}},
            {params: {category: 'dulich'}},
            {params: {category: 'trangphucnam'}},
            {params: {category: 'dungculuutru'}},
            {params: {category: 'trangphucmacnhavamactrong'}},
            {params: {category: 'dungcubanan'}},
            {params: {category: 'dugcunhatam'}},
            {params: {category: 'dungcunhabep'}},
          ],
          fallback: true // false or 'blocking'
      };
    }