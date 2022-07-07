import Card from "../Card/Card";
import classes from './netStore.module.css'

function netStore() {
  return (
    <>
      <div className={classes.net_store}>
            <Card img="net-store/1.webp" title="ネット注文店舗受け取りサービス"/>
            <Card img="net-store/2.webp" title="テレビで紹介されました" />
            <Card img="net-store/3.webp" title="いつでも5％お得な、まとめ買い"/>
            <Card img="net-store/4.webp" title="新発売の商品を集めました" />
      </div>
    </>
  )
}

export default netStore
