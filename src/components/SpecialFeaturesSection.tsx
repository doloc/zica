'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CustomStyleProperties } from '@/lib/custom';
import { motion } from 'framer-motion';

const features = [
  {
    image: '/images/banner-dai-chien-bien-ca.png',
    alt: 'Feature 1',
  },
  {
    image: 'https://nhatmongvolam.zagoo.vn/static/media/banner-4.f1e9e4631765f2627bd3.jpg',
    alt: 'Feature 2',
  },
  {
    image: 'https://nhatmongvolam.zagoo.vn/static/media/banner-5.70c0128b4453dd462b48.jpg',
    alt: 'Feature 3',
  },
  {
    image: 'https://nhatmongvolam.zagoo.vn/static/media/banner-2.8efa8c7191e174a63ce3.jpg',
    alt: 'Feature 4',
  },
  {
    image: 'https://nhatmongvolam.zagoo.vn/static/media/banner-1.4880ad4522bac0cef3e3.jpg',
    alt: 'Feature 5',
  },
];

const SpecialFeatures = () => {

  return (
    <section className="overflow-hidden w-full flex flex-col items-center bg-cover bg-center bg-no-repeat aspect-[375/340] md:aspect-[1920/969] bg-[url('/images/mb-feature-bg.jpg')] md:bg-[url('/images/pc-feature-bg.jpg')]">
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-[85.3%] md:w-[40.6%] mt-[3%] md:mt-0 object-cover"
        src="/images/tx-special-feature.png"
        alt="Special Features"
      >
      </motion.img>
      <div className="relative w-[94%] md:w-[60%] flex items-center justify-center ">
        {/* Custom Prev Button */}
        <motion.div 
          className="swiper-button-prev-custom absolute -left-[1%] md:-left-[4%] top-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-all duration-300 hover:brightness-110 hover:cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/images/prev.png" alt="Prev" className="w-[45%] md:w-[60%] object-cover" />
        </motion.div>
        {/* w-[87.7%]  */}
        <div className="relative w-full flex items-center justify-center">
          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            className="w-full special-features-swiper"
          >
            {features.map((feature, idx) => (
              <SwiperSlide key={idx} className='swiper-slide' style={{width: '90%'}}>
                <div className="w-full aspect-[1023/609] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/images/fr-banner.png')]">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-[87.7%] h-auto rounded-2xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Custom Next Button */}
        <motion.div 
          className="swiper-button-next-custom absolute -right-[15%] md:-right-[8%] top-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-all duration-300 hover:brightness-110 hover:cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/images/next.png" alt="Next" className="w-[45%] md:w-[60%] object-cover" />
        </motion.div>

        {/* Custom Pagination */}
        <div className="absolute swiper-pagination-custom w-full left-0 right-0 flex justify-center">
        </div>
      </div>
    </section>
  );
} 

export default SpecialFeatures;