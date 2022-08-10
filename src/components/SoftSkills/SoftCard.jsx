import React from "react";

const SoftCard = ({ elem }) => {
  const { img, title } = elem;
  return (
    <div className="softSkills__wrapper">
      <div className="softSkills__box">
        <img className="softSkills__box-img" src={img} alt={title} loading="lazy"/>
      </div>
      <p>{title}</p>
    </div>
  );
};

export default SoftCard;
