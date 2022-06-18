import classes from './Footer.module.css';

function Footer() {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.footer_row}>
            <div className={classes.footer_col}>
                <a href='#'>店舗情報</a>
                <a href='#'>Cafe&Meal MUJI</a>
                <a href='#'>Found MUJI</a>
                <a href='#'>MUJI BOOKS</a>
                <a href='#'>MUJI HOTEL</a>
            </div>
            <div className={classes.footer_col}>
                <a href='#'>店舗情報</a>
                <a href='#'>Cafe&Meal MUJI</a>
                <a href='#'>Found MUJI</a>
                <a href='#'>MUJI BOOKS</a>
                <a href='#'>MUJI HOTEL</a>
            </div>
            <div className={classes.footer_col}>
                <a href='#'>店舗情報</a>
                <a href='#'>Cafe&Meal MUJI</a>
                <a href='#'>Found MUJI</a>
                <a href='#'>MUJI BOOKS</a>
                <a href='#'>MUJI HOTEL</a>
            </div>
            <div className={classes.footer_col}>
                <a href='#'>店舗情報</a>
                <a href='#'>Cafe&Meal MUJI</a>
                <a href='#'>Found MUJI</a>
                <a href='#'>MUJI BOOKS</a>
                <a href='#'>MUJI HOTEL</a>
            </div>
        </div>
        <div className={classes.operation_sign}>
            <p>© Ryohin Keikaku Co., Ltd.</p>
            <img src='https://www.muji.com/vn/img/logoSaleNoti.png' />
        </div>
        </div>
    </>
  )
}

export default Footer;
