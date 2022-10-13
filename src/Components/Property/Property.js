import React from "react";
import bedroomImage from "../../assets/images/bedroom.jpg";
import { category } from "./category";
import starIcon from "../../assets/images/star.png";
import "../../style.css";

const Rating = () => {
    return (
      <div
        style={{ width: "110px" }}
        className={"d-flex me-2 justify-content-between"}
      >
        <img src={starIcon} width={"18"} />
        <img src={starIcon} width={"18"} />
        <img src={starIcon} width={"18"} />
        <img src={starIcon} width={"18"} />
        <img src={starIcon} width={"18"} />
      </div>
    );
  };
  
  const Property = () => {
    return (
      <>
        <div
          className={
            "d-flex flex-xl-row flex-column justify-content-xl-start border border-secondary align-items-center p-3 rounded-3"
          }
        >
          <div className={"col-xl-3 col-md-8 col-12 mb-4 mb-xl-0 rounded-3 overflow-hidden me-xl-4"}>
            <img src={bedroomImage} width={"100%"} />
          </div>
          <div className={"col-xl-8 align-self-start"}>
            <div className={"d-flex flex-column mb-2"}>
              <span style={{ color: "#169561" }} className={"fs-small fw-bold"}>
                THE CHOICE OF FAMILIES
              </span>
              <span className={"fw-bold"}>
                King ed stylish Apartment with Loft style family room
              </span>
            </div>
            <div className={"mt-1 d-flex fc-secondary align-items-center"}>
              <Rating />
              <span className={"me-2"}>4.87</span>
              <span>202 reviews</span>
            </div>
            <div className={"d-flex flex-column align-items-center align-items-md-start flex-md-row fw-bold fc-secondary justify-content-between fs-small mt-2"}>
              {category.map((x) => {
                let nameCategory, total, imgUrl, unit;
                nameCategory = x.nameCategory;
                total = x.total;
                imgUrl = x.imgUrl;
                unit = x.unit ? x.unit : "";
                return (
                  <div className={"d-md-block mt-md-0 mt-3 d-flex flex-column align-items-center"}>
                    <span>{nameCategory}</span>
                    <div className={"d-flex mt-1 align-items-center"}>
                      <span className={"fw-bold fs-normal text-dark me-2"}>
                        {total} {unit ? unit : ""}
                        {unit ? <sup>2</sup> : ""}{" "}
                      </span>
                      <img src={imgUrl} width={"20"} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Property;