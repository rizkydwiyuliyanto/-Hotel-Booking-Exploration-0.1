import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./style.css";


const Section = ({ children }) => {
    return (
        <div className={"section"}>
            {children}
        </div>
    )
}


const Book = () => {
  return (
    <>
      <Section>
          <Outlet />
      </Section>
    </>
  );
};

export default Book;