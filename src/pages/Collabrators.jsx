import React, { useEffect, useState } from 'react'
import "../pages/Collabrators.scss"
import Banner from '../comps/Banner'
import Collabs from '../comps/Collabs'

export default function Collabrators() {

  const [showCollabs, setShowCollabs] = useState(false);

  useEffect(() => {
    const sliderTimeout = setTimeout(() => setShowCollabs(true), 500)

    return () => {
      clearTimeout(sliderTimeout);
    };
  }, []

  );

  return (
    <div>
      <Banner title={"İŞBİRLİKLERİMİZ"}></Banner>
      { showCollabs && <Collabs logoSize={200}></Collabs>}
      
    </div>

  )
}
