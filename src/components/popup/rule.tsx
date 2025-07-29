'use client'
import { LuScrollText } from "react-icons/lu";
import Popup from "../popup"

const PopupRules:React.FC<{
    isOpen: boolean;
    onClose: () => void;
}> = ({isOpen, onClose}) => {
    return (
        <Popup
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="mt-[5%] md:mt-[2%] w-full flex flex-col justify-center items-center">
                <button
                    className={`w-[41%] md:w-[25%] aspect-[122/34] md:aspect-[205/68] rounded-full font-bold transition border-3 flex justify-center gap-2 items-center bg-[linear-gradient(180deg,_#FAFBA1_36.06%,_#F3AC46_63.94%)] shadow-[inset_0px_5px_2px_#F1B64F,_inset_0px_-5px_2px_rgba(255,225,0,0.9)] 
                        border-[#BA3F02] text-[#910100] hover:cursor-pointer hover:text-[#910100] hover:scale-105 hover:brightness-110"}`}
                    >
                    <LuScrollText className="text-[#910000] w-[4vw] md:w-[1.6vw] aspect-square" strokeWidth={2} />
                    <span className="text-[3vw] md:text-[1.2vw] font-bold">Thể lệ</span>
                </button>
            </div>

            <div className="mt-[5%] md:mt-[2%] px-[5%] w-full flex flex-col gap-2 text-[3vw] md:text-[1.3vw] text-[#17D527]">
                <li>Thời gian diễn ra 07 ngày, từ ngày <span style={{color: "#FFE901", textShadow: "1px 0 0 #FF4000, -1px 0 0 #FF4000, 0 1px 0 #FF4000, 0 -1px 0 #FF4000"}}>23/06/2025</span> đến ngày <span style={{color: "#FFE901", textShadow: "1px 0 0 #FF4000, -1px 0 0 #FF4000, 0 1px 0 #FF4000, 0 -1px 0 #FF4000"}}>30/06/2025.</span></li> 
                <li>Không thể điểm danh bù.</li>
                <li>Code nhận được từ sự kiện chỉ nhập được 01 lần trên 01 tài khoản duy nhất</li>
                <li>Mỗi tài khoản sẽ chỉ nhập được 01 lần duy nhất code cùng loại.</li>
            </div>
        </Popup>
    )
}

export default PopupRules