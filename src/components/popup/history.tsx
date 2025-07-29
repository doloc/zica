import { FaHistory } from "react-icons/fa";
import Popup from "../popup";
import toast from "react-hot-toast";

const PopupHistory:React.FC<{
    isOpen: boolean;
    onClose: () => void;
    isHistory?: boolean;
}> = ({isOpen, onClose, isHistory}) => {
    return (
        <Popup
            isOpen={isOpen}
            onClose={onClose}
            isHistory={isHistory}
        >
          <div className="mt-[5%] md:mt-[2%] w-full flex flex-col justify-center items-center">
            <button
              className={`w-[41%] md:w-[25%] aspect-[122/34] md:aspect-[205/68] rounded-full font-bold transition border-3 flex justify-center gap-2 items-center bg-[linear-gradient(180deg,_#FAFBA1_36.06%,_#F3AC46_63.94%)] shadow-[inset_0px_5px_2px_#F1B64F,_inset_0px_-5px_2px_rgba(255,225,0,0.9)] 
                  border-[#BA3F02] text-[#910100] hover:cursor-pointer hover:text-[#910100] hover:scale-105 hover:brightness-110"}`}
              >
              <FaHistory className="text-[#910000] w-[4vw] md:w-[1.6vw] aspect-square" strokeWidth={2} />
              <span className="text-[3vw] md:text-[1.2vw] font-bold">Thể lệ</span>
            </button>
          </div>
          {/* History */}
          <div className="w-full mt-6 text-[3.5vw] md:text-[1vw] h-[85%] overflow-y-scroll hide-scroll rounded-t-lg border border-white">
            <table className="w-full">
              <thead>
                <tr className=" bg-[#3E33FF] border-b border-white">
                  <th className="text-white font-semibold px-2 py-1 text-center border-r border-white">Thời gian</th>
                  <th className="text-white font-semibold px-2 py-1 text-center border-r border-white">Ngày điểm danh</th>
                  <th className="text-white font-semibold px-2 py-1 text-center">Mã code</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 7 }, (_, index) => (
                  <tr key={index} className="border-b border-white">
                    <td className="px-2 py-1 text-center border-r border-white">
                      <div className="text-green-400">
                        <div>01/08/2025</div>
                        <div>23:59:59</div>
                      </div>
                    </td>
                    <td className="px-2 py-1 text-center border-r border-white">
                      <div className="text-green-400">Ngày {index + 1}</div>
                    </td>
                    <td className="px-2 py-1 text-center border-r">
                      <div className="flex items-center justify-center gap-[5%]">
                        <span className="text-orange-400">Aboxyz</span>
                        <img src="/images/event-newbie/icon-copy.png" alt="logo" className="w-[30%] aspect-square hover:cursor-pointer hover:scale-105 hover:brightness-110" onClick={() => {
                          navigator.clipboard.writeText('Aboxyz');
                          toast.success('Đã copy mã code');
                        }} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Popup>
    )
}

export default PopupHistory;