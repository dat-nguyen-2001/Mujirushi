import classes from './Theme.module.css'
function Theme() {
  return (
    <div className={classes.theme_slider}>
      <div className={classes.theme_images}>
        <span className={classes.img_container}>
            <img src='/theme_1.jpg' />
        </span>
        <span className={classes.img_container}>
            <img src='/theme_2.jpg' />
        </span>
        <span className={classes.img_container}>
            <img src='/theme_3.jpg' />
        </span>
      </div>
    </div>
  )
}

export default Theme
