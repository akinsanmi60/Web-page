/* eslint-disable */
// @ts-nocheck
import dateFormat from "date-fns/format";
import moment from "moment";
import React from "react";
import { capitalizeFirstLetter } from "../../../../../../Util/helper";
import { CardWrapper } from "./style";

const JobCard = ({ item, i, props }) => {
  // const handleClick = selected => {
  //   props.setActiveItem({ ...selected, i });
  // };

  const {
    id,
    logo,
    company,
    position,
    featured,
    level,
    contract,
    created,
    location,
    isNew,
    minprice,
    maxprice,
    isHiring,
  } = item;

  return (
    <CardWrapper
    // active={props.activeItem?._id === item._id}
    // onClick={() => handleClick(item)}
    >
      <div className="blog-box">
        <div className="blog-wrap">
          <div className="imgbox">
            <img src={logo} alt="" className="logodiv" />
          </div>
          <div className="coybox">
            <div className="coydetails">
              <div className="company">
                <h1 className="title">{position}</h1>
                <span className="cname">{company}</span>
              </div>
              <div className="details">
                <span>{contract}</span>
                <span>&nbsp;•&nbsp;</span>
                <span>{location}</span>
                <div>
                  <p>Level: {level}</p>
                  <p>Posted: {moment(`${created}`).format("LL")}</p>
                  <div>
                    {isHiring ? <span>🎯 currently hiring</span> : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="price">
              <div className="pricecoontainer">
                <div>
                  <span>₦{minprice}</span>
                  <span>&nbsp;-&nbsp;</span>
                  <span>₦{maxprice}</span>
                </div>
              </div>
              <div className="vcoontainer">
                {isNew && <p className="new">new ✳️</p>}
                {featured && <p className="featured">featured</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default JobCard;
