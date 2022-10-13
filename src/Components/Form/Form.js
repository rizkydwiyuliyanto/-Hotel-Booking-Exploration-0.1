import React, { useState, useEffect, useRef, useContext } from "react";
import arrowUp from "../../assets/images/arrowup2.png"
import arrowDown from "../../assets/images/arrowdown2.png";
import checkIcon from "../../assets/images/checklist.png";
import checkIcon2 from "../../assets/images/check3.png";
import { selectItem } from "./selectItem";
import { context } from "../../useContext";
import Select from "./Select";
import Date from "./Date";

const Checkicon = () => {
  return (
    <div
      className={"rounded-3 overflow-hidden d-flex align-items-center justify-content-center"}
      style={{ width: "30px", height: "30px" }}>
      <img style={{ objectFit: "cover" }} src={checkIcon2} width={"38px"} />
    </div>
  );
};

const Form = ({ Form, Setform }) => {
    const [open, setOpen] = useState(false);
    const [count,setCount] = useState(0)
    const { Reservation } = useContext(context)

    const countToSetCheck = (obj) => {
      let a = 0;
      selectItem.forEach(y => {
        if (y.id === obj){
          y.type.forEach(x => {
            if (Form.option[obj].hasOwnProperty(x.name)){
               a += 1
            }
          })
        }
      })
      return a
    }

    const Ref = useRef();
    let initialState = [];

    for (let i = 0; i < Object.keys(Form.option).length;i++){
      initialState.push({
        "open": false,
        "comp": i.toString()
      })
    }
    const [select,setSelect] = useState(initialState);
    const showInfo = () => {
        if (open) {
          Ref.current.classList.add("form-open");
        }else{
          Ref.current.classList.replace("form-open", "form-close");
        }
    }
  
    const handleChange = (e) => {
      Setform({
        ...Form,
        [e.target.name] : e.target.value
      })
    }
  
    const handleClick = (comp) => {
      setSelect(select.map(x => {
        return x.comp === comp ? { ...x, open: !x.open }: { ...x, open: false }
      }))
    }

    useEffect(() => {
      console.log(Form);
    })
    return (
      <div ref={Ref} className={"form d-flex flex-column"}>
        <div className={"d-flex justify-content-center my-4"}>
          <button
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
          </button>
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
          {selectItem.map((menu, idx) => {
            return(
              <>
              <div className={"d-flex my-2 d-md-none align-items-center justify-content-between"}>
                <div>
                    { countToSetCheck(menu.id) === menu.type.length?<Checkicon/>:
                        <div className={"border-form rounded-3 overflow-hidden d-flex align-items-center justify-content-center"} style={{"width":"30px","height":"30px"}}></div>
                    }
                </div>
                <div className={"text-end col fs-small text-secondary"}>
                  <span>from<span style={{"color":"#4B2AF4"}} className={"fw-bold fs-normal"}>${menu.price}</span></span>
                  <br/>
                  <span>/night</span>
              </div>
                </div>
              <div className={`select border-form align-items-center position-relative rounded-3 p-3 mt-0 mt-md-3 d-flex`}>
                <div className={"d-none d-md-block"}>
                    { countToSetCheck(menu.id) === menu.type.length?<Checkicon/>:
                        <div className={"border-form rounded-3 overflow-hidden d-flex align-items-center justify-content-center"} style={{"width":"30px","height":"30px"}}></div>
                    }
                </div>
              <div className={"col"}>
                <div className={"row col-12 ms-0 ms-md-auto justify-content-between align-items-center"}>
                <div className={"rounded-3  mx-2 col-5 col-xl d-flex align-items-center justify-content-center"} style={{"width":"50px","height":"50px","backgroundColor":"#F7F6F9"}}>
                  <img src={countToSetCheck(menu.id) === menu.type.length?menu.menuImg2:menu.menuImg} width={"35"}/>
                </div>
                <div className={"col col-xl-8 col-xxl-9"}>
                  <div className={"d-flex align-items-center"}>
                    <span className={"me-3 fw-bold fs-normal"}>{menu.menuTitle}</span>      
                    <img onClick={() => {handleClick(idx.toString())}} src={select[idx].open?arrowUp:arrowDown} width={"15"}/>       
                  </div>
                  <span className={"fs-small text-secondary"}>{menu.menuDesc}</span>
                </div>
                <div className={"d-none d-md-block text-end col fs-small text-secondary"}>
                  <span>from<span style={{"color":"#4B2AF4"}} className={"fw-bold fs-normal"}>${menu.price}</span></span>
                  <br/>
                  <span>/night</span>
                </div>
                </div>

                {menu.type.map(x => {
             return (
                    <div className={`${select[idx].open?"open":"close"} mt-3`}>
                    <div className={"row col-12 ms-auto justify-content-between"}>
                    <span className={"fs-small fw-bold text-secondary"}>{x.option}</span>
                    {x.select.map(y => {
                      let classBorder = "border-form-radio"
                      let imgUrl = y.imgUrl;
                      // if ()
                      let id = menu.id
                      let name = x.name
                      // test(Form.option[menu.id],menu.id,x.name);
                      if (Form["option"][id][name] === y.name){
                          imgUrl = y.imgUrl2;
                          classBorder = "border-form-radio-check";
                      }
                      return (
                        <Select
                          Count={count}
                          Setcount={setCount}
                          Type={x.option}
                          Name={x.name}
                          Value={y.name}
                          Setform={Setform}
                          Form={Form}
                          Id={menu.id}
                          Classborder={classBorder}
                        >
                          <img src={imgUrl} width={"70px"}/>
                            <div className={"fs-small flex-column justify-content-center d-flex align-items-center"}>
                              <span className={"fs-small fw-bold mt-2"}>{y.name}</span><br/>
                              {x.option === "PLACE TYPE"?"":
                                <div className={"d-flex"}>
                                  <span className={"fw-bold color-primary"}>${y.price}</span>
                                  <span className={"text-secondary"}>/night</span>
                              </div>}
                            </div>
                        </Select>
                      );
                    })}
                    </div>
                    </div>
                  )
              
                })}
              <div className={`${select[idx].open?"open":"close"} mt-3`}>
                      <div className={"row col-12 align-items-end ms-0 ms-md-auto justify-content-between"}>
                        <div className={"d-md-flex d-none col-7 justify-content-between"}>
                            <span className={"fs-small fw-bold text-secondary"}>FROM</span>
                            <span className={"fs-small fw-bold text-secondary"}>TO</span>
                        </div>
                        <div className={"col-12 mt-3 d-flex flex-md-row flex-column align-items-center justify-content-between"}>
                            <Date Reservation={Reservation}/>
                        </div>
                      </div>
                    </div>
              </div>

              </div>
              </>
            )
          })}

        </form>
      </div>
    );
  }
  
export default Form;