import classes from './Nav.module.css'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
function Nav() {
  return (
    <>
    <div className={classes.nav_container}>
      <div className={classes.dropdownMenu}>
        <DensityMediumIcon />
      </div>
      <div className={classes.nav_img}>
        <img src='/nav_img.png' alt='Muji nav_bar logo' />
      </div>

      <div className={classes.nav_options}>
        <div className={classes.options_item}>衣料品</div>
        <div className={classes.options_item}>生活雑貨</div>
        <div className={classes.options_item}>食品</div> 
      </div>
        {/* // leave it for now */}
      {/* <div className={classes.nav_search}>
        
      </div> */}

      <div className={classes.nav_user}>
        <div className={classes.login}>
            <div>
                <PersonRoundedIcon/>
            </div>
            <div className={classes.login_text}>
                ログイン
            </div>
        </div>
        <div className={classes.cart}>
            <div>
                <ShoppingCartRoundedIcon/>
            </div>
            <div className={classes.cart_text}>
                カード
            </div>
        </div>
        <div className={classes.info}>
            <div>
                <ErrorOutlineRoundedIcon/>
            </div>
            <div>
                サポート
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
