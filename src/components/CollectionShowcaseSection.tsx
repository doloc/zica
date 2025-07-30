'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CustomStyleProperties } from "@/lib/custom";
import { datasource } from "@/types/collections";


const CollectionShowcase = () => {
  const [activeTab, setActiveTab] = useState(datasource[0].value);
  const [activeItemTab, setActiveItemTab] = useState("ITEM");
  const [itemIndex, setItemIndex] = useState(datasource.find((tab) => tab.value === activeTab)?.items[0]?.id || 0);
  const item = datasource.find((tab) => tab.value === activeTab)?.items[itemIndex];

  const handlePrev = () => {
    setItemIndex((prev) => {
      const items = datasource.find((tab) => tab.value === activeTab)?.items;
      const result = items ? (prev === 0 ? items.length - 1 : prev - 1) : prev;
      if (activeTab === "items" && activeItemTab === "ITEM" && result >= 10) setActiveItemTab("PET");
      if (activeTab === "items" && activeItemTab === "PET" && result < 10) setActiveItemTab("ITEM");
      return result;
    });
  };

  const handleNext = () => {
    setItemIndex((prev) => {
      const items = datasource.find((tab) => tab.value === activeTab)?.items;
      const result = items ? (prev === items.length - 1 ? 0 : prev + 1) : prev;
      if (activeTab === "items" && activeItemTab === "ITEM" && result >= 10) setActiveItemTab("PET");
      if (activeTab === "items" && activeItemTab === "PET" && result < 10) setActiveItemTab("ITEM");
      return result;
    });
  };

  return (
    <section 
        className="overflow-hidden relative w-full flex flex-col md:flex-row md:justify-center bg-cover bg-center bg-no-repeat aspect-[375/1030] md:aspect-[1920/1072] bg-[url('/images/mb-collections-bg.jpg'))] md:bg-[url('/images/pc-collections-bg.jpg')]">
        {/* Featured Item Showcase */}
        <div className="w-[97%] md:w-full flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[365/574] md:aspect-[1915/1028] bg-[url('/images/mb-collections-fr.png')] md:bg-[url('/images/pc-collections-fr.png')]">
          <motion.img src="/images/tx-collections.png" alt="" className="mt-[9.5%] md:mt-[1.5%] w-[87.4%] md:w-[40.6%] object-contain" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }} 
            />
          <div className="relative -mt-[0.8%] w-full md:w-[68.5%] flex justify-center md:justify-between">
            {/* Mobile Only - Collections - Left */}
            <div className="w-[92%] md:w-[44.7%] aspect-[614/696] flex flex-col items-center">

              {/* Mobile Only - Collections Tab */}
              <div className="md:hidden w-full h-[9%] grid grid-cols-3 gap-[2%]">
                {datasource.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => {setActiveTab(tab.value); setItemIndex(0); setActiveItemTab("ITEM");}}
                    className={`px-2 py-1 rounded-full font-bold text-xs transition border-3 flex gap-2 items-center
                      ${activeTab === tab.value ? "bg-[linear-gradient(180deg,_#FAFBA1_36.06%,_#F3AC46_63.94%)] shadow-[inset_0px_5px_2px_#F1B64F,_inset_0px_-5px_2px_rgba(255,225,0,0.9)] border-[#BA3F02] text-[#910100]" : 
                        "bg-[linear-gradient(180deg,_#939393_36.06%,_#5B5B5B_63.94%)] shadow-[inset_0px_5px_2px_#ffffff,_inset_0px_-5px_2px_#959595] border-[#5E5E5E] text-white hover:cursor-pointer hover:text-[#910100] hover:scale-105"}`}
                  >
                    <div className={`w-[22%] aspect-square rounded-full ${activeTab === tab.value ? "bg-[#FFBF00]" : "bg-[#939393]"}`}>
                      <img src={tab.image} alt="" className={`w-full h-auto ${activeTab === tab.value ? "" : "grayscale"}`} />
                    </div>
                    <span className="w-[78%] text-xs text-center">
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Mobile Only - Collections Item Tab */}
              <div className="md:hidden absolute top-[10%] w-[60%] z-10">
                {(item?.type === "ITEM" || item?.type === "PET") && <div className="mt-[2%] w-full flex justify-center gap-[2%]">
                  <button className={`w-[166px] h-[36px] px-2 py-1 rounded-full font-bold text-sm transition border-3 hover:cursor-pointer hover:scale-105 hover:text-yellow-300 flex justify-center items-center
                  ${activeItemTab === "ITEM" ? "bg-[linear-gradient(180deg,_#00B3FF_36.06%,_#0073FF_63.94%)] shadow-[inset_0px_5px_2px_#9BE9FF,_inset_0px_-5px_2px_rgba(0, 77, 255, 0.9)] border-[#0A0F99] text-white" : "bg-[linear-gradient(180deg,_#939393_36.06%,_#5B5B5B_63.94%)] shadow-[inset_0px_5px_2px_#FFFFFF,_inset_0px_-5px_2px_rgba(161, 161, 161, 0.9)] border-[#4F4F4F] text-white hover:cursor-pointer transition"}`} 
                  onClick={() => {setActiveItemTab("ITEM"); setItemIndex(0)}}>
                    Vật phẩm
                  </button>
                  <button className={`w-[166px] h-[36px] px-2 py-1 rounded-full font-bold text-sm transition border-3 hover:cursor-pointer hover:scale-105 hover:text-yellow-300 flex justify-center items-center
                  ${activeItemTab === "PET" ? "bg-[linear-gradient(180deg,_#00B3FF_36.06%,_#0073FF_63.94%)] shadow-[inset_0px_5px_2px_#9BE9FF,_inset_0px_-5px_2px_rgba(0, 77, 255, 0.9)] border-[#0A0F99] text-white" : "bg-[linear-gradient(180deg,_#939393_36.06%,_#5B5B5B_63.94%)] shadow-[inset_0px_5px_2px_#FFFFFF,_inset_0px_-5px_2px_rgba(161, 161, 161, 0.9)] border-[#4F4F4F] text-white hover:cursor-pointer transition"}`} 
                  onClick={() => {setActiveItemTab("PET"); setItemIndex(10)}}>
                    Pet
                  </button>
                </div>}

                {item?.type === "BOSS" && <div className="mt-[2%] w-full flex justify-center gap-[2%]">
                  <button className="w-[166px] h-[36px] px-2 py-1 rounded-full font-bold text-sm transition border-3 hover:cursor-pointer hover:scale-105 hover:text-yellow-300 
                  flex justify-center items-center bg-[linear-gradient(180deg,_#00B3FF_36.06%,_#0073FF_63.94%)] shadow-[inset_0px_5px_2px_#9BE9FF,_inset_0px_-5px_2px_rgba(0, 77, 255, 0.9)] border-[#0A0F99] text-white" onClick={() => {setActiveItemTab("ITEM"); setItemIndex(0)}}>
                    Boss
                  </button>
                </div>}
              </div>

              <div className="relative w-full flex justify-center items-center bg-cover bg-center bg-no-repeat aspect-[316/299] md:aspect-[614/580] bg-[url('/images/mb-fr_light.png')] md:bg-[url('/images/pc-fr_light.png')]">
                {/* Mobile - Collections Item */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex flex-col items-center"
                  >
                    <img src={item?.image} alt={item?.name} className={`object-cover ${item?.type === "ITEM" ? "w-[45%]" : "w-[54%]"}`} />
                  </motion.div>
                </AnimatePresence>
                {/* Name */}
                <div className="absolute bottom-0 w-[65%] px-[8%] text-center aspect-[404/119] bg-cover bg-center bg-no-repeat bg-[url(/images/btn-fr.png)] flex justify-center items-center text-white text-lg md:text-[1.5vw] font-bold">{item?.name}</div>

                {/* Navigation */}
                <div className="absolute bottom-[35%] md:bottom-[30%] w-full md:w-[70%]">
                  <div className="relative w-full">
                  <button
                      onClick={handlePrev}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[12%] md:w-[17%] aspect-square bg-cover bg-center bg-no-repeat bg-[url(/images/prev.png)] hover:brightness-110 hover:scale-105 hover:cursor-pointer transition-all duration-300"
                      aria-label="Previous"
                    >
                    </button>

                    <button
                      onClick={handleNext}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[12%] md:w-[17%] aspect-square bg-cover bg-center bg-no-repeat bg-[url(/images/next.png)] hover:brightness-110 hover:scale-105 hover:cursor-pointer transition-all duration-300"
                      aria-label="Next"
                    >
                    </button>
                  </div>
                </div>
              </div>

              {item?.type === "GUN" && <div className="mt-[2%] w-[75%] md:w-[54.3%] grid grid-cols-4 gap-1">
                {datasource.find((tab) => tab.value === "guns")?.items.map((item) => (
                  <div key={item?.id} className={`w-full aspect-square bg-cover bg-center bg-no-repeat flex justify-center items-center ${itemIndex === item?.id ? "bg-[url(/images/active-item-bg.png)]" : "bg-[url(/images/default-item-bg.png)] hover:cursor-pointer hover:brightness-110 hover:scale-105 transition"}`} onClick={() => setItemIndex(item?.id)}>
                    <img src={item?.image} alt="" className="w-[70%] object-cover" />
                  </div>
                ))}
              </div>}
              {(item?.type === "ITEM" || item?.type === "PET") && 
              <div className="mt-[2%] w-[84.3%] md:w-[64%] h-10">
                <div className="w-full aspect-[291/79] md:aspect-[397/152] bg-cover bg-center bg-no-repeat bg-[url(/images/mb-fr_thongtin.png)] md:bg-[url(/images/pc-fr_thongtin.png)] flex justify-center items-center p-[4%] text-semibold text-xs md:text-[1vw]">
                  <div dangerouslySetInnerHTML={{ __html: item?.effect || '' }} />
                </div>
              </div>
              }
            </div>
            {/* PC - Collections - Right */}
            <div className="hidden md:block absolute right-[1.5%] top-[19%] w-[59.7%]">
              <div className="w-full bg-cover bg-center bg-no-repeat aspect-[785/514] bg-[url('/images/pc-fr_bo_suu_tap.png')] flex flex-col items-center"> 
                {/* PC - Collections Tab */}
                <div className="w-[81%] h-[11%] grid grid-cols-3 gap-[4%]">
                  {datasource.map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => {setActiveTab(tab.value); setItemIndex(0); setActiveItemTab("ITEM");}}
                      className={`w-full aspect-[197/54] rounded-full font-bold text-[1vw] transition border-3 flex gap-2 items-center
                        ${activeTab === tab.value ? "bg-[linear-gradient(180deg,_#FAFBA1_36.06%,_#F3AC46_63.94%)] shadow-[inset_0px_5px_2px_#F1B64F,_inset_0px_-5px_2px_rgba(255,225,0,0.9)] border-[#BA3F02] text-[#910100]" : 
                          "bg-[linear-gradient(180deg,_#939393_36.06%,_#5B5B5B_63.94%)] shadow-[inset_0px_5px_2px_#ffffff,_inset_0px_-5px_2px_#959595] border-[#5E5E5E] text-white hover:cursor-pointer hover:text-[#910100] hover:scale-105"}`}
                    >
                      <div className={`w-[22%] aspect-square rounded-full ${activeTab === tab.value ? "bg-[#FFBF00]" : "bg-[#939393]"}`}>
                        <img src={tab.image} alt="" className={`w-full h-auto ${activeTab === tab.value ? "" : "grayscale"}`} />
                      </div>
                      <span className={`w-[78%] text-center`}>
                        {tab.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* PC - Collections Info */}
                <div className="mt-[1%] w-[81%] h-[75%] py-[1%] px-[2%] flex flex-col gap-[3%]">
                  {(item?.type === "ITEM" || item?.type === "PET") && <div className="mt-[2%] w-full flex justify-center gap-[2%]">
                    <button className={`w-[30%] aspect-[166/36] px-2 py-1 rounded-full font-bold text-[1vw] transition border-3 hover:cursor-pointer hover:scale-105 hover:text-yellow-300 flex justify-center items-center
                    ${activeItemTab === "ITEM" ? "bg-[linear-gradient(180deg,_#00B3FF_36.06%,_#0073FF_63.94%)] shadow-[inset_0px_5px_2px_#9BE9FF,_inset_0px_-5px_2px_rgba(0, 77, 255, 0.9)] border-[#0A0F99] text-white" : "bg-[linear-gradient(180deg,_#939393_36.06%,_#5B5B5B_63.94%)] shadow-[inset_0px_5px_2px_#FFFFFF,_inset_0px_-5px_2px_rgba(161, 161, 161, 0.9)] border-[#4F4F4F] text-white hover:cursor-pointer transition"}`} 
                    onClick={() => {setActiveItemTab("ITEM"); setItemIndex(0)}}>
                      Vật phẩm
                    </button>
                    <button className={`w-[30%] aspect-[166/36] px-2 py-1 rounded-full font-bold text-[1vw] transition border-3 hover:cursor-pointer hover:scale-105 hover:text-yellow-300 flex justify-center items-center
                    ${activeItemTab === "PET" ? "bg-[linear-gradient(180deg,_#00B3FF_36.06%,_#0073FF_63.94%)] shadow-[inset_0px_5px_2px_#9BE9FF,_inset_0px_-5px_2px_rgba(0, 77, 255, 0.9)] border-[#0A0F99] text-white" : "bg-[linear-gradient(180deg,_#939393_36.06%,_#5B5B5B_63.94%)] shadow-[inset_0px_5px_2px_#FFFFFF,_inset_0px_-5px_2px_rgba(161, 161, 161, 0.9)] border-[#4F4F4F] text-white hover:cursor-pointer transition"}`} 
                    onClick={() => {setActiveItemTab("PET"); setItemIndex(10)}}>
                      Pet
                    </button>
                  </div>}

                  {item?.type === "BOSS" && <div className="mt-[2%] w-full flex justify-center gap-[2%]">
                    <button className="w-[30%] aspect-[166/36] px-2 py-1 rounded-full font-bold text-[1vw] transition border-3 hover:cursor-pointer hover:scale-105 hover:text-yellow-300 
                    flex justify-center items-center bg-[linear-gradient(180deg,_#00B3FF_36.06%,_#0073FF_63.94%)] shadow-[inset_0px_5px_2px_#9BE9FF,_inset_0px_-5px_2px_rgba(0, 77, 255, 0.9)] border-[#0A0F99] text-white" onClick={() => {setActiveItemTab("ITEM"); setItemIndex(0)}}>
                      Boss
                    </button>
                  </div>}

                  
                  {(item?.type === "GUN") && <div className={`w-full h-[84%] max-h-[calc(100%-36px)] overflow-x-hidden overflow-y-scroll hide-scroll flex flex-col justify-center items-center ${item?.type === "GUN" ? "mt-[36px]" : ""}`}>
                    <div className="w-full p-[2%] bg-cover bg-center bg-no-repeat aspect-[638/142] bg-[url(/images/pc-fr_ky_nang.png)] flex justify-between gap-[1%]">
                      <div className="w-[15%] h-full font-extrabold text-center text-[1.2vw] text-[#000600] flex justify-center items-center">Thông tin</div>
                      <div className="w-[82%] h-full p-[3%] flex flex-col justify-between items-center">
                        <div className="w-full text-extrabold text-[1vw] text-[#FFEA00]" style={{ textShadow: '1px 0 0 #FF4000, -1px 0 0 #FF4000, 0 1px 0 #FF4000, 0 -1px 0 #FF4000' }}>Hiếm</div>
                        <div className="w-full flex gap-[1%]">
                          {[1,2,3,4,5].map((i) => (
                            <img key={i} src={i <= item?.rarity ? `/images/active-star.png` : `/images/gray-star.png`} alt="" className="w-[8%] object-cover" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-full p-[2%] bg-cover bg-center bg-no-repeat aspect-[638/142] bg-[url(/images/pc-fr_ky_nang.png)] flex justify-between gap-[1%]">
                      <div className="w-[15%] h-full font-extrabold text-center text-[1.2vw] text-[#000600] flex justify-center items-center">Kỹ năng</div>
                      <div className="w-[82%] h-full p-[3%] flex flex-col justify-between items-center">
                        <div className="w-full text-extrabold text-[1vw]"><div dangerouslySetInnerHTML={{ __html: item?.skill || '' }} /></div>
                        <div className="w-full text-extrabold text-[1vw]"><div dangerouslySetInnerHTML={{ __html: item?.effect || '' }} /></div>
                      </div>
                    </div>
                  </div> }

                  
                  {(item?.type === "BOSS") && <div className={`w-full h-[72%] max-h-[calc(100%-36px)] overflow-x-hidden overflow-y-scroll hide-scroll flex flex-col justify-center items-center`}>
                    <div className="w-full p-[2%] bg-cover bg-center bg-no-repeat aspect-[638/142] bg-[url(/images/pc-fr_ky_nang.png)] flex justify-between gap-[1%]">
                      <div className="w-[15%] h-full font-extrabold text-center text-[1.2vw] text-[#000600] flex justify-center items-center">Thông tin</div>
                      <div className="w-[82%] h-full p-[3%] flex flex-col justify-center items-center">
                        <div className="w-full text-extrabold text-[1vw]"><div dangerouslySetInnerHTML={{ __html: item?.info || '' }} /></div>
                      </div>
                    </div>
                    <div className="w-full p-[2%] bg-cover bg-center bg-no-repeat aspect-[638/142] bg-[url(/images/pc-fr_ky_nang.png)] flex justify-between gap-[1%]">
                      <div className="w-[15%] h-full font-extrabold text-center text-[1.2vw] text-[#000600] flex justify-center items-center">Kỹ năng</div>
                      <div className="w-[82%] h-full p-[3%] flex flex-col justify-between items-center">
                        <div className="w-full text-extrabold text-[1vw]"><div dangerouslySetInnerHTML={{ __html: item?.skill || '' }} /></div>
                        <div className="w-full text-extrabold text-[1vw]"><div dangerouslySetInnerHTML={{ __html: item?.effect || '' }} /></div>
                      </div>
                    </div>
                  </div>}

                  
                  {(item?.type === "ITEM" || item?.type === "PET") && activeItemTab === "ITEM" && <div className="w-full p-[2%] h-[84%] max-h-[calc(100%-36px)] overflow-x-hidden overflow-y-scroll hide-scroll grid grid-cols-6 grid-rows-3">
                    
                    {(() => {
                      const itemsData = datasource.find(ds => ds.value === "items")?.items || [];
                      const filteredItems = itemsData.filter(item => item.type === "ITEM").slice(0, 18);
                      
                      return (
                        <>
                          {filteredItems.map((item, index) => (
                            <div key={index} className={`w-[95%] aspect-square bg-cover bg-center bg-no-repeat flex justify-center items-center p-[12%] hover:cursor-pointer hover:brightness-110 duration-100 transition relative ${itemIndex === item?.id ? "bg-[url(/images/active-fr-item.png)] border-2 border-[#FECC1E] rounded-lg" : "bg-[url(/images/inactive-fr-item.png)]"}`} onClick={() => setItemIndex(item?.id)}> 
                              {item.image && (
                                <img 
                                  src={item.image} 
                                  alt={item.name || `Item ${index + 1}`}
                                  className="w-full h-full object-contain hover:scale-105"
                                />
                              )}
                            </div>
                          ))}
                          
                          
                          {[...Array(Math.max(0, 18 - filteredItems.length))].map((_, index) => (
                            <div key={`empty-${index}`} className="w-[95%] aspect-square bg-cover bg-center bg-no-repeat bg-[url(/images/inactive-fr-item.png)] flex justify-center items-center p-[2%]"> 
                            </div>
                          ))}
                        </>
                      );
                    })()}
                  </div>}

                  
                  {(item?.type === "ITEM" || item?.type === "PET") && activeItemTab === "PET" && <div className="w-full p-[2%] h-[84%] max-h-[calc(100%-36px)] overflow-x-hidden overflow-y-scroll hide-scroll grid grid-cols-6 grid-rows-3">
                    
                    {(() => {
                      const itemsData = datasource.find(ds => ds.value === "items")?.items || [];
                      const filteredItems = itemsData.filter(item => item.type === "PET").slice(0, 18);
                      
                      return (
                        <>
                          {filteredItems.map((item, index) => (
                            <div key={index} className={`w-[95%] aspect-square bg-cover bg-center bg-no-repeat flex justify-center items-center p-[12%] hover:cursor-pointer hover:brightness-110 duration-100 transition relative ${itemIndex === item?.id ? "bg-[url(/images/active-fr-item.png)] border-2 border-[#FECC1E] rounded-lg" : "bg-[url(/images/inactive-fr-item.png)]"}`} onClick={() => setItemIndex(item?.id)}> 
                              {item.image && (
                                <img 
                                  src={item.image} 
                                  alt={item.name || `Item ${index + 1}`}
                                  className="w-full h-full object-contain hover:scale-110"
                                />
                              )}
                            </div>
                          ))}

                          
                          {[...Array(Math.max(0, 18 - filteredItems.length))].map((_, index) => (
                            <div key={`empty-${index}`} className="w-[95%] aspect-square bg-cover bg-center bg-no-repeat bg-[url(/images/inactive-fr-item.png)] flex justify-center items-center p-[2%]"> 
                            </div>
                          ))}
                        </>
                      );
                    })()}
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Only - Collections Info */}
        <div className="md:hidden w-full py-[8%] px-[6%] flex flex-col items-center gap-[3%] bg-cover bg-center bg-no-repeat aspect-[355/442] bg-[url('/images/mb-fr_bo_suu_tap.png')]">
          {/* <div className="mt-[1%] w-[81%] h-[75%] py-[1%] px-[2%] flex flex-col gap-[3%]"> */}           
            {(item?.type === "GUN") && <div className={`w-full h-full overflow-x-hidden overflow-y-scroll hide-scroll flex flex-col justify-center items-center`}>
              <div className="w-full p-[3%] bg-cover bg-center bg-no-repeat aspect-[301/98] bg-[url(/images/mb-fr_ky_nang.png)] flex justify-between gap-[1%]">
                <div className="w-[27%] h-full font-extrabold text-center text-base text-[#000600] flex justify-center items-center">Thông tin</div>
                <div className="w-[70%] h-full px-[2%] py-[4%] flex flex-col justify-between items-center">
                  <div className="w-full text-extrabold text-xs text-[#FFEA00]" style={{ textShadow: '1px 0 0 #FF4000, -1px 0 0 #FF4000, 0 1px 0 #FF4000, 0 -1px 0 #FF4000' }}>Hiếm</div>
                  <div className="w-full flex gap-[1%]">
                    {[1,2,3,4,5].map((i) => (
                      <img key={i} src={i <= item?.rarity ? `/images/active-star.png` : `/images/gray-star.png`} alt="" className="w-[12%] object-cover" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full p-[3%] bg-cover bg-center bg-no-repeat aspect-[301/98] bg-[url(/images/mb-fr_ky_nang.png)] flex justify-between gap-[1%]">
                <div className="w-[27%] h-full font-extrabold text-center text-base text-[#000600] flex justify-center items-center">Kỹ năng</div>
                <div className="w-[70%] h-full px-[2%] py-[4%] flex flex-col justify-between items-center">
                  <div className="w-full text-extrabold text-xs"><div dangerouslySetInnerHTML={{ __html: item?.skill || '' }} /></div>
                  <div className="w-full text-extrabold text-xs"><div dangerouslySetInnerHTML={{ __html: item?.effect || '' }} /></div>
                </div>
              </div>
            </div> }

            
            {(item?.type === "BOSS") && <div className={`w-full h-full overflow-x-hidden overflow-y-scroll hide-scroll flex flex-col justify-center items-center`}>
              <div className="w-full p-[3%] bg-cover bg-center bg-no-repeat aspect-[301/98] bg-[url(/images/mb-fr_ky_nang.png)] flex justify-between gap-[1%]">
                <div className="w-[27%] h-full font-extrabold text-center text-base text-[#000600] flex justify-center items-center">Thông tin</div>
                <div className="w-[70%] h-full px-[2%] py-[4%] flex flex-col justify-center items-center">
                  <div className="w-full text-extrabold text-xs"><div dangerouslySetInnerHTML={{ __html: item?.info || '' }} /></div>
                </div>
              </div>
              <div className="w-full p-[3%] bg-cover bg-center bg-no-repeat aspect-[301/98] bg-[url(/images/mb-fr_ky_nang.png)] flex justify-between gap-[1%]">
                <div className="w-[27%] h-full font-extrabold text-center text-base text-[#000600] flex justify-center items-center">Kỹ năng</div>
                <div className="w-[70%] h-full px-[2%] py-[4%] flex flex-col justify-between items-center">
                  <div className="w-full text-extrabold text-xs"><div dangerouslySetInnerHTML={{ __html: item?.skill || '' }} /></div>
                  <div className="w-full text-extrabold text-xs"><div dangerouslySetInnerHTML={{ __html: item?.effect || '' }} /></div>
                </div>
              </div>
            </div>}

            
            {(item?.type === "ITEM" || item?.type === "PET") && activeItemTab === "ITEM" && <div className="w-full p-[2%] h-full overflow-x-hidden overflow-y-scroll hide-scroll grid grid-cols-3">
              
              {(() => {
                const itemsData = datasource.find(ds => ds.value === "items")?.items || [];
                const filteredItems = itemsData.filter(item => item.type === "ITEM").slice(0, 12);
                
                return (
                  <>
                    {filteredItems.map((item, index) => (
                      <div key={index} className={`w-[90%] aspect-square bg-cover bg-center bg-no-repeat flex justify-center items-center p-[12%] hover:cursor-pointer hover:brightness-110 duration-100 transition relative ${itemIndex === item?.id ? "bg-[url(/images/active-fr-item.png)] border-4 border-[#FECC1E] rounded-xl" : "bg-[url(/images/inactive-fr-item.png)]"}`} onClick={() => setItemIndex(item?.id)}> 
                        {item.image && (
                          <img 
                            src={item.image} 
                            alt={item.name || `Item ${index + 1}`}
                            className="w-full h-full object-contain hover:scale-105"
                          />
                        )}
                      </div>
                    ))}
                    
                    
                    {[...Array(Math.max(0, 12 - filteredItems.length))].map((_, index) => (
                      <div key={`empty-${index}`} className="w-[90%] aspect-square bg-cover bg-center bg-no-repeat bg-[url(/images/inactive-fr-item.png)] flex justify-center items-center p-[2%]"> 
                      </div>
                    ))}
                  </>
                );
              })()}
            </div>}

            
            {(item?.type === "ITEM" || item?.type === "PET") && activeItemTab === "PET" && <div className="w-full p-[2%] h-full overflow-x-hidden overflow-y-scroll hide-scroll grid grid-cols-3">
              
              {(() => {
                const itemsData = datasource.find(ds => ds.value === "items")?.items || [];
                const filteredItems = itemsData.filter(item => item.type === "PET").slice(0, 12);
                
                return (
                  <>
                    {filteredItems.map((item, index) => (
                      <div key={index} className={`w-[95%] aspect-square bg-cover bg-center bg-no-repeat flex justify-center items-center p-[12%] hover:cursor-pointer hover:brightness-110 duration-100 transition relative ${itemIndex === item?.id ? "bg-[url(/images/active-fr-item.png)] border-2 border-[#FECC1E] rounded-lg" : "bg-[url(/images/inactive-fr-item.png)]"}`} onClick={() => setItemIndex(item?.id)}> 
                        {item.image && (
                          <img 
                            src={item.image} 
                            alt={item.name || `Item ${index + 1}`}
                            className="w-full h-full object-contain hover:scale-110"
                          />
                        )}
                      </div>
                    ))}

                    
                    {[...Array(Math.max(0, 12 - filteredItems.length))].map((_, index) => (
                      <div key={`empty-${index}`} className="w-[95%] aspect-square bg-cover bg-center bg-no-repeat bg-[url(/images/inactive-fr-item.png)] flex justify-center items-center p-[2%]"> 
                      </div>
                    ))}
                  </>
                );
              })()}
            </div>}
          {/* </div> */}
        </div>
    </section>
  );
} 

export default CollectionShowcase;