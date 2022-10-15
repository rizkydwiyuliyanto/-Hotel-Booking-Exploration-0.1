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
    const [count,setCount] = useState(0)

    const Ref = useRef();
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

    useEffect(() => {
      console.log(Form);
      setTimeout(() => {
        Ref.current.classList.add("form-open")
      }, 1500)
    })
    return (
      <div ref={Ref} className={"form d-flex flex-column"}>
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
              <div className={"rounded-2 position-relative d-flex align-items-center justify-content-between"}>
                <input onChange={handleChange} name={"firstName"}  className={"col-12 p-2 ps-3 rounded-2 input"} value={Form.firstName} required/>
                <div style={{"right":"0"}} className={"d-flex col-2 position-absolute justify-content-center align-items-center"}>
                    {Form.firstName?<img src={checkIcon} width={"22"}/>:""}
                </div>
              </div>
            </div>
            <div className={"mb-3 d-flex flex-column col-xl-6"}>
              <label className={"mb-2 fs-small text-secondary"}>LAST NAME *</label>
              <div className={"rounded-2 position-relative d-flex align-items-center justify-content-between"}>
                <input onChange={handleChange} name={"lastName"}  className={"col-12 p-2 ps-3 rounded-2 input"} value={Form.lastName} required/>
                <div style={{"right":"0"}} className={"d-flex col-2 position-absolute justify-content-center align-items-center"}>
                    {Form.lastName?<img src={checkIcon} width={"22"}/>:""}
                </div>
              </div>
            </div>
            <div className={"mb-3 d-flex flex-column col-xl-6"}>
              <label className={"mb-2 fs-small text-secondary"}>EMAIL ADDRESS *</label>
              <div className={"rounded-2 position-relative d-flex align-items-center justify-content-between"}>
                <input onChange={handleChange} name={"email"}  className={"col-12 p-2 ps-3 rounded-2 input"} value={Form.email} required/>
                <div style={{"right":"0"}} className={"d-flex col-2 position-absolute justify-content-center align-items-center"}>
                    {Form.email?<img src={checkIcon} width={"22"}/>:""}
                </div>
              </div>
            </div>
            <div className={"mb-3 d-flex flex-column col-xl-6"}>
              <label className={"mb-2 fs-small text-secondary"}>PHONE NUMBER *</label>
              <div className={"rounded-2 d-flex p-2 ps-3 justify-content-between input"}>
                <select style={{"backgroundColor":"white", "border":"none","color":Form.countryPhoneCode?"black":"grey"}} onChange={handleChange} name={"countryPhoneCode"} required>
                  <option value={""}></option>
                  <option value={"+62"}>+62</option>
                  <option value={"+48"}>+48</option>
                </select>
                <input onChange={handleChange} name={"phone"} style={{"border":"none","outline":"none"}} className={"col-7"} value={Form.phone} required/>
                <div className={"d-flex col-2 justify-content-center align-items-center"}>
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