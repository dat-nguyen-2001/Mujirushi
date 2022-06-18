import Head from 'next/head';
import Nav from './components/Nav/Nav';
import Theme from './components/Theme/Theme';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>無印良品</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.webp"/>
      </Head>

      <Nav />

      <hr></hr>

      <Theme />

      <h2 className='card-header'>季節のおすすめ</h2>
      <div className='recommended-categories'>
        <div className='card-wrapper'>
          <Card img="recommended-categories/towel.webp" title="タオル" description ="一般的なフェイス・バスタオルに加え、使い勝手のよいスモールバスタオルをご用意。薄手～厚手の3種類からお好みでお選びください。"/>
          <Card img="recommended-categories/skincare.webp" title="洗剤・トイレットペーパー・日用品" description ="自立しやすいごみ袋、紙芯のない長巻トイレットペーパーなど、細部にこだわった日用品を集めました。必需品の除菌・消毒グッズも。"/>
          <Card img="recommended-categories/bedroom.webp" title="夏のくらし" description ="梅雨時期に便利な室内物干しやサーキュレーターなど、紫外線や湿気が気になる夏前に準備しておきたいアイテムを集めました。"/>
          <Card img="recommended-categories/fridge.webp" title="食事まわりの、衛生管理 6/3更新" description ="時季の過ごし方や取り入れたい知恵など、日々のくらしに役立つコツを、商品とともに紹介します。"/>
          <Card img="recommended-categories/items.webp" title="スキンケア" description ="岩手県釜石の天然水を使用した、デリケートな肌のための低刺激性のスキンケアシリーズです。薬用美白ラインも揃っています。"/>
          <Card img="recommended-categories/stuffs.webp" title="掃除用品" description ="気持ちいい掃除に欠かせないのは、場所や汚れに適した道具を上手に選ぶこと。最適な道具を使いこなして効率的な掃除を継続しましょう。"/>
        </div>
        <div className='showMoreButton'>
          <button >もっと見る</button>
        </div>
      </div>

      <h2 className='card-header'>ネットストア情報</h2>
      <div className='net-store'>
            <Card img="net-store/1.webp" title="ネット注文店舗受け取りサービス"/>
            <Card img="net-store/2.webp" title="テレビで紹介されました | 6月2日更新" />
            <Card img="net-store/3.webp" title="いつでも5％お得な、まとめ買い"/>
            <Card img="net-store/4.webp" title="新発売の商品を集めました" />
      </div>

      <img className='logistics' src='logistics.jpg'></img>

      <div className='map'>
        <h2 className='map-header'>地図</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10145.040157710571!2d105.81216760688554!3d21.03100217960741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab04203393fb%3A0x9e54a445e0066e31!2sMUJI%20Vincom%20Metropolis!5e0!3m2!1svi!2s!4v1655282889582!5m2!1svi!2s" width="1000" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <Footer />
    </div>
  )
}
