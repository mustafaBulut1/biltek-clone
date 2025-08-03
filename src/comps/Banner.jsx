
import React from "react";
import { motion } from "framer-motion";
import "./Banner.scss";
import logo from '../images/logo-no-text.png'; 

export default function Banner({ title }) {
  return (
    <motion.div
      className="banner"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="banner-logo left">
        <img src={logo} alt="logo" />
      </div>

      <h1 className="banner-title">{title}</h1>

      <div className="banner-logo right">
        <img src={logo} alt="logo" />
      </div>
    </motion.div>
  );
}
