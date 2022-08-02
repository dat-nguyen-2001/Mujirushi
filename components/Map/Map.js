import classes from './Map.module.css'

function Map() {
  return (
    <div className={classes.map}>
        <h2 className='map-header'>BẢN ĐỒ CỬA HÀNG</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10145.040157710571!2d105.81216760688554!3d21.03100217960741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab04203393fb%3A0x9e54a445e0066e31!2sMUJI%20Vincom%20Metropolis!5e0!3m2!1svi!2s!4v1655282889582!5m2!1svi!2s" width="1000" height="400"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
  )
}

export default Map;
