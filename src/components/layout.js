import Layoutcon from "./layoutcon";
function Layout(){
    return(
        <>
        <div className="boxlayout">
            <h1 className="titlelayout">Bài viết mới</h1>
        <Layoutcon 
        avata="https://inkythuatso.com/uploads/thumbnails/800/2023/03/10-anh-dai-dien-trang-inkythuatso-03-15-27-10.jpg" 
        coment="Hay sang snag voi nhung trai nghiem moi"
        timecoment="Th2 21 12 2016| Cong nghe tien tien ngay cang phat trien ..." />
        <Layoutcon 
        avata="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook-cute-cho-con-gai.jpg?ssl=1" 
        coment="Hay sang snag voi nhung trai nghiem moi"
        timecoment="Th2 21 12 2016| Cong nghe tien tien ngay cang phat trien ..." />
        <Layoutcon 
        avata="https://www.enewsletterhome.com/_eNewsletter/2020/2007_J_avatar.jpg?" 
        coment="Hay sang snag voi nhung trai nghiem moi"
        timecoment="Th2 21 12 2016| Cong nghe tien tien ngay cang phat trien ..." />
        <Layoutcon 
        avata="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/anh-avatar-facebook-nu-toc-dai-buoc-no.jpg" 
        coment="Hay sang snag voi nhung trai nghiem moi"
        timecoment="Th2 21 12 2016| Cong nghe tien tien ngay cang phat trien ..." />
        </div>
        </>
    )
}
export default Layout;
