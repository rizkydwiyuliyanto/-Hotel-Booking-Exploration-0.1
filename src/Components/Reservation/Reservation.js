import React, { useEffect, useContext } from "react";
import { context } from "../../useContext";
import calendar from "../../assets/images/calendar.png";
import { useLocation, useNavigate, useMatch } from "react-router-dom";

const Checkin = ({ Reservation }) => {

    return (
      <div className={"mt-3 border fs-small border-secondary mb-3 p-2 rounded-3"}>
        <div className={"d-flex"}>
          <div className={"col"}>
            <p className={"fs-small text-secondary mt-1"}>CHECK IN</p>
            <p className={"fw-bold fs-small m-0"}>{Reservation.schedule.checkIn.date}</p>
            <p>from {Reservation.schedule.checkIn.time}</p>
          </div>
          <div className={"col"}>
            <p className={ "text-secondary mt-1"}>CHECK OUT</p>
            <p className={"fw-bold fs-small m-0"}>{Reservation.schedule.checkOut.date}</p>
            <p>by {Reservation.schedule.checkOut.time}</p>
          </div>
        </div>
        <div className={"mt-2"}>
          <span>TOTAL LENGTH OF STAY:</span><br/>
          <div className={"mt-0 d-flex align-items-center"}>
              <span className={"me-2 fw-bold"}>{Reservation.lengthOfStay}</span>
              <img src={calendar} alt={"calender"} width={"20"}/>
          </div>
        </div>
        <div className={"mt-3"}>
          <span>YOU SELECTED:</span><br/>
          <div className={"mt-0"}>
            {Reservation.location.map(location=> {
              return (
                <>
                  <span className={"fw-bold"}>{location}</span><br/>
                </>
              )
            })}
              <span className={"color-primary fw-bold"}>Change your selection</span>
          </div>
        </div>
      </div>
    );
}

const PriceSummary = ({ Extras }) => {
  return (
    <div className={"mt-2 fs-small"}>
      <div className={"d-flex mb-1 justify-content-between"}>
        <span>Rooms and offer:</span>
        <span className={"fw-bold"}>$625.43</span>
      </div>
      {Extras?
      <div className={"d-flex mb-1 justify-content-between"}>
        <span>Extras:</span>
        <span className={"fw-bold"}>${Extras}</span>
      </div>
      :""}
      <div className={"d-flex mb-1 justify-content-between"}>
        <span>8 % VAT:</span>
        <span className={"fw-bold"}>$50.03</span>
      </div>
      <div className={"d-flex mb-2 justify-content-between"}>
        <span>City tax:</span>
        <span className={"fw-bold"}>$16.44</span>
      </div>
      {Extras?
      <div style={{"color":"#1BB273"}} className={"fs-normal mb-2 fw-bold d-flex justify-content-between"}>
          <span>Total Price</span>
          <span className={"fw-bold"}>$788.87</span>
      </div>
      :
      <div style={{"color":"#1BB273"}} className={"fs-normal mb-2 fw-bold d-flex justify-content-between"}>
        <span>Total Price</span>
        <span className={"fw-bold"}>$698.87</span>
      </div>
      }
    </div>
  )
}

const Card = ({ children }) => {
    return (
        <div className={"card-2 mt-4 mt-xl-0 ms-xl-5 col-12 col-xl-4"}>
            { children }
        </div>
    )
}

const ButtonDonwloadInvoice = ({ children }) => {
  const handleClick = () => {
    console.log("Hello world")
    window.scrollTo(0, 0);
  }
  return (
    <button onClick={handleClick} style={{"width":"100%", "backgroundColor":"#1BB273","border":"none"}} className={"mybg-primary fs-small text-light rounded-3 py-3 mt-3"}>
      { children }
    </button>
  )
}  

const ButtonToBook = ({ children, Send, Form }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    Send(Form);
    navigate("/book/confirmation");
}
  return (
      <button onClick={handleClick} style={{"width":"100%", "backgroundColor":"none","border":"none"}} className={"mybg-primary fs-small text-light rounded-3 py-3 mt-3"}>
          { children }
      </button>
  )
}

const Reservation = ({ Form, Extras }) => {
  const { Reservation, Send } = useContext(context);
  const location = useLocation();
  
    return (
      <Card>
        <span className={"fw-bold fs-medium"}>Reservation summary</span>
        <Checkin Reservation={Reservation} />
        <span className={"fw-bold fs-medium"}>Your Price summary</span>
        <PriceSummary Extras={ Extras }/>
        {location.pathname === "/book/confirmation" ? (
          <ButtonDonwloadInvoice>
            Download Invoice
          </ButtonDonwloadInvoice>
        ) : (
          <ButtonToBook Form={Form} Send={Send} >Request To Book</ButtonToBook>
        )}

        <div className={"text-secondary fs-small text-center mt-3"}>
          <span>we run on TraWll Inc</span>
        </div>
      </Card>
    );
}

export default Reservation;