<template>
    <div class="footer">
        <div class="container">
            <div class="combo">
                <h3>ĐIỀU KHOẢN SỬ DỤNG</h3>
                <ul>
                    <li><a href="#">Điều khoản chung</a></li>
                    <li><a href="#">Điều khoản giao dịch</a></li>
                    <li><a href="#">Chính sách thanh toán</a></li>
                    <li><a href="#">Chính sách bảo mật</a></li>
                    <li><a href="#">Câu hỏi thường gặp</a></li>
                </ul>
            </div>
            <div class="combo">
                <h3>CHĂM SÓC KHÁCH HÀNG</h3>
                <ul>
                    <li>Hotline: 1900 6017</li>
                    <li>Giờ làm việc: 8:00 - 22:00</li>
                    <li>(Tất cả các ngày trong tuần và ngày lễ)</li>
                    <li>Email hỗ trợ: hoidap@cgv.vn</li>
                </ul>
            </div>
        </div>
        <hr/>
        <div class=info>
            <h3>CÔNG TY TNHH V-MOVE VIỆT NAM</h3>
            <p>Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, 
            đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi</p> 
            <p>Sở KHĐT thành phố Hồ Chí Minh.</p>
            <p>Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.</p>
            <p>Hotline: 1900 6017</p>
            <p>COPYRIGHT 2017 V-MOVE. All RIGHTS RESERVED .</p>
        </div>
    </div>
</template>

<script>
export default{
    name: 'Import',
    data() {
        return {
            
        } 
    }
}
</script>

<style scoped>
.footer{
    background-color: #151515cc;  
    padding: 20px;
}
.container{
    display: flex;
    justify-content: space-evenly;
}
.combo ul{
    list-style-type: none;
    padding: 0px;
}
.combo li{
    margin-bottom: 10px;
}
a{
    text-decoration: none;
}
a, p, li{
    font-size: 17px;
    color: #f5f5f585;
}
.info{
    padding-top: 20px ;
    padding-left: 350px;
}
h3{
    color: rgb(255, 255, 255);
    padding-bottom: 10px;
}
</style>