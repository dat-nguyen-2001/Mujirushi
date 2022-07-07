import classes from './productInfo.module.css';
import Nav from '../../../components/Nav/Nav'
import Footer from '../../../components/Footer/Footer';

function getProductInfo(props) {
    const product = props.product;
    const subImgs = product.subImg;
    const category = product.category;
    return (
      <div>
        <Nav />
        <section className={classes.product_detail_wrapper}>
            <img  src={product.image} alt='tinh dau thom phong'/>
            <div className={classes.product_details}>
                <h1>{product.title}</h1>
                <p><b>{product.price}</b> vnd</p>
                <div className={classes.product_category}>
                    <p>{category}</p>
                </div>
                <div className={classes.addToCart}>
                    <button className={classes.addToCart_btn}>
                        <span>THÊM VÀO GIỎ HÀNG</span>
                    </button>
                </div>
            </div>
        </section>
        
        {subImgs && <div className={classes.subImg}>
            {subImgs.map(subImg => {
                return (
                    <img src={subImg} />
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