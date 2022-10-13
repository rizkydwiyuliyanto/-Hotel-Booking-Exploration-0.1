import React, { useEffect, useState } from "react";
import "../../style.css";

const Select = ( { Setcount,children, Name, Value, Type, Form, Setform, Classborder, Id } ) => {
    const handleInput = (e) => {
        Setcount(prev => prev + 1)
        Setform({
            ...Form,
            "option" : {
                ...Form["option"],
                [Id]: {
                    ...Form["option"][Id],
                    [e.target.name] : e.target.value
                }
            }
        })
    }

    return (
      <div style={{"height":"160px"}} className={`${Classborder}  mx-0 mx-md-2 mb-4 mb-xl-0 col-11 col-md-5 col-xl position-relative rounded-3`}>
        <input onInput={handleInput} type={"radio"} name={Name} value={Value} className={"input-radio m-0 p-0"}/>
        <div style={{"position":"absolute","left":"50%","top":"50%","transform":"translate(-50%,-50%)"}} className={"col-12 d-flex flex-column align-items-center justify-content-center"}>
            { children }
        </div>
      </div>
    )
}

export default Select;