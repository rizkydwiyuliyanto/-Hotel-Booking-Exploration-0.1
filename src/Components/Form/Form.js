import React, { useState, useEffect, useRef, useContext } from "react";
// import arrowUp from "../../assets/images/arrowup2.png"
// import arrowDown from "../../assets/images/arrowdown2.png";
import checkIcon from "../../assets/images/checklist.png";
import { context } from "../../useContext";
import { item } from "./selectItem";
import Select from "./Select";
import "../../style.css"
import Date from "./Date";



const Form = ({ Form, Setform }) => {
    const [open, setOpen] = useState(false);
    const [count,setCount] = useState(0);

    const Ref = useRef([]);
    const SelectRef = useRef();
    let initialState = [];

    for (let i = 0; i < item.length;i++){
      initialState.push({
        "open": false,
        "comp": i.toString()
      })
    }
    const [select,setSelect] = useState(initialState);

    const handleChange = (e) => {
      Setform({
        ...Form,
        [e.target.name] : e.target.value
      })
    }
    window.onclick = (e) => {
      let targetId = e.target.getAttribute("datatype");
      for (let i = 0;i < Ref.current.length;i++) {
        let id = Ref.current[i].getAttribute("datatype");
        if (targetId === id) {
          Ref.current[i].classList.replace("input", "input-select-active")
        }else{
          Ref.current[i].classList.replace("input-select-active", "input")
        }
      }
      // let id = e.target.getAttribute("datatype")
      // console.log(id)
    }
    return (
      <div className={"form d-flex flex-column"}>
        <div className={"d-flex justify-content-center my-4"}>
          {/* <button
            style={{"outline":"none"}}
            className={"mybutton py-3 text-center rounded-4 d-none justify-content-center align-items-center"}
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            <span className={"me-3 fs-small fw-bold"}>
               Read more
            </span>
            <img src={open?arrowUp:arrowDown} width={"18"}/>
          </button> */}
          <br />
        </div>
        <form className={"mt-3"}>
        <span className={"fs-normal mb-3 fw-bold"}>Enter Your details</span>
          <div className={"row"}>
            <div className={"mb-3 d-flex flex-column col-xl-6"}>
              <label className={"mb-2 fs-small text-secondary"}>FIRST NAME *</label>
              <div ref={el=>Ref.current[0] = el} datatype={"firstName"} className={"rounded-2 position-relative p-2 input d-flex align-items-center justify-content-between"}>
                <input onChange={handleChange} datatype={"firstName"} name={"firstName"} style={{"border":"none", "outline":"none"}}  className={"col-11 ps-3 rounded-2"} value={Form.firstName} required/>
                <div style={{"right":"0"}} className={"d-flex col-1 justify-content-center align-items-center"}>
                    {Form.firstName?<img src={checkIcon} width={"22"}/>:""}
                </div>
              </div>
            </div>
            <div className={"mb-3 d-flex flex-column col-xl-6"}>
              <label className={"mb-2 fs-small text-secondary"}>LAST NAME *</label>
              <div ref={el=>Ref.current[1] = el} datatype={"lastName"} className={"rounded-2 position-relative p-2 input d-flex align-items-center justify-content-between"}>
                <input datatype={"lastName"} onChange={handleChange} name={"lastName"} style={{"border":"none", "outline":"none"}}  className={"col-11 ps-3 rounded-2"} value={Form.lastName} required/>
                <div style={{"right":"0"}} className={"d-flex col-1 justify-content-center align-items-center"}>
                    {Form.lastName?<img src={checkIcon} width={"22"}/>:""}
                </div>
              </div>
            </div>
            <div className={"mb-3 d-flex flex-column col-xl-6"}>
              <label className={"mb-2 fs-small text-secondary"}>EMAIL ADDRESS *</label>
              <div ref={el=>Ref.current[2] = el} datatype={"email"} className={"rounded-2 position-relative p-2  input d-flex align-items-center justify-content-between"}>
                <input datatype={"email"} onChange={handleChange} name={"email"} style={{"border":"none", "outline":"none"}}  className={"col-11 ps-3 rounded-2"} value={Form.email} required/>
                <div style={{"right":"0"}} className={"d-flex col-1 justify-content-center align-items-center"}>
                    {Form.email?<img src={checkIcon} width={"22"}/>:""}
                </div>
              </div>
            </div>

            <div className={"mb-3 d-flex flex-column col-xl-6"}>
              <label className={"mb-2 fs-small text-secondary"}>PHONE NUMBER *</label>
              <div ref={el=>Ref.current[3] = el} datatype={"phone"} className={"rounded-2 d-flex p-2 align-items-center position-relative input overflow-hidden"}>
                <select datatype={"phone"} ref={SelectRef} style={{"height":"100%","color":Form.countryPhoneCode?"black":"grey"}} className={"select-phone d-flex justify-content-center col-2"} onChange={handleChange} name={"countryPhoneCode"} required>
                  <option value={""}></option>
                  <option value={"+62"}>+62</option>
                  <option value={"+48"}>+48</option>
                </select>
                <input  type={"number"} datatype={"phone"} onChange={handleChange} style={{"height":"100%", "border":"none", "outline":"none"}} name={"phone"} className={"col-9 input-number ms-auto ps-3 rounded-end"} value={Form.phone} required/>
                <div className={"d-flex col-1 justify-content-center align-items-center"}>
                    {Form.countryPhoneCode && Form.phone?<img src={checkIcon} width={"22"}/>:""}
                </div>
              </div>
            </div>
          </div>
            
          <span className={"fs-normal mb-3 fw-bold"}>Add to your stay</span>
            <Select
              Count={count}
              Setcount={setCount}
              Setform={Setform}
              Form={Form}
              Select={select}
              Setselect={setSelect}
            />
        </form>
      </div>
    );
  }
  
export default Form;