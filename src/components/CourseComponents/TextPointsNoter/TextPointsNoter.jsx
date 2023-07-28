import React from "react";

import css from "./TextPointsNoter.module.css";
import tick from "/icons/tick.png";

const TextPointsNoter = (props) => {
  const { ttl = "", points = [], prefix = "✓" } = props.data;
  return (
    <div className={css.box}>
      <div className={css.ttl}>{ttl}</div>
      <div className={css.bdy}>
        <ul className={css.ul}>
          {points?.map((point, id) => {
            return (
              <li className={css.li} key={id}>
                <span>
                  <img width="20px" src={tick} />
                </span>
                <span>{point}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TextPointsNoter;
