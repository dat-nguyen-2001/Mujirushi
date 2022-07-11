import classes from './Card.module.css'
import Link from 'next/link';
function Card(props) {
  return (
    <div className={classes.card}>
        <div className={classes.card__body}>
          <Link href={`/products/category/${props.category}`}>
            <img className={classes.card__img} src={props.img}></img>
          </Link>
            <h2 className={classes.card__title}>{props.title}</h2>
            <p className={classes.card__description}>{props.description}</p>
        </div>
    </div>
  )
}

export default Card;
