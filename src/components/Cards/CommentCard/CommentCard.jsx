import React from "react";
import css from "./Comment.module.css";
import user from "/icons/user-empty.png";
import dots from "/icons/dots.png";
import like from "/icons/like.png";
import dislike from "/icons/dislike.png";
import starIcon from "/icons/star.png";
const CommentCard = () => {
  return (
    <div className={css.card}>
      <div className={css.profile}>
        <div className={css.pro}>
          <div className={css.pic}>
            <img src={user} />
          </div>
          <div className={css.nameCon}>
            <div className={css.name}>Saurav</div>
            <div className={css.rat2}>
              <img src={starIcon} className={css.starIcon} />
              <img src={starIcon} className={css.starIcon} />
              <img src={starIcon} className={css.starIcon} />
              <img src={starIcon} className={css.starIcon} />
              <img src={starIcon} className={css.starIcon} />
              <span className={css.time}>2 week ago</span>
            </div>
          </div>
        </div>
        <div className={css.three}>
          <img src={dots} />
        </div>
      </div>
      <div className={css.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione vero
        facere nobis dolorum est sed nesciunt aliquam velit impedit ad, ex totam
        ipsa eligendi soluta magnam! Placeat cumque eius nam?
      </div>
      <div className={css.desc}>
        <span className={css.btn}>helpful?</span>
        <span className={css.btn}>
          <img src={like} />
        </span>
        <span className={css.btn}>
          <img src={dislike} />
        </span>
      </div>
    </div>
  );
};

export default CommentCard;
