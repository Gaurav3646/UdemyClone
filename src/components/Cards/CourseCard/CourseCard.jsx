import React from "react";
import { Link } from "react-router-dom";
import Button1 from "../../../utils/Buttons/Button1/Button1";
import CircleButton from "../../../utils/Buttons/CircleButton/CircleButton";
import starIcon from "/icons/star.png";
import css from "./CourseCard.module.css";

import heartIcon from "/icons/heart.png";

const CourseCard = (props) => {
  const {
    path = "/",
    img = "",
    ttl = "",
    authDet = "",
    prc = 0,
    oldprc = 0,
    stars = {},
    noOfRats = 0,
    updatedDate = new Intl.DateTimeFormat("en-IN", {
      dateStyle: "long",
    }).format(new Date()),
    courseDuration = 1000000,
    level = "Beginner Level",
    crsSubtxt = "Python For Beginners : This course is meant for absolute beginners in programming or in python.",
  } = props?.data;

  const extraCss = props.extraCss;

  let totalRating = (
    (1 * stars?.a + 2 * stars?.b + 3 * stars?.c + 4 * stars?.d + 5 * stars?.e) /
      stars?.a +
    stars?.b +
    stars?.c +
    stars?.d +
    stars?.e
  ).toFixed(2);

  let duration = new Date(courseDuration * 1000);
  let hours = duration.getUTCHours();
  let minutes = duration.getUTCMinutes();

  let durationInHrs =
    hours?.toString().padStart(2, "0") +
    "." +
    minutes?.toString().padStart(1, "0");

  let addToCartHandler = () => {
    alert("Added to cart");
  };
  let addToWishListHandler = () => {
    alert("Added to wish list");
  };

  return (
    <>
      <div className={css.outerDiv} id={props.id} style={extraCss}>
        <Link className={css.innerDiv} to={path}>
          <div className={css.imgBox}>
            <img src={img} alt="course thumbnail" className={css.courseImg} />
          </div>
          <div className={css.cardBdy}>
            <div className={css.ttl}>{ttl}</div>
            <div className={css.authDet}>{authDet}</div>
            <div className={css.stats}>
              <div className={css.rat1}>4.9</div>
              <div className={css.rat2}>
                <img src={starIcon} className={css.starIcon} />
                <img src={starIcon} className={css.starIcon} />
                <img src={starIcon} className={css.starIcon} />
                <img src={starIcon} className={css.starIcon} />
                <img src={starIcon} className={css.starIcon} />
              </div>
              <div className={css.noOfRats}>({noOfRats})</div>
            </div>
            <div className={css.prc}>
              <span className={css.newPrc}>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(prc)}
              </span>
              <span className={css.oldPrc}>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(oldprc)}
              </span>
            </div>
            <div className={css.tags}></div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CourseCard;
