import classes from './Theme.module.css'
function Theme() {
  return (
    <div className={classes.theme_slider}>
      <div className={classes.theme_images}>
        <span className={classes.img_container}>
            <a href='/'><img src='/main-img/theme_1.jpg' /></a>
        </span>
        <span className={classes.img_container}>
            <a href='/'><img src='/main-img/theme_2.jpg' /></a>
        </span>
        <span className={classes.img_container}>
            <a href='/'><img src='/main-img/theme_3.jpg' /></a>
        </span>
      </div>
    </div>
  )
}

export default Theme
