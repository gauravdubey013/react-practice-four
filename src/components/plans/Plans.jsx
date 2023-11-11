import React from "react";
import "./Plans.scss";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-c">
      <div className="blur blur-plans p-l" />
      <div className="blur blur-plans p-r" />
      <div className="prog-header">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now WithUs</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan">
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="features-details">
                  <img src={whiteTick} alt="" />{' '}
                  <span key={i}>{' ' + feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits {"->"}</span>
            </div>
            <button className="btn">
              <span>$ {plan.price}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
