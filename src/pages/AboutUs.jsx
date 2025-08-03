import React, { useEffect, useState } from 'react'
import LeftSlider from '../comps/LeftSlider'
import RightSlider from '../comps/RightSlider'
import Collabs from '../comps/Collabs'
import Banner from '../comps/Banner'
import "../pages/AboutUs.scss"

export default function AboutUs() {
  const [showSlider, setShowSlider] = useState(false);
  const [showCollabs, setShowCollabs] = useState(false);

  useEffect(() => {
  
    const sliderTimeout = setTimeout(() => setShowSlider(true), 500); 
    const collabsTimeout = setTimeout(() => setShowCollabs(true), 1000); 

    return () => {
      clearTimeout(sliderTimeout);
      clearTimeout(collabsTimeout);
    };
  }, []);

  return (
    <div className='aboutUs'>
      <Banner title={"BİLİM VE TEKNOLOJİ TOPLULUĞU"} />

      {showSlider && (
        <div className="slider-grid">
          <div className="left-slider">
            <LeftSlider />
          </div>
          <div className="right-slider">
            <RightSlider />
          </div>
        </div>
      )}

      {showCollabs && <Collabs />}
    </div>
  )
}
