import Link from 'next/link'

import classes from './Theme.module.css'
function Theme() {
  return (
    <div className={classes.theme_slider}>
      <div className={classes.theme_images}>
        <span className={classes.img_container}>
            <Link href='/'><img src='/main-img/theme_1.jpg' /></Link>
        </span>
        <span className={classes.img_container}>
            <Link href='/'><img src='/main-img/theme_2.jpg' /></Link>
        </span>
        <span className={classes.img_container}>
            <Link href='/'><img src='/main-img/theme_3.jpg' /></Link>
        </span>
      </div>
    </div>
  )
}

export default Theme
