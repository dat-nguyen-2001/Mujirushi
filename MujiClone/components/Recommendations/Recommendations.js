import classes from './Recommendations.module.css';
import Card from '../Card/Card';
import Link from 'next/link';
function Recommendations() {
  console.log();
  return (
    <div>
        <div className={classes.card_wrapper}>

          <Card img="recommended-categories/towel.webp" title="タオル" description ="一般的なフェイス・バスタオルに加え、使い勝手のよいスモールバスタオルをご用意。薄手～厚手の3種類からお好みでお選びください。"/>
          <Card img="recommended-categories/skincare.webp" title="洗剤・トイレットペーパー・日用品" description ="自立しやすいごみ袋、紙芯のない長巻トイレットペーパーなど、細部にこだわった日用品を集めました。必需品の除菌・消毒グッズも。"/>
          <Card img="recommended-categories/bedroom.webp" title="夏のくらし" description ="梅雨時期に便利な室内物干しやサーキュレーターなど、紫外線や湿気が気になる夏前に準備しておきたいアイテムを集めました。"/>
          <Card img="recommended-categories/fridge.webp" title="食事まわりの、衛生管理 6/3更新" description ="時季の過ごし方や取り入れたい知恵など、日々のくらしに役立つコツを、商品とともに紹介します。"/>
          <Card img="recommended-categories/items.webp" title="スキンケア" description ="岩手県釜石の天然水を使用した、デリケートな肌のための低刺激性のスキンケアシリーズです。薬用美白ラインも揃っています。"/>
          <Card img="recommended-categories/stuffs.webp" title="掃除用品" description ="気持ちいい掃除に欠かせないのは、場所や汚れに適した道具を上手に選ぶこと。最適な道具を使いこなして効率的な掃除を継続しましょう。"/>
        </div>
        <div className={classes.showMoreButton}>
          <Link href="/products"><a><button>もっと見る</button></a></Link>
        </div>
      </div>
  )
}

export default Recommendations;
