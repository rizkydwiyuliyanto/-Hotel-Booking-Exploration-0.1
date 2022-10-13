import React, { useEffect, useState } from "react";
import "../../style.css";
import { useLocation } from "react-router-dom";
import checkIcon from "../../assets/images/check.png"

const Check = ({ children }) => {
  return (
    <div className="check-breadcumps">
      <div>
        <img src={checkIcon} width={"20px"} />
      </div>
      <span>{children}</span>
      <div></div>
    </div>
  );
};

const Current = ({ children, Idx }) => {
  return (
    <div className={"current-breadcumps"}>
      <div>{Idx}</div>
      <span>{children}</span>
      <div></div>
    </div>
  );
};

const Next = ({ children, Idx }) => {
  return (
    <div className={"next-breadcumps"}>
      <div>{Idx}</div>
      <span>{children}</span>
      <div></div>
    </div>
  );
};

const Breadcumps = ({ Items }) => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  })
  return (
    <>
      <div className={"fs-normal breadcumps-parent"}>
        <div className={"breadcumps-items"}>
          {Items.map((x, idx) => {
            if (x.complete) return <Check>{x.navigation}</Check>;

            if (!x.complete && (location.pathname === x.url)) return <Current Idx={idx+1}>{x.navigation}</Current>;

            return <Next Idx={idx+1}>{x.navigation}</Next>;
          })}
        </div>
      </div>
    </>
  );
};

export default Breadcumps;