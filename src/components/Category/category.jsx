import React from "react";
import emotion from "../../assets/icons/감정.svg";
import economy from "../../assets/icons/경제.svg";
import social from "../../assets/icons/사회.svg";
import health from "../../assets/icons/신체.svg";
import spiritual from "../../assets/icons/영적.svg";
import job from "../../assets/icons/직업.svg";
import study from "../../assets/icons/학습.svg";
import environment from "../../assets/icons/환경.svg";

function Category() {
  return (
    <div>
      <div className="category1">
        <img src={health} alt="health" />
        <img src={emotion} alt="emotion" />
        <img src={social} alt="social" />
        <img src={spiritual} alt="spiritual" />
      </div>
      <div className="category2">
        <img src={study} alt="study" />
        <img src={environment} alt="environment" />
        <img src={economy} alt="economy" />
        <img src={job} alt="job" />
      </div>
    </div>
  );
}

export default Category;
