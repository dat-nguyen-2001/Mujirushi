import classes from './Card.module.css'

function Card(props) {
  return (
    <div className={classes.card}>
        <div className={classes.card__body}>
            <img className={classes.card__img} src={props.img}></img>
            <h2 className={classes.card__title}>{props.title}</h2>
            <p className={classes.card__description}>{props.description}</p>
        </div>
    </div>
  )
}

export default Card;
