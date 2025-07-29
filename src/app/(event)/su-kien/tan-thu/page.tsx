'use client'

import Reward from "@/components/event-newbie/reward";
import PopupHistory from "@/components/popup/history";
import PopupReward from "@/components/popup/reward";
import PopupRules from "@/components/popup/rule";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaHistory } from "react-icons/fa";
import { LuScrollText } from "react-icons/lu";

const NewbieEventPage = () => {
  const [popupRulesinOpen, setPopupRulesinOpen] = useState(false);
  const [popupHistoryOpen, setPopupHistoryOpen] = useState(false);
  const [popupRewardOpen, setPopupRewardOpen] = useState(false);

  const handleReceiveReward = (day: number) => {
    setPopupRewardOpen(true);
  }

  return (
    <div className="relative w-full flex flex-col items-center">
      <motion.img 
        src="/images/event-newbie/txt-event.png" 
        alt="" 
        className="mt-[35%] md:mt-[9%] w-[88.26%] md:w-[29.5%] object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          type: "spring",
          stiffness: 100
        }}
      />

      <div className="mt-[8%] md:mt-[1%] w-[76.8%] md:w-[18%] grid grid-cols-2 gap-2 z-20">
        <button
          className={`w-full aspect-[138/46] md:aspect-[166/68] rounded-full font-bold transition border-3 flex justify-center gap-2 items-center bg-[linear-gradient(180deg,_#FAFBA1_36.06%,_#F3AC46_63.94%)] shadow-[inset_0px_5px_2px_#F1B64F,_inset_0px_-5px_2px_rgba(255,225,0,0.9)] 
            border-[#BA3F02] text-[#910100] hover:cursor-pointer hover:text-[#910100] hover:scale-105 hover:brightness-110"}`}
            onClick={() => setPopupRulesinOpen(true)}
        >
          <LuScrollText className="text-[#910000] w-[5vw] md:w-[1.4vw] aspect-square" strokeWidth={2} />
          <span className="text-[4vw] md:text-[1vw] font-extrabold">Thể lệ</span>
        </button>
        <button
          className={`w-full aspect-[138/46] md:aspect-[166/68] rounded-full font-bold transition border-3 flex justify-center gap-2 items-center bg-[linear-gradient(180deg,_#FAFBA1_36.06%,_#F3AC46_63.94%)] shadow-[inset_0px_5px_2px_#F1B64F,_inset_0px_-5px_2px_rgba(255,225,0,0.9)] 
            border-[#BA3F02] text-[#910100] hover:cursor-pointer hover:text-[#910100] hover:scale-105 hover:brightness-110"}`}
            onClick={() => setPopupHistoryOpen(true)}
        >
          <FaHistory className="text-[#910000] w-[5vw] md:w-[1.4vw] aspect-square" strokeWidth={2} />
          <span className="text-[4vw] md:text-[1vw] font-extrabold">Lịch sử</span>
        </button>
      </div>

      <img src="/images/event-newbie/chest.png" alt="" className="mt-[10%] md:mt-[1%] w-[74.13%] md:w-[32%] object-cover" />
      <div className="hidden md:flex absolute w-[68.75%] top-[24%] aspect-[1320/873] z-10 flex-col items-center">
        <div className="w-full flex justify-between">
          <div className="w-[20.68%]"><Reward day={1} isReceived={true} onClick={handleReceiveReward} /></div>
          <div className="w-[20.68%]"><Reward day={7} isReceived={false} onClick={handleReceiveReward} /></div>
        </div>

        <div className="mt-[1%] w-[91%] flex justify-between">
          <div className="w-[22.75%]"><Reward day={2} isReceived={true} onClick={handleReceiveReward} /></div>
          <div className="w-[22.75%]"><Reward day={6} isReceived={false} onClick={handleReceiveReward} /></div>
        </div>

        <div className="relative mt-0 w-[77%] flex justify-between">
          <div className="w-[26.87%]"><Reward day={3} isReceived={true} onClick={handleReceiveReward} /></div>
          <div className="w-[26.87%] absolute -bottom-[15%] left-0 right-0 mx-auto"><Reward day={4} isReceived={false} onClick={handleReceiveReward} /></div>
          <div className="w-[26.87%]"><Reward day={5} isReceived={false} onClick={handleReceiveReward} /></div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden absolute w-[90%] top-[91%] flex flex-col gap-[6vw]">
        <div className="w-full flex justify-between">
          <div className="w-[48.1%]"><Reward day={1} isReceived={true} onClick={handleReceiveReward} /></div>
          <div className="w-[48.1%]"><Reward day={2} isReceived={false} onClick={handleReceiveReward} /></div>
        </div>

        <div className="w-full flex justify-between">
          <div className="w-[48.1%]"><Reward day={3} isReceived={true} onClick={handleReceiveReward} /></div>
          <div className="w-[48.1%]"><Reward day={4} isReceived={false} onClick={handleReceiveReward} /></div>
        </div>

        <div className="relative w-full flex justify-between">
          <div className="w-[48.1%]"><Reward day={5} isReceived={true} onClick={handleReceiveReward} /></div>
          <div className="w-[48.1%]"><Reward day={6} isReceived={false} onClick={handleReceiveReward} /></div>
        </div>
        <div className="w-[48.25%] mx-auto"><Reward day={7} isReceived={false} onClick={handleReceiveReward} /></div>
      </div>

      <AnimatePresence>
        {popupRulesinOpen && (
        <PopupRules
            isOpen={popupRulesinOpen}
            onClose={() => setPopupRulesinOpen(false)}
        />)}
      </AnimatePresence>

      <AnimatePresence>
        {popupHistoryOpen && (
          <PopupHistory
              isOpen={popupHistoryOpen}
              onClose={() => setPopupHistoryOpen(false)}
              isHistory={true}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {popupRewardOpen && (
          <PopupReward
              isOpen={popupRewardOpen}
              onClose={() => setPopupRewardOpen(false)}
              isReward={true}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewbieEventPage;