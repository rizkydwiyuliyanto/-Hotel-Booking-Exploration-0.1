import React, { useEffect, useRef, useState } from "react";
import arrowDown from "../../assets/images/arrow-down.png";
import { Items } from "./Items";
import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";
import "../../style.css";

const Logo = () => {
  return (
    <Link style={{"textDecoration":"none"}} to={"/"}>
      <div className={"nav-logo"}>
        <div className={"logo"}>H</div>
        <span className={"fs-normal text-dark"}>Hotelio</span>
      </div>
    </Link>
  );
};

const someComp = (key,url, page) => {
  const location = useLocation().pathname
  const match = useMatch(url);
  return (
    <li key={key} className={"m-0  list fs-normal"}>
      <Link className={match||location.includes(url)?"nav-active":""} style={{"textDecoration":"none","color":match||location.includes(url)?"#4B2AF4":"black"}} to={url}>{page}</Link>
      {page === "Book" ? <></> : <img className={"ms-2"} src={arrowDown} width={"12px"} />}
    </li>
  );
};


const Navitem = () => {
  return (
    <ul className={"nav-items fs-normal m-0 p-0"}>
      {Items.map((x, idx) => {
        return (
         someComp(idx,x.url, x.Page)
        );
      })}
    </ul>
  );
};

const Login = () => {
    return (
        <div className={"nav-login fs-normal"}>
            <a>Log in</a>
            <a>Sign up</a>
        </div>
    )
}

const Hamburger = ({ Setopen }) => {
  const Ref = useRef()
  const handleClick=() => {
    Ref.current.classList.toggle("hamburger_open");
    Setopen(prev => !prev)
  }
  return (
    <>
        <div ref={Ref} onClick={handleClick} className={"menu btn11"} data-menu="11">
            <div class="icon-left"></div>
            <div class="icon-right"></div>
        </div>
    </>
  )
}

const NavitemMobile = ({Open}) => {
  return (
    <div className={`nav-items-mobile ${Open?"open-nav-items":"close-nav-items"}`}>
    <ul className={`fs-normal m-0 p-0`}>
      {Items.map((x, idx) => {
        return (
         someComp(idx,x.url, x.Page)
        );
      })}
    </ul>
    </div>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
{/* mobile */}
    <div className={"nav-section-mobile d-block d-lg-none"}>
      <div className={"nav-parent"}>
      <Logo />
      <NavitemMobile Open={open}/>
      <Hamburger Setopen={setOpen} Open={open}/>
    </div>
    </div>
{/* desktop */}
    <div className={"nav-section d-none d-lg-block"}>
        <div className={"nav-parent"}>
          <Logo />
          <Navitem />
          <Login />
        </div>
    </div>
    </>
  );
};

export default Navbar