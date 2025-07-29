import toast from "react-hot-toast";
import Popup from "../popup";

const PopupReward:React.FC<{
  isOpen: boolean;
  onClose: () => void;
  isReward?: boolean;
}> = ({isOpen, onClose, isReward}) => {
  const GameUrl = process.env.NEXT_PUBLIC_GAME_URL;
  
  return (
    <Popup
        isOpen={isOpen}
        onClose={onClose}
        isReward={isReward}
    >
      <div className="w-full h-full flex flex-col items-center justify-center text-[#17D527] gap-4 text-[4vw] md:text-[1.3vw]">
        <span>Ngư Thần <span style={{color: "#FFE901", textShadow: "1px 0 0 #FF4000, -1px 0 0 #FF4000, 0 1px 0 #FF4000, 0 -1px 0 #FF4000"}}>đã điểm danh</span></span>
        <div className="flex items-center gap-2"><span>Mã code quà: <span style={{color: "#FFE901", textShadow: "1px 0 0 #FF4000, -1px 0 0 #FF4000, 0 1px 0 #FF4000, 0 -1px 0 #FF4000"}}>abc-xyz</span></span>
          <img src="/images/event-newbie/icon-copy.png" alt="" className="w-[10%] aspect-square hover:cursor-pointer hover:scale-105 hover:brightness-110" onClick={() => {
            navigator.clipboard.writeText('abc-xyz');
            toast.success('Đã copy mã code');
          }} />
        </div>
        <button
          className={`w-[82.69%] md:w-[48.87%] aspect-[258/34] md:aspect-[390/68] rounded-full font-bold transition border-3 flex justify-center gap-2 items-center bg-[linear-gradient(180deg,_#FAFBA1_36.06%,_#F3AC46_63.94%)] shadow-[inset_0px_5px_2px_#F1B64F,_inset_0px_-5px_2px_rgba(255,225,0,0.9)] 
              border-[#BA3F02] text-[#910100] hover:cursor-pointer hover:text-[#910100] hover:scale-105 hover:brightness-110"}`}
              onClick={() => {
                window.open(GameUrl, '_blank');
              }}
          >
            <span className="text-[4vw] md:text-[1.3vw] font-bold">Vào game nhập code</span>
        </button>
      </div>
    </Popup>
  );
};

export default PopupReward;