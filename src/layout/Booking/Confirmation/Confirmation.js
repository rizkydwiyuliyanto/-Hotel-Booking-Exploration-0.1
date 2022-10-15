import React, { useContext, useEffect } from "react";
import { Items } from "./Breadcumps/Items";
import { Navigate, useNavigate } from "react-router-dom";
import Breadcumps from "../Breadcumps";
import Card from "../../../Components/Card/Card";
import Reservation from "../../../Components/Reservation/Reservation";
import { context } from "../../../useContext";
import qr from "../../../assets/images/qr-code.png"
import checkConfirmed from "../../..//assets/images/check-confirmed.png";
import "../../../style.css";

const Content = ({ children }) => {
    return (
      <div className={"row position-relative justify-content-between"}>
        {children}
      </div>
    );
  };

  const Checkconfirmed = () => {
    return (
      <div style={{"display":"grid","placeItems":"center","backgroundColor":"white"}} className={"me-4 rounded-2"}>
        <img src={checkConfirmed} width={"50px"}/>
      </div>
    )
  }

  const Confirmed = () => {
    return (
      <>
        <div className={"p-1 col-12 confirmed-parent d-flex justify-content-center position-absolute"}>
            <div className={"confirmed px-2 align-items-center d-flex h-100 col-12"}>
                <Checkconfirmed/>
                <div className={"fs-small d-flex flex-column justify-content-between"}>
                    <span className={"fw-bold"}>Your booking is confirmed</span>
                    <span className={"text-secondary col-11"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                </div>
            </div>
        </div>
      </>
    )
  }

const BookingDetails = ({ Data }) => {
  return (
    <>
    <h3>Booking details</h3>
      <div className={"row"}>
        <div className={"d-flex fs-small col-12 col-md flex-column"}>
          <span className={"text-secondary fs-small my-md-3"}>GUEST</span>
          <span className={"fw-bold"}>
            {Data.firstName} {Data.lastName}
          </span>
        </div>
        <div className={"d-flex fs-small mt-2 mt-md-0 col-12 col-md flex-column"}>
          <span className={"text-secondary fs-small my-md-3"}>CHECK-IN</span>
          <span className={"fw-bold"}>{Data.schedule.checkIn.date}</span>
          <span>{Data.schedule.checkIn.time}</span>
        </div>
        <div className={"d-flex fs-small mt-2 mt-md-0 col-12 col-md flex-column"}>
          <span className={"text-secondary fs-small my-md-3"}>CHECK-OUT</span>
          <span className={"fw-bold"}>{Data.schedule.checkOut.date}</span>
          <span>{Data.schedule.checkOut.time}</span>
        </div>
      </div>
      <div className={"row mt-3 mt-md-5"}>
        <div className={"d-flex fs-small mt-2 mt-md-0 col-12 col-md flex-column"}>
          <span className={"text-secondary fs-small my-md-3"}>YOUR RESERVATION</span>
          <span className={"fw-bold"}>
            {Data.lengthOfStay} Nights, {Data.location.length} Apartement
          </span>
        </div>
        <div className={"d-flex fs-small mt-2 mt-md-0 col-12 col-md flex-column"}>
          <span className={"text-secondary fs-small my-md-3"}>PHONE</span>
          <span className={"fw-bold"}>{Data.countryPhoneCode} {Data.phone}</span>
        </div>
        <div className={"d-flex fs-small mt-2 mt-md-0 col-12 col-md flex-column"}>
          <span className={"text-secondary fs-small my-md-3"}>EMAIL</span>
          <span className={"fw-bold"}>{Data.email}</span>
        </div>
      </div>
      <div className={"row mt-3 mt-md-5"}>
        <div className={"d-flex fs-small mt-2 mt-md-0 col-12 col-md flex-column"}>
          <span className={"text-secondary fs-small my-md-3"}>BOOKING NUMBER</span>
          <span className={"fw-bold"}>#54237982</span>
        </div>
      </div>
    </>
  );
};

const ParkingTicket = ({ Data }) => {
  return (
    <>
        <div style={{"backgroundColor":"#F7F6F9"}} className={"col-12 fs-small d-flex flex-column align-items-center mt-5 py-3 rounded-2"}>
             <div className={"text-center col-md col-9"}>
              <h3 className={"fw-bold"}>Parking ticket</h3>
              <span className={"text-secondary"}>
                Entrance to parking area is possible inly with parking ticket
                issued by parking entrance machine
              </span>
             </div>
              <div className={"d-flex flex-column flex-md-row col-12 fs-small justify-content-center mt-2 mt-md-d5"}>
                <div className={"col-md-3 col position-relative d-flex justify-content-center justify-content-md-end"}>
                  <img src={qr} width={"200px"}/>
                </div>
                <div className={"d-flex mt-2 mt-md-0 px-4 px-md-0 text-center text-md-start ms-0 ms-md-4 col col-md-4 flex-column justify-content-between"}>
                      <span className={"text-secondary fw-bold"}>CAR PARK</span>
                      <div className={"my-2 my-md-0"}>
                        <span className={"fw-bold"}>{Data.option.carpark.vehicleType}, {Data.lengthOfStay} Nights</span><br/>
                        <span>Place C-124 on 1st Floor</span>
                      </div>
                      <button style={{"width":"100%","color":"#4B2AF4","border":"2px solid #4B2AF4", "background":"none"}} className={"rounded-2 col-6 fw-bold py-3"}>
                          Download parking Ticket
                      </button>
                  </div>
              </div>
        </div>
    </>
  )
}

const Confirmation = () => {
  const { Data } = useContext(context);
 
    if (!Data) return <Navigate to={"/book/extras"} replace={true}/>
    return (
        <>
            <Breadcumps Items={Items}/>
            <Content>
                <Card>
                    <Confirmed/>
                    <div style={{"marginTop":"120px"}} className={"position-relative"}>
                      <BookingDetails Data={ Data }/>
                      <ParkingTicket Data={ Data }/>
                    </div>
                </Card>
                <Reservation/>
            </Content>  
        </>
    )
}

export default Confirmation;