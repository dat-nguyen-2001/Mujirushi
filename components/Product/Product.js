import classes from './Product.module.css'

export default function Productt(props) {
  return (
    <div className={classes.product_wrapper}>
      <div className={classes.modal}><p className={classes.product_hover}>XEM</p></div>
      
      <img src={props.image}/>
      <p>{props.title}</p>
      <p className={classes.price}><b>{props.price}</b> đ</p>
    </div>
  )
}
