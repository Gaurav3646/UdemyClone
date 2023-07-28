import React from "react";

import css from "./CourseIncludesCard.module.css";

const CourseIncludesCard = (props) => {
  const { id = null, img = "", txt = "" } = props.data;
  return (
    <div className={css.outerDiv}>
      <img src={img} alt="icon" className={css.img} />
      <span className={css.txt}>{txt}</span>
    </div>
  );
};

export default CourseIncludesCard;
