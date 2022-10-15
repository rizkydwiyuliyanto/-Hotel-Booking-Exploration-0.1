import React from "react";
import right_arrow from "../../assets/images/next-2.png";
import down_arrow from "../../assets/images/down-arrow-2.png";
import "../../style.css";
import calendar from "../../assets/images/calendar1.png"

const Date = ( {Reservation} ) => {
    return (
            <>
        <div className={"d-flex align-items-md-center align-items-center flex-column flex-md-row p-0 col-12 justify-content-between"}>
            <div className="d-flex mx-md-2 flex-column col-md-5 col-12">
            <span className={"fs-small fw-bold text-secondary"}>FROM</span>
            <div className={"col-12 col-md rounded-4 position-relative border-form d-flex align-items-center fs-small p-3"}>
                <span>{ Reservation.schedule.checkIn.date }</span>
                <span className={"ms-3"}>{ Reservation.schedule.checkIn.time }</span>
                <img className={"ms-auto"} src={calendar} width={"25"}/>
                <div style={{"right":"-24%"}} className={"d-none position-absolute d-md-flex align-items-center"}><img src={right_arrow} width={"28"}/></div>
            </div>
            </div>
        
            <div className={"d-flex d-md-none mt-3 align-items-center"}><img src={down_arrow} width={"28"}/></div>
          
            <div className="d-flex mx-md-2 flex-column p-0 col-md-5 col-12">
                <span className={"fs-small fw-bold text-secondary"}>TO</span>
                <div className={"col-12 col-md rounded-4 border-form d-flex align-items-center fs-small p-3"}>
                    <span>{ Reservation.schedule.checkOut.date }</span>
                    <span className={"ms-2"}>{ Reservation.schedule.checkOut.time }</span>
                    <img className={"ms-auto"} src={calendar} width={"25"}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Date