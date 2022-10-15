import React, { useEffect, useState } from "react";
import { selectItem } from "./selectItem";
import arrowUp from "../../assets/images/arrowup2.png"
import arrowDown from "../../assets/images/arrowdown2.png";
import checkIcon from "../../assets/images/checklist.png";
import checkIcon2 from "../../assets/images/check3.png";
import "../../style.css";

const DropdownLabel = ({ Idx, Menu, Select, Setselect, IsChecked }) => {
          
    const handleClick = (comp) => {
        Setselect(Select.map(x => {
          return x.comp === comp ? { ...x, open: !x.open }: { ...x, open: false }
        }))
      }
    return (
            <div className={"row col-12 ms-0 ms-md-auto justify-content-between align-items-center"}>
             <div className={"rounded-3  mx-2 col-5 col-xl d-flex align-items-center justify-content-center"} style={{"width":"50px","height":"50px","backgroundColor":"#F7F6F9"}}>
                  <img src={IsChecked?Menu.menuImg2:Menu.menuImg} width={"35"}/>
            </div>
            <div className={"col col-xl-8 col-xxl-9"}>
                <div className={"d-flex align-items-center"}>
                    <span className={"me-3 fw-bold fs-normal"}>{Menu.menuTitle}</span>      
                    <img onClick={() => {handleClick(Idx.toString())}} src={Select[Idx].open?arrowUp:arrowDown} width={"15"}/>       
                </div>
                  <span className={"fs-small text-secondary"}>{Menu.menuDesc}</span>
                </div>
                <div className={"d-none d-md-block text-end col fs-small text-secondary"}>
                  <span>from<span style={{"color":"#4B2AF4"}} className={"fw-bold fs-normal"}>${Menu.price}</span></span>
                  <br/>
                  <span>/night</span>
                </div>
            </div>

    )
}

const Checkicon = () => {
    return (
      <div
        className={"rounded-3 overflow-hidden d-flex align-items-center justify-content-center"}
        style={{ width: "30px", height: "30px" }}>
        <img style={{ objectFit: "cover" }} src={checkIcon2} width={"38px"} />
      </div>
    );
  };

const Select = ( { Select, Setselect, Setcount, Form, Setform } ) => {

    const handleInput = (e) => {
        let id = e.target.dataset.id;
        Setcount(prev => prev + 1);

        Setform({
            ...Form,
            "option" : {
                ...Form["option"],
                [id]: {
                    ...Form["option"][id],
                    [e.target.name] : e.target.value
                }
            }
        })
    }

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

    return (
        <>
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
                <DropdownLabel Idx={idx} Select={Select} Setselect={Setselect} Menu={menu} IsChecked={countToSetCheck(menu.id) === menu.type.length}/>
                {menu.type.map(x => {
             return (
                    <div className={`${Select[idx].open?"open":"close"} mt-3`}>
                    <div className={"row col-12 ms-auto justify-content-between"}>
                    <span className={"fs-small fw-bold text-secondary"}>{x.option}</span>
                    {x.select.map(y => {
                      let classBorder = "border-form-radio"
                      let imgUrl = y.imgUrl;
                      let id = menu.id
                      let name = x.name
                      if (Form["option"][id][name] === y.name){
                          imgUrl = y.imgUrl2;
                          classBorder = "border-form-radio-check";
                      }
                      return (
                        <>
                            <div style={{"height":"160px"}} className={`${classBorder}  mx-0 mx-md-2 mb-4 mb-xl-0 col-11 col-md-5 col-xl position-relative rounded-3`}>
                                <input onInput={handleInput} data-id={menu.id} type={"radio"} name={x.name} value={y.name} className={"input-radio m-0 p-0"}/>
                                <div style={{"position":"absolute","left":"50%","top":"50%","transform":"translate(-50%,-50%)"}} className={"col-12 d-flex flex-column align-items-center justify-content-center"}>
                                    <img src={imgUrl} height={"70px"} width={"70px"}/>
                                            <div className={"fs-small flex-column justify-content-center d-flex align-items-center"}>
                                                <span className={"fs-small fw-bold mt-2"}>{y.name}</span><br/>
                                                {x.option === "PLACE TYPE"?"":
                                                <div className={"d-flex"}>
                                                    <span className={"fw-bold color-primary"}>${y.price}</span>
                                                    <span className={"text-secondary"}>/night</span>
                                                </div>}
                                            </div>
                                </div>
                            </div>
                        </>
                      );
                    })}
                    </div>
                    </div>
                  )
                })}
              </div>
              </div>
              </>
            )
          })}

            {/* <div style={{"height":"160px"}} className={`${Classborder}  mx-0 mx-md-2 mb-4 mb-xl-0 col-11 col-md-5 col-xl position-relative rounded-3`}>
                <input onInput={handleInput} type={"radio"} name={Name} value={Value} className={"input-radio m-0 p-0"}/>
                <div style={{"position":"absolute","left":"50%","top":"50%","transform":"translate(-50%,-50%)"}} className={"col-12 d-flex flex-column align-items-center justify-content-center"}>
                    { children }
                </div>
            </div> */}
        </>
    )
}

export default Select;