import classes from './Footer.module.css';

function Footer() {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.footer_row}>
            <div className={classes.footer_col}>
                <a href='#'>店舗情報</a>
                <a href='#'>Cafe&Meal MUJI</a>
                <a href='#'>イベント</a>
                <a href='#'>MUJI BOOKS</a>
                <a href='#'>MUJI HOTEL</a>
            </div>
            <div className={classes.footer_col}>
                <a href='#'>MUJIーSUPPORT</a>
                <a href='#'>くらし</a>
                <a href='#'>サイトマップ</a>
                <a href='#'>無印良品について</a>
                <a href='#'>MUJI vision</a>
            </div>
            <div className={classes.footer_col}>
                <a href='#'>カタログ</a>
                <a href='#'>日本</a>
                <a href='#'>無印良品の家</a>
                <a href='#'>のび太</a>
                <a href='#'>ドラえもん</a>
            </div>
            <div className={classes.footer_col}>
                <a href='#'>ジャイアン</a>
                <a href='#'>しずかちゃん</a>
                <a href='#'>ドラミ</a>
                <a href='#'>スネ夫</a>
                <a href='#'>のびすけ</a>
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
