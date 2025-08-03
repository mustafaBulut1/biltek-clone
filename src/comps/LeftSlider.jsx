import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./LeftSlider.scss";
import slider1 from "../images/Hakkımızda/SliderPhoto1.JPG"
import slider2 from "../images/Hakkımızda/SliderPhoto2.jpg"
import slider3 from "../images/Hakkımızda/SliderPhoto3.png"
import slider4 from "../images/Hakkımızda/SliderPhoto4.jpg"
import { motion } from "framer-motion";

export default function LeftSlider() {
  const images = [slider1, slider2, slider3, slider4];

  return (
    <motion.div
      className="left-slider"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        allowTouchMove={false}
        effect="fade"
        speed={2000}
        fadeEffect={{ crossFade: true }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`slider-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
