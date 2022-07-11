import Product from'../../../../models/Product';
import db from '../../../../utils/db';

const handler = async (req, res) => {
    const data = req.query.category;
    let category;

    if(data==='hanggiadung') {category = 'HÀNG GIA DỤNG'};
    if(data==='donoithat') {category = 'ĐỒ NỘI THẤT'};
    if(data==='vanphongpham') {category = 'VĂN PHÒNG PHẨM'};
    if(data==='thucpham') {category = 'THỰC PHẨM'};
    if(data==='lamdep') {category = 'CHĂM SÓC SỨC KHỎE VÀ LÀM ĐẸP'};
    if(data==='trangphucnu') {category = 'TRANG PHỤC NỮ'};
    if(data==='tuivagiay') {category = 'TÚI VÀ GIÀY'};
    if(data==='dulich') {category = 'DU LỊCH'};
    if(data==='trangphucnam') {category = 'TRANG PHỤC NAM'};
    if(data==='dungculuutru') {category = 'DỤNG CỤ LƯU TRỮ'};
    if(data==='trangphucmacnhavamactrong') {category = 'TRANG PHỤC MẶC NHÀ VÀ MẶC TRONG'};
    if(data==='dungcubanan') {category = 'DỤNG CỤ BÀN ĂN'};
    if(data==='dungcunhatam') {category = 'DỤNG CỤ NHÀ TẮM'};
    if(data==='dungcunhabep') {category = 'DỤNG CỤ NHÀ BẾP'};

    await db.connect();
    const productCategory = await Product.find({category: category});
    await db.disconnect();
    res.send(productCategory);
};

export default handler;