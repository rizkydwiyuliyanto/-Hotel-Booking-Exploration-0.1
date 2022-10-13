import React from "react";
import right_arrow from "../../assets/images/right-arrow1.png";
import down_arrow from "../../assets/images/down-arrow1.png";
import "../../style.css";
import calendar from "../../assets/images/calendar1.png"

const Date = ( {Reservation} ) => {
    return (
        <>
        <div className={"col-12 col-md rounded-4 border-form d-flex align-items-center fs-small p-3"}>
            <span>{ Reservation.schedule.checkIn.date }</span>
            <span className={"ms-3"}>{ Reservation.schedule.checkIn.time }</span>
            <img className={"ms-auto"} src={calendar} width={"25"}/>
        </div>
        
        <div className={"d-none d-md-flex align-items-center mx-3"}><img src={right_arrow} width={"32"}/></div>
        <div className={"d-flex d-md-none my-2 align-items-center mx-3"}><img src={down_arrow} width={"32"}/></div>

        <div className={"col-12 col-md rounded-4 border-form d-flex align-items-center fs-small p-3"}>
            <span>{ Reservation.schedule.checkOut.date }</span>
            <span className={"ms-2"}>{ Reservation.schedule.checkOut.time }</span>
            <img className={"ms-auto"} src={calendar} width={"25"}/>
        </div>
        </>
    )
}

export default Date