import React from "react";
import "../../style.css"

const Logo = () => {
    return (
      <div className={"d-flex align-items-center justify-content-center"}>
        <div className={"footer-logo me-3"}>
           H
        </div>
        <span className={"fs-normal fw-bold"}>Hotelio</span>
      </div>
    );
  };

  const List = () => {
    return (
      <ul className={"mb-0 text-secondary p-0 mt-5 mx-auto d-flex justify-content-between col-8"}>
        <li>Overview</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Careers</li>
        <li>Helo</li>
        <li>Privacy</li>
      </ul>
    );
  }

const Footer = () => {
    return (
        <div className={"fs-small footer-section mt-5"}>
            <div>
                <div className={"col-xl-9 col-xxl-6 mx-auto d-flex flex-column"}>
                    <Logo/>
                    <List/>
                </div>
                <div style={{"borderTop":"1px solid grey"}} className={"mt-5 pt-4 d-flex justify-content-between"}>
                    <span>2022 Hotelio All rights reserved</span>
                    <span>Powered by</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;