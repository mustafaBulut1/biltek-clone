import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "../comps/RightSlider.scss";

export default function RightSlider() {
    const swiperRef = useRef();
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
        swiperRef.current.swiper.slideTo(index);
    };

    
    const tabVariants = {
        active: {
            fontWeight: 700,
            scale: 1.1,
            transition: { type: 'spring', stiffness: 200, damping: 20 },
        },
        inactive: {
            fontWeight: 500,
            scale: 1,
            transition: { type: 'spring', stiffness: 200, damping: 20 },
        },
    };



    const tabContents = [
        {
            title: "Hakkımızda",
            content: `
                  Ankara Yıldırım Beyazıt Üniversitesi Bilim ve Teknoloji
                  Topluluğu, 2011 yılında bilimsel düşünceyi teşvik etmek
                  amacıyla kurulmuş öğrenci topluluğudur. Amacımız, üyelerimizin
                  teknik bilgi ve becerilerini geliştirirken inovatif projeler
                  üretmelerine olanak sağlamaktır. Öğrenciler arasında bilimsel
                  araştırmaları yaygınlaştırmak ve teknoloji dünyasındaki
                  yenilikleri takip ederek farkındalık yaratmak için çeşitli
                  etkinlikler, seminerler ve atölyeler düzenliyoruz. Bilim ve
                  teknolojiyi hayatın her alanına entegre etmek için çalışan
                  dinamik ve yenilikçi bir ekibiz. Geleceğin lider mühendisleri,
                  bilim insanları ve teknoloji uzmanları olarak
                  sorumluluklarımızın bilincindeyiz ve bu doğrultuda hareket
                  ediyoruz.
                `
        },
        {
            title: "Misyonumuz",
            content: `
                  Ankara Yıldırım Beyazıt Üniversitesi Bilim ve Teknoloji
                  Topluluğu olarak misyonumuz, öğrencilere bilimsel ve
                  teknolojik bilgi birikimlerini artıracak bir ortam sunmak ve
                  onları kariyer hayatına en iyi şekilde hazırlamaktır. Çeşitli
                  teknik geziler, söyleşiler, yurt dışı programları ve
                  eğitimlerle üyelerimizin akademik ve profesyonel gelişimini
                  destekliyoruz. CV hazırlama, mülakat hazırlıkları gibi kariyer
                  odaklı eğitimler düzenleyerek, öğrencilerin iş dünyasına güçlü
                  adımlar atmalarını sağlıyoruz. Amacımız, bilimsel
                  araştırmaları ve teknolojik inovasyonları teşvik ederek,
                  öğrencilerimizin kişisel ve mesleki başarılarına katkı
                  sağlamaktır.
                `
        },
        {
            title: "Vizyonumuz",
            content: `
                  Topluluğumuzun vizyonu, Ankara Yıldırım Beyazıt
                  Üniversitesi'ni bilim ve teknoloji alanında ulusal ve
                  uluslararası arenada tanınan bir merkez haline getirmektir.
                  Öğrencilerimizi, teknik bilgi ve becerilerle donatarak
                  kariyerlerine emin adımlarla hazırlamayı, yurt içi ve yurt
                  dışı programlarla küresel bakış açısı kazandırmayı
                  hedefliyoruz. Bilimsel söyleşiler, teknik geziler ve kariyer
                  odaklı eğitimlerle üyelerimizi geleceğin lider bilim insanları
                  ve teknoloji uzmanları olarak yetiştirmeyi amaçlıyoruz.
                  Yenilikçi projelerle topluma katkı sunan, sürdürülebilir
                  çözümler üreten bir topluluk olma yolunda ilerliyoruz.
                `
        }
    ];

    return (
        <motion.div
            className="about-container"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
        >

            <div className="tabs">
                {tabContents.map((tab, index) => (
                    <motion.button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className="tab-button"
                        variants={tabVariants}
                        initial={false}
                        animate={activeTab === index ? 'active' : 'inactive'}
                    >
                        {tab.title}
                    </motion.button>

                ))}

                <motion.div
                    className="active-underline"
                    animate={{
                        x: `${activeTab * 100}%`,
                        height: 6,
                    }}
                    initial={{ height: 2 }}
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 25 },
                        height: { duration: 0.3, ease: "easeInOut" },
                    }}
                />
            </div>

            <Swiper
                modules={[Pagination]}
                pagination={false}
                spaceBetween={30}
                onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
                ref={swiperRef}
            >
                {tabContents.map((tab, index) => (
                    <SwiperSlide key={index}>
                        <p>{tab.content}</p>
                    </SwiperSlide>
                ))}
            </Swiper>

        </motion.div>
    );
}
