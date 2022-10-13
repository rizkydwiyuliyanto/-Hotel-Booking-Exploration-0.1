import React, { useState } from "react";
import Form from "../../../Components/Form/Form";
import Info from "../../../Components/Info/Info";
import Property from "../../../Components/Property/Property"; 
import Reservation from "../../../Components/Reservation/Reservation";
import Breadcumps from "../Breadcumps";
import { Items } from "./Breadcumps/Items";
import Card from "../../../Components/Card/Card"


const Content = ({ children }) => {
    return (
      <div className={"row position-relative justify-content-between"}>
        { children }
      </div>
    )
  }

const Extras = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryPhoneCode:"",
    option: {
      carpark: {
        // vehicleType:"",
        // placeType:""

      },
      bottleOfWine:{
        // product: ""

      },
      stayOfPet: {
        // location: ""
      }
    }
  })
  return (
    <>
      <Breadcumps Items={Items}/>
      <Content>
          <Card>
            <Property/>
            <Info />
            <Form Form={form} Setform={setForm}/>
          </Card>
          <Reservation Form={form}/>
      </Content>
    </>
  );
};

export default Extras