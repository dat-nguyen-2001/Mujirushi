import classes from './Nav.module.css';

import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

import Link from 'next/link';


function Nav() {
  return (
    <>
    <div className={classes.nav_container}>
      <div className={classes.dropdownMenu}>
        <DensityMediumIcon />
      </div>
      <div className={classes.nav_img}>
        <Link href='/'><a><img src='/main-img/nav_img.png' alt='Muji nav_bar logo' /></a></Link>
      </div>

      {/* <div className={classes.nav_options}>
      <div className={classes.options_item}><Link href="products"><a>製品</a></Link></div>
        <div className={classes.options_item}><Link href="/"><a>店</a></Link></div>
      </div> */}
        {/* // leave it for now */}
      {/* <div className={classes.nav_search}>
        
      </div> */}

      <div className={classes.nav_user}>
        <div className={classes.login}>
            <div>
              <Link href='/login'><a><PersonRoundedIcon/></a></Link>
            </div>
            <div className={classes.login_text}>
              <Link href='/login'><a>ログイン</a></Link>
            </div>
        </div>
        <div className={classes.cart}>
            <div>
                <Link href="/cart"><a><ShoppingCartRoundedIcon/></a></Link>
            </div>
            <div className={classes.cart_text}>
              <Link href="/cart"><a>カード</a></Link>
            </div>
        </div>
        <div className={classes.info}>
            <div>
              <Link href="/about"><a><ErrorOutlineRoundedIcon/></a></Link>
            </div>
            <div>
              <Link href="about"><a>インフォ</a></Link>
            </div>
        </div>
      </div>
    </div>
    <div className={classes.nav_options_ipad}>
      <div className={classes.options_ipad_item}>衣料品</div>
      <div className={classes.options_ipad_item}>生活雑貨</div>
      <div className={classes.options_ipad_item}>食品</div> 
    </div>
  </>
  )
}

export default Nav
