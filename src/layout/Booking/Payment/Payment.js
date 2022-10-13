import React from "react";
import Card from "../../../Components/Card/Card";
import Reservation from "../../../Components/Reservation/Reservation";
import { Items } from "./Breadcumps/Items";
import Breadcumps from "../Breadcumps";

const Content = ({ children }) => {
  return (
    <div className={"d-flex position-relative justify-content-between"}>
      {children}
    </div>
  );
};

const Comp = () => {
  return (
    <div style={{"width":"100px", "height":"900px"}} className={"border"}>

    </div>
  )
}

const Payment = () => {
  return (
    <>
      <Breadcumps Items={Items}/>
      <Content>
        <Card>
          <h2>Payment</h2>
          <Comp/>
        </Card>
        <Reservation />
      </Content>
    </>
  );
};

export default Payment;
