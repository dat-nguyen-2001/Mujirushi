import classes from './Recommendations.module.css';
import Card from '../Card/Card';
import Link from 'next/link';
function Recommendations() {
  console.log();
  return (
    <div>
        <div className={classes.card_wrapper}>

          <Card img="recommended-categories/hanggiadung.webp" title="HÀNG GIA DỤNG" description ="Gọn nhẹ khi di chuyển, êm ái khi tựa, cùng khả năng tự điều chỉnh theo hình dáng cơ thể, ghế lười ôm trọn bạn trong sự thoải mái và đem lại những giây phút thư giãn dễ chịu."/>
          <Card img="recommended-categories/vanphongpham.webp" title="VĂN PHÒNG PHẨM" description ="Cùng sắp xếp các vật dụng quan trọng trên bàn làm việc của bạn được gọn gàng hơn bằng các loại hộp và kệ đựng hồ sơ nhựa PP của chúng tôi. "/>
          <Card img="recommended-categories/kitchen.webp" title="DỤNG CỤ NHÀ BẾP" description ="Thìa nấu ăn được treo gọn gàng trên giá đỡ, giúp bạn dễ dàng với tới khi nấu ăn. Hộp dụng cụ tráng men có thể hâm nóng trực tiếp trên bếp vô cùng tiện dụng. Nồi đất cho những hạt cơm dẻo thơm hơn khi nấu ăn."/>
          <Card img="recommended-categories/skincare.webp" title="CHĂM SÓC SỨC KHỎE VÀ LÀM ĐẸP" description ="Các sản phẩm dưỡng da của MUJI đều có thành phần chính là nước suối được lấy từ hang động ở Kamaishi, tỉnh Iwate, Nhật Bản."/>
          <Card img="recommended-categories/travel.webp" title="DU LỊCH" description ="Việc sắp xếp đồ ngăn nắp, dễ lấy dễ cất khi cần, không chỉ giúp bạn tiết kiệm thời gian mà còn giúp nhẹ gánh suy lo, để toàn tâm tận hưởng chuyến đi mong chờ bấy lâu."/>
          <Card img="recommended-categories/food.webp" title="THỰC PHẨM" description ="Có thể bạn chưa biết, Cà Ri Gà Sốt Bơ là vị cà ri được yêu thích nhất tại khắp các cửa hàng MUJI trên toàn cầu."/>
        </div>
        <div className={classes.showMoreButton}>
          <Link href="/products"><a><button>XEM THÊM</button></a></Link>
        </div>
      </div>
  )
}

export default Recommendations;
