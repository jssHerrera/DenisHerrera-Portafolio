import React from "react";

const HardSkillCard = ({ elem }) => {
  const { img, title } = elem;
  return (
    <div className="hard__kill-container-item">
      <span className="hard__kill-container-span">
        <img src={img} alt={title} loading="lazy"/>
      </span>
      <h2 className="hard__kill-container-title">{title}</h2>
    </div>
  );
};

export default HardSkillCard;
