'use client'

const Footer = () => {
  return (
    <footer className="w-full bg-blue-950 text-white py-8 px-4 flex flex-col items-center">
      <div className="text-3xl font-extrabold tracking-widest text-white mb-2">ZAGOO <span className="text-yellow-300">GAMES</span></div>
      <div className="text-lg font-semibold mb-1">Công Ty TNHH ZIE</div>
      <div className="text-center text-sm max-w-xl md:max-w-none mb-2">
        Địa chỉ trụ sở chính: Tầng 17, Tòa Nhà ROX Tower, số 55A Nguyễn Chí Thanh, Phường Láng Thượng, Quận Đống Đa, Thành phố Hà Nội, Việt Nam<br/>
        Giấy phép phê duyệt nội dung số 1890/QĐ-BTTTT do bộ thông tin và truyền thông cấp ngày 12/10/2022<br/>
        Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số: 396/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 24/07/2015
      </div>
      <div className="flex flex-wrap gap-2 justify-center items-center mt-2">
        <a href="#" className="text-white hover:text-yellow-300 hover:underline font-semibold">Điều khoản</a>
        <div className="w-[1px] h-[4vw] md:h-[1vw] bg-white"></div>
        <a href="#" className="text-white hover:text-yellow-300 hover:underline font-semibold">Quy trình khiếu nại</a>
      </div>
    </footer>
  );
}

export default Footer;