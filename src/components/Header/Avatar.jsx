import React from "react";

export const Avatar = () => {
  return (
    <div className="header__avatar">
      <div className="header__morphing">
        <div className="header__caja">
          <img
            className="header__img"
            src="/img/AstoDev.png"
            alt="Avatar"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
