import React from "react";
import Card from "../../../Components/Card/Card";
import Reservation from "../../../Components/Reservation/Reservation";
import { Items } from "./Breadcumps/Items";
import Breadcumps from "../Breadcumps";

const Content = ({ children }) => {
  return (
    <div className={"row position-relative justify-content-between"}>
      {children}
    </div>
  );
};

const Dates_Room = () => {
  return (
    <>
      <Breadcumps Items={Items}/>
      <Content>
        <Card>
            <h2>Dates & room</h2>
        </Card>
 
      </Content>
    </>
  );
};

export default Dates_Room;