import Head from 'next/head';
import Nav from '../components/Nav/Nav';
import Theme from '../components/Theme/Theme';
import Footer from '../components/Footer/Footer';
import Map from '../components/Map/Map';
import NetStore from '../components/Net-store/NetStore';
import Recommendations from '../components/Recommendations/Recommendations';


export default function Home() {
  console.log(process.env.MONGO_URL)

  return (
    <div>
      <Head>
        <title>無印良品</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/main-img/logo.webp" />
      </Head>

      <Nav />

      <hr></hr>
        <Theme />
      </div>

      <h2 className='card-header'>DANH MỤC SẢN PHẨM</h2>

      <Recommendations />

      <h2 className='card-header'>CATALOG - NET STORE</h2>
      <NetStore />

      <img className='logistics' src='/main-img/logistics.jpg'></img>

      <Map />
      <Footer />
    </div>
  )
}
