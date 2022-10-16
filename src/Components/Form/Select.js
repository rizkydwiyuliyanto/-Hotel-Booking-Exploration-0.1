import React, { useEffect, useContext } from "react";
import { selectItem } from "./selectItem";
import arrowUp from "../../assets/images/arrow-up-2.png"
import arrowDown from "../../assets/images/arrow-down-2.png";
import checkIcon2 from "../../assets/images/check3.png";
import Date from "./Date";
import "../../style.css";
import { context } from "../../useContext";

const DropdownLabel = ({ Idx, Menu, Select, Setselect, IsChecked }) => {
          
    const handleClick = (comp) => {
        Setselect(Select.map(x => {
          return x.comp === comp ? { ...x, open: !x.open }: { ...x, open: false }
        }))
      }
    return (
            <div className={"row col-12 flex-column flex-md-row m-0 p-0 justify-content-between align-items-center"}>
             <div className={"rounded-3 mb-3 mb-md-0 mx-md-2 mx-0 col-12 col-xl-3 d-flex align-items-center justify-content-center"} style={{"width":"50px","height":"50px","backgroundColor":"#F7F6F9"}}>
                  <img className={"d-md-block d-none"} src={IsChecked?Menu.menuImg2:Menu.menuImg} width={"35"}/>
                  <img className={"d-block d-md-none"} src={IsChecked?Menu.menuImg2:Menu.menuImg} width={"50"}/>
            </div>
            <div className={"col d-flex flex-column align-items-center d-md-none col-xl-8 col-xxl-9"}>
                <div className={"d-flex mb-2 text-center flex-column align-items-center"}>
                    <span className={"fw-bold fs-normal"}>{Menu.menuTitle}</span>      
                    <span className={"fs-small text-secondary"}>{Menu.menuDesc}</span>
                </div>
                <img onClick={() => {handleClick(Idx.toString())}} src={Select[Idx].open?arrowUp:arrowDown} width={"15"}/>       
            </div>

            <div className={"col d-none d-md-block col-md-8 col-xxl-9"}>
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
    const { Reservation} = useContext(context);
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
              
              <div className={"d-flex  my-2 d-md-none align-items-center justify-content-between"}>
                    <div className={"text-end col fs-small text-secondary"}>
                      <span>from<span style={{"color":"#4B2AF4"}} className={"fw-bold fs-normal"}>${menu.price}</span></span>
                      <br/>
                      <span>/night</span>
                    </div>
              </div>
              <div className={`select border-form ${countToSetCheck(menu.id) === menu.type.length?"border-form-check":""} align-items-center position-relative rounded-3 p-3 mt-0 mt-md-3 d-flex`}>
                <div className={"d-none col-1 justify-content-center d-md-flex"}>
                    { countToSetCheck(menu.id) === menu.type.length?<Checkicon/>:
                        <div className={"border-form rounded-3 overflow-hidden d-flex align-items-center justify-content-center"} style={{"width":"30px","height":"30px"}}></div>
                    }
                </div>
              <div className={"col m-0 p-0"}>
                <DropdownLabel Idx={idx} Select={Select} Setselect={Setselect} Menu={menu} IsChecked={countToSetCheck(menu.id) === menu.type.length}/>
                {menu.type.map(x => {
             return (
                    <div className={`${Select[idx].open?"open":"close"} mt-3`}>
                    <div className={"row p-0 col-12 m-0 justify-content-between"}>
                    <span className={"fs-small p-0 fw-bold text-secondary mx-md-2"}>{x.option}</span>
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
                            <div style={{"height":"160px"}} className={`${classBorder} mx-md-2 mb-4 mb-xl-0 col-12 col-md position-relative rounded-3`}>
                                <input onInput={handleInput} data-id={menu.id} type={"radio"} name={x.name} value={y.name} className={"input-radio m-0 p-0"}/>
                                <div style={{"position":"absolute","left":"50%","top":"50%","transform":"translate(-50%,-50%)"}} className={"col-12 d-flex flex-column align-items-center justify-content-center"}>
                                    <img src={imgUrl} height={"70px"} width={"70px"}/>
                                            <div className={"fs-small flex-column justify-content-center d-flex align-items-center"}>
                                                <span className={"fs-small fw-bold mt-2"}>{y.name}</span><br/>
                                                <div className={"d-flex"}>
                                                  {y.price?<> <span className={"fw-bold color-primary"}>${y.price}</span>
                                                    <span className={"text-secondary"}>/night</span></>:""}
                                                   
                                                </div>
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
                  <div className={`${Select[idx].open?"open":"close"} mt-3`}>
                        <Date Reservation={Reservation}/>
                    </div>
              </div>
              </div>
              </>
            )
            
          }
          )}
        </>
    )
}

export default Select;