'use client'

import { FC } from "react";

const mapDayToChest = (day: number) => {
  if (day >= 7) return 'chest-lv7'
  else if (day >= 6) return 'chest-lv6'
  else if (day >= 5) return 'chest-lv5'
  else if (day >= 4) return 'chest-lv4'
  else if (day >= 3) return 'chest-lv3'
  else if (day >= 2) return 'chest-lv2'
  else return 'chest-lv1'
}

const Reward:FC<{
  day: number,
  isReceived: boolean,
  onClick: (day: number) => void,
}> = ({day, isReceived, onClick}) => {
  return (
    <div className={`relative w-full aspect-[273/271] bg-cover bg-center bg-no-repeat bg-[url('/images/event-newbie/fr.png')] flex justify-center items-center ${isReceived ? 'grayscale pointer-events-none' : ''}`}>
      <span className="absolute top-[7%] w-[35%] aspect-[2/0.8] text-xs md:text-[0.8vw] text-[#9C0606] font-bold bg-[#FFB500] rounded-full flex justify-center items-center">Ngày {day}</span>
      <img src={`/images/event-newbie/${mapDayToChest(day)}.png`} alt="" className="w-[60%] object-contain" />
      <button className={`absolute bottom-[5%] w-[55%] aspect-[166/48] text-[#000B35] text-xs md:text-[0.8vw] rounded-full font-bold
       bg-[linear-gradient(0deg,_#007720_0%,_#40FF00_79.17%)] shadow-[inset_0px_9px_4px_#B6F309,_inset_0px_-9px_4px_rgba(0, 204, 3, 0.9)] border-[3px] border-[#37CE26]
       hover:cursor-pointer hover:scale-105 hover:brightness-110 transition-all duration-100`}
       onClick={isReceived ? () => {} : () => onClick(day)}
      >{isReceived ? 'Đã Nhận' : 'Nhận Ngay'}</button>
    </div>
  );
};

export default Reward;