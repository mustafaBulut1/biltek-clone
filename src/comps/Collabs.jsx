import React from 'react'
import { motion } from "framer-motion";
import "./Collabs.scss";

import aisec from '../images/İş Birlikleri/aisec.png'
import cartoon from '../images/İş Birlikleri/cartoon-lab.jpg'
import choco from '../images/İş Birlikleri/choco-labs.jpg'
import colombia from '../images/İş Birlikleri/colombia-coffee.jpg'
import ezgi from '../images/İş Birlikleri/ezgi-cafe.jpg'
import fafello from '../images/İş Birlikleri/fafello.png'
import koi from '../images/İş Birlikleri/koi.png'
import madrid from '../images/İş Birlikleri/madrid.png'
import meet from '../images/İş Birlikleri/meet-n-study.png'
import qampus from '../images/İş Birlikleri/qampus.png'
import zaytung from '../images/İş Birlikleri/zaytung-zone.png'

const logos = [
  { src: aisec, link: "https://aiesec.org.tr/" },
  { src: qampus, link: "https://www.qampusapp.com/" },
  { src: choco, link: "https://chocolabs.com.tr/" },
  { src: colombia, link: "https://www.colombiacoffeetr.com.tr/" },
  { src: madrid, link: "https://coffeedemadrid.com.tr/" },
  { src: meet, link: "https://www.instagram.com/meet.n.study/" },
  { src: cartoon, link: "https://cartoonlabcoffee.com/" },
  { src: ezgi, link: "https://ezgicafe.dijital.menu/" },
  { src: fafello, link: "https://www.instagram.com/fafello.ankara/" },
  { src: koi, link: "https://www.instagram.com/koicoffeetaiyaki/?hl=bn" },
  { src: zaytung, link: "https://www.zaytungzone.com/" },
];


export default function Collabs( { logoSize=100 }) {

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
  };



  return (
    <div className="collabs-container">

      <motion.div
        className="logo-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {logos.map((logo, index) => (

          <motion.a
            className="logo-item"
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -6, transition: { duration: 0.2 } }}
            style={ {width:`${logoSize}px` , height:`${logoSize}px` }}
          >

            <img src={logo.src} alt={`logo-${index}`} />
          
          </motion.a>

        ))}


      </motion.div>

    </div>
  );
}
