'use client'

import { fetchPosts } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const tabs = [
  { label: "Tin Tức", type: "NEWS" },
  { label: "Sự Kiện", type: "EVENT" },
  { label: "Tính Năng", type: "FEATURE" },
  { label: "Hướng Dẫn", type: "INSTRUCTION" },
];

const newsItems = [
  {
    title: "ĐẠI ĐẠI CHIẾN BIỂN CÁ",
    desc: "Tin Tức / Sự Kiện / Tính Năng / Hướng Dẫn 1",
    image: "/images/banner.png",
  },
  {
    title: "SỰ KIỆN ĐẶC BIỆT",
    desc: "Tin Tức / Sự Kiện / Tính Năng / Hướng Dẫn 2",
    image: "/images/banner.png",
  },
  {
    title: "TÍNH NĂNG MỚI",
    desc: "Tin Tức / Sự Kiện / Tính Năng / Hướng Dẫn 3",
    image: "/images/banner.png",
  },
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].type);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCarouselIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    console.log(activeTab);
    if (activeTab === tabs[0].type || activeTab === tabs[1].type) {
      setLoading(true);
      fetchPosts(activeTab as unknown as 'NEWS' | 'EVENT', 0, 4)
        .then((data) => {
          setData(data.data);
        })
        .finally(() => setLoading(false));
    }
  }, [activeTab]);

  return (
    <div className="overflow-hidden relative w-full flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[375/1520] md:aspect-auto bg-[url('/images/mb-hero-bg.jpg')] md:bg-none">
      <section className="relative overflow-hidden w-full flex justify-center bg-cover bg-center bg-no-repeat md:aspect-[1920/1792] md:bg-[url('/images/pc-hero-bg.jpg')]">
        <img src="/images/18+.png" alt="" className="hidden md:block absolute top-[3%] right-[2%] w-[9.5%] object-cover" />
        {/* <video
          className="hidden md:block top-0 left-0 w-full aspect-[1920/1792] object-cover"
          src="/images/pc-hero-vid.mp4"
          autoPlay
          loop
          muted
          playsInline
        /> */}

        {/* CTA Buttons - PC Only*/}
        <motion.div 
          className="hidden md:flex absolute top-[43%] w-[35.2%] bg-[linear-gradient(180deg,_#FF4C16_36.06%,_#A90030_63.94%)] rounded-xl border-amber-200 border-8 border-solid"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 0 30px rgba(255, 76, 22, 0.4)"
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-[35%] flex justify-center items-center"
          >
            <Link href="" className="w-full">
              <motion.img 
                src="/images/btn-napthe.png" 
                alt="Nạp thẻ" 
                className="w-full h-auto btn-image"
                style={{ aspectRatio: '233/120' }}
                whileHover={{ 
                  scale: 1.08,
                  filter: "brightness(1.1) drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </motion.div>
          
          <motion.div 
            className="w-[30%] flex flex-col justify-center items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[85%]"
            >
              <Link href="" className="w-full">
                <motion.img 
                  src="/images/btn-zalo.png" 
                  alt="Sinh nhật" 
                  className="w-full h-auto btn-image"
                  style={{ aspectRatio: '166/48' }}
                  whileHover={{ 
                    scale: 1.1,
                    filter: "brightness(1.1) drop-shadow(0 0 6px rgba(0, 123, 255, 0.4))"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[85%]"
            >
              <Link href="" className="w-full">
                <motion.img 
                  src="/images/btn-fb.png" 
                  alt="Cộng đồng" 
                  className="w-full h-auto btn-image"
                  style={{ aspectRatio: '166/48' }}
                  whileHover={{ 
                    scale: 1.1,
                    filter: "brightness(1.1) drop-shadow(0 0 6px rgba(66, 103, 178, 0.4))"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-[35%] flex justify-center items-center"
          >
            <Link href="" className="w-full">
              <motion.img 
                src="/images/btn-choingay.png" 
                alt="Chơi ngay" 
                className="w-full h-auto btn-image"
                style={{ aspectRatio: '233/120' }}
                whileHover={{ 
                  scale: 1.08,
                  filter: "brightness(1.1) drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  scale: [1, 1.03, 1],
                  filter: ["brightness(1)", "brightness(1.05)", "brightness(1)"]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <div className="absolute z-10 top-[57.2%] md:top-[58%] w-[92.5%] md:w-[67.7%] flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[347/616] md:aspect-[1300/768] bg-[url('/images/mb-news-fr.png')] md:bg-[url('/images/pc-news-fr.png')]">
        <motion.img 
          src="/images/tx_tintuc_sukien.png" 
          alt="news-fr" 
          className="-mt-[8%] md:-mt-[2%] w-[92.5%] md:w-3/5 object-contain"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <div className="w-[85%] md:w-[88.15%] flex flex-col md:grid md:grid-cols-2 gap-[2%]">
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={carouselIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col items-center"
              >
                <img src={newsItems[carouselIndex].image} alt="" className="w-full object-contain" />
              </motion.div>
            </AnimatePresence>

            {/* carousel */}
            <div className="w-full mt-[10%] md:mt-[5%] flex justify-center items-center">
              <motion.button
                onClick={handlePrev}
                className="absolute left-[25%] w-[10%] md:w-[8%] bg-cover bg-center bg-no-repeat aspect-square bg-[url('/images/btn-prev.png')] hover:brightness-110 hover:scale-110 hover:cursor-pointer transition-all duration-300"
                aria-label="Previous"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
              </motion.button>
              {/* pagination */}
              <div className="absolute w-[50%] flex justify-center items-center gap-[3%]">
                {newsItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`w-[6%] md:w-[4%] aspect-square rounded-full border-2 transition-all duration-200
                      ${carouselIndex === idx
                        ? 'bg-[#00FFD0] border-white scale-110 shadow-lg'
                        : 'bg-[#001031] hover:bg-yellow-200 hover:scale-105 hover:cursor-pointer transition-all duration-300'}
                    `}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <motion.button
                onClick={handleNext}
                className="absolute right-[25%] w-[10%] md:w-[8%] bg-cover bg-center bg-no-repeat aspect-square bg-[url('/images/btn-next.png')] hover:brightness-110 hover:scale-110 hover:cursor-pointer transition-all duration-300"
                aria-label="Next"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
              </motion.button>
            </div>
          </div>
          <div className="mt-[10%] md:mt-0 w-full">
            {/* tabs */}
            <div className="grid grid-cols-4 gap-1 mb-4 flex-wrap justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.type}
                  onClick={() => setActiveTab(tab.type)}
                  className={`px-1 py-2 md:px-4 rounded-full font-bold text-xs md:text-[0.8vw] transition border-3 
                    ${activeTab === tab.type ? "bg-[linear-gradient(180deg,_#FAFBA1_36.06%,_#F3AC46_63.94%)] shadow-[inset_0px_5px_2px_#F1B64F,_inset_0px_-5px_2px_rgba(255,225,0,0.9)] border-[#BA3F02] text-[#532F02]" : 
                      "bg-[linear-gradient(180deg,_#939393_36.06%,_#5B5B5B_63.94%)] shadow-[inset_0px_5px_2px_#ffffff,_inset_0px_-5px_2px_#959595] border-[#5E5E5E] text-white hover:scale-105 hover:text-yellow-300 hover:cursor-pointer"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {/* news */}
            <div className="w-full aspect-[568/250] flex flex-col gap-3">
              <div className="w-full flex flex-col gap-2 overflow-y-scroll hide-scroll">
                {data.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full bg-blue-800/80 border-3 border-white/70 rounded-lg px-4 py-3 text-white flex items-center justify-between text-xs md:text-[0.7vw] font-bold shadow hover:bg-blue-700/90 hover:cursor-pointer transition"
                  >
                    <span className="truncate flex-1 mr-2">{item.title}</span>
                    <span className="text-yellow-300 font-bold flex-shrink-0">&gt;</span>
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-end">
                <Link href={`${activeTab === tabs[0].type ? "/tin-tuc" : "/su-kien"}`} className="w-[30%] md:w-[25%] py-[1%] aspect-[77/24] md:aspect-[166/36] flex items-center justify-center bg-[linear-gradient(180deg,_#FAFBA1_36.06%,_#F3AC46_63.94%)] 
                shadow-[inset_0px_9px_4px_#F1B64F,_inset_0px_-9px_4px_rgba(255,225,0,0.9)] border-[3px] border-[#BA3F02] transition-all duration-200 rounded-full text-xs md:text-[0.7vw] text-[#532F02] font-bold hover:scale-105">Xem Thêm</Link>
              </div>
            </div>
          </div>
        </div>
        {/* navigation */}
        <div className="absolute -bottom-[3%] md:bottom-0 w-[91%] md:w-[70%] grid grid-cols-4 gap-1 text-[10px] md:text-[1vw]">
          <button className="grid grid-rows-[1fr_1fr] bg-cover bg-center bg-no-repeat aspect-[75/81] md:aspect-[228/189] bg-[url('/images/mb-btn-bg.png')] md:bg-[url('/images/pc-btn-bg.png')] hover:scale-105 hover:cursor-pointer hover:brightness-110 transition">
            <div className="flex justify-center items-end">
              <img src="/images/icon-credit-cards.png" alt="" className="w-1/3 h-auto" />
            </div>
            <div className="flex justify-center">
              <span className="w-[80%] md:w-1/2 text-center text-white font-bold">Hướng dẫn nạp thẻ</span>
            </div>
          </button>
          <button className="grid grid-rows-[1fr_1fr] bg-cover bg-center bg-no-repeat aspect-[75/81] md:aspect-[228/189] bg-[url('/images/mb-btn-bg.png')] md:bg-[url('/images/pc-btn-bg.png')] hover:scale-105 hover:cursor-pointer hover:brightness-110 transition">
            <div className="flex justify-center items-end">
              <img src="/images/icon-guide-book.png" alt="" className="w-1/3 h-auto" />
            </div>
            <div className="flex justify-center">
              <span className="w-[80%] md:w-1/2 text-center text-white font-bold">Cẩm nang tân thủ</span>
            </div>
          </button>
          <button className="grid grid-rows-[1fr_1fr] bg-cover bg-center bg-no-repeat aspect-[75/81] md:aspect-[228/189] bg-[url('/images/mb-btn-bg.png')] md:bg-[url('/images/pc-btn-bg.png')] hover:scale-105 hover:cursor-pointer hover:brightness-110 transition">
            <div className="flex justify-center items-end">
              <img src="/images/icon-customer-care.png" alt="" className="w-1/3 h-auto" />
            </div>
            <div className="flex justify-center">
              <span className="w-[80%] md:w-1/2 text-center text-white font-bold">Chăm sóc khách hàng</span>
            </div>
          </button>
          <button className="grid grid-rows-[1fr_1fr] bg-cover bg-center bg-no-repeat aspect-[75/81] md:aspect-[228/189] bg-[url('/images/mb-btn-bg.png')] md:bg-[url('/images/pc-btn-bg.png')] hover:scale-105 hover:cursor-pointer hover:brightness-110 transition">
            <div className="flex justify-center items-end">
              <img src="/images/icon-info.png" alt="" className="w-1/3 h-auto" />
            </div>
            <div className="flex justify-center">
              <span className="w-[80%] md:w-1/2 text-center text-white font-bold">Điều Khoản</span>
            </div>
          </button>
        </div>
      </div>
      <section className="hidden md:flex relative overflow-hidden w-full justify-center bg-cover bg-center bg-no-repeat aspect-[1920/232] bg-[url('/images/pc-news-bg.jpg')]">
      </section>
    </div>
  );
} 

export default Hero;