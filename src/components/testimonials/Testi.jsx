import React, { useState } from "react";
import "./Testi.scss";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
// import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testi = () => {
  const [selected, setSelected] = useState(0);
  const tLenght = testimonialsData.length;

  const transition = { type: "sprin", duration: 2 };

  return (
    <div className="testi">
      <div className="l-testi">
        <span>Testimoinals</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 1.5 }}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span className="child-5">
          <motion.span
            key={selected}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ ...transition, duration: 1.5 }}
          >
            {testimonialsData[selected].name}
          </motion.span>
          {" - " + testimonialsData[selected].status}
        </span>
      </div>
      <div className="r-testi">
        <motion.div
          initial={{ x: "-100", opacity: 0 }}
          whileInView={{ x: "0", opacity: 1 }}
          transition={transition}
        ></motion.div>
        <motion.div
          initial={{ x: "100", opacity: 0 }}
          whileInView={{ x: "0", opacity: 1 }}
          transition={transition}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 1.5 }}
          src={testimonialsData[selected].image}
          alt=""
        />

        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLenght - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === tLenght - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            style={{ transform: "scaleX(-1)" }}
            src={leftArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testi;
