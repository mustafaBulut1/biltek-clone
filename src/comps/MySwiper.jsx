import React from 'react'
import { useRef ,useState } from "react";
import {Swiper , SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper/modules';       
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from "framer-motion";
import '../comps/Myswiper.scss'
import LeftSlider from './LeftSlider';
import Collabs from './Collabs';

export default function MySwiper() {
  const swiperRef = useRef();
  const [activeTab, setActiveTab] = useState(0);

  const slideTo = (index) => {
    setActiveTab(index);
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <motion.div 
      className="about-container"
      initial={{opacity:0,y:-30}}
      animate={{opacity:1,y:0}}
      transition={{duration:2 , ease:"easeOut"}} /* ease geçiş hızı eğrisi */
    >

      <div className="image-container">
        <LeftSlider></LeftSlider>
      </div>

      <div className="content-container">
        <div className="tabs">
          <button
            onClick={() => slideTo(0)}
            className={activeTab === 0 ? "active" : ""}
          >
            Hakkımızda
          </button>
          <button
            onClick={() => slideTo(1)}
            className={activeTab === 1 ? "active" : ""}
          >
            Misyonumuz
          </button>
          <button
            onClick={() => slideTo(2)}
            className={activeTab === 2 ? "active" : ""}
          >
            Vizyonumuz
          </button>
          <div className="underline" style={{ transform: `translateX(${activeTab * 100}%)` }}></div>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={false} 
          spaceBetween={30}
          onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
          ref={swiperRef}
        >
          <SwiperSlide>
            <p>
              Ankara Yıldırım Beyazıt Üniversitesi Bilim ve Teknoloji Topluluğu, 2011 yılında
              bilimsel düşünceyi teşvik etmek amacıyla kurulmuş bir öğrenci topluluğudur...
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <p>
              Misyonumuz; öğrencilerin bilimsel düşünce ve teknik becerilerle donatılmasını sağlamak,
              inovatif projelere öncülük etmektir.
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <p>
              Vizyonumuz; AYBÜ’yü teknoloji alanında ulusal ve uluslararası arenada öncü bir merkez haline
              getirmek ve öğrencilere küresel vizyon kazandırmaktır.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <Collabs></Collabs>
      
    </motion.div>
    
  );
}
