'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FC, useState } from "react";

const Floating: FC<{
  onScrollToTop: () => void;
}> = ({onScrollToTop}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="hidden md:block w-full">
      <motion.div 
        className="z-50 fixed top-[20%] right-[1%] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/images/fr_floating.png')] w-[17%] aspect-[354/642]"
        animate={{
          translateX: isExpanded ? 0 : "calc(100% - 60px)"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              className="z-10 absolute w-[60%] h-[65%] top-[18%] right-[17%] py-[3%] flex flex-col items-center justify-between"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="" className="w-full">
                <img 
                  src="/images/btn-choingay.png" 
                  alt="Chơi ngay" 
                  className="w-full h-auto btn-image"
                  style={{ aspectRatio: '233/120' }}
                />
              </Link>
              <Link href="" className="w-full">
                <img 
                  src="/images/btn-napthe.png" 
                  alt="Nạp thẻ" 
                  className="w-full h-auto btn-image"
                  style={{ aspectRatio: '233/120' }}
                />
              </Link>
              <Link href="" className="w-[75%]">
                <img 
                  src="/images/btn-zalo.png" 
                  alt="Zalo" 
                  className="w-full h-auto btn-image"
                  style={{ aspectRatio: '166/48' }}
                />
              </Link>
              <Link href="" className="w-[75%]">
                <img 
                  src="/images/btn-social.png" 
                  alt="Cộng đồng" 
                  className="w-full h-auto btn-image"
                  style={{ aspectRatio: '166/48' }}
                />
              </Link>
              <Link href="" className="w-[75%]">
                <img 
                  src="/images/btn-fb.png" 
                  alt="FB" 
                  className="w-full h-auto btn-image"
                  style={{ aspectRatio: '166/48' }}
                />
              </Link>
              <img src="/images/btn-top.png" alt="" className="absolute -bottom-[27%] w-1/2 btn-image object-contain" onClick={() => {onScrollToTop(); console.log('clicked')}} />
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="absolute top-[45%] left-0 w-1/5 bg-cover bg-center bg-no-repeat aspect-square bg-[url('/images/fr_item.png')] flex justify-center items-center cursor-pointer hover:scale-110 transition-transform" onClick={toggleExpand}>
          {isExpanded ? <FontAwesomeIcon className="text-[#000A35] text-3xl font-extrabold" icon={faAnglesRight} /> : <FontAwesomeIcon className="text-[#000A35] text-3xl font-extrabold" icon={faAnglesLeft} />}
        </div>


      </motion.div>
    </div>
  );
}

export default Floating;