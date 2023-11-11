import React from "react";
import "../styles/Home.scss";
import Header from "./header/Header";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import h_img from "../assets/hero_image.png";
import h_img_back from "../assets/hero_image_back.png";
import NumberCounter from "number-counter";

import { motion } from "framer-motion";

const Home = () => {
  const transition = { type: "spring", duration: 2.5 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="home">
      <div className="blur blur-home"></div>
      <div className="left-s">
        <Header />

        <div className="best-ad">
          <motion.div
            initial={{ left: mobile ? "188px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>

          <span>The Best fitness club in the town</span>
        </div>
        <div className="home-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              error quae quibusdam magni.
            </span>
          </div>
        </div>

        <div className="fig">
          <div>
            <span>
              <NumberCounter start={100} end={140} delay="4" preFix="+" />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
          <span>
              <NumberCounter start={800} end={999} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
          <span>
              <NumberCounter start={10} end={50} delay="2" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="home-btns">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-s">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span> <span>118 bpm</span>
        </motion.div>

        <img src={h_img} alt="" className="h-img" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={h_img_back}
          alt=""
          className="h-img-back"
        />

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>260kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
