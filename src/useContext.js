import React, { useState, createContext } from "react";

const context = createContext(null);

const Provider = ({ children }) => {
    const send = (data) => {
      setData({...data, ...reservasion})
    }
    const [data, setData] = useState()

    const reservasion = {
      lengthOfStay: "3",
      location: ["King bed stylish Apartment wuth Loft style family rom"],
      schedule:{
        checkIn: {
          date:"Sun, 22 May 2022",
          time:"16:00"
        },
        checkOut: {
          date:"Wed, 25 May 2022",
          time:"11:00"
        }
      },
    }


      const value = {
        Reservation: reservasion,
        Send: send,
        Data: data,
        Setdata: setData
      }

    return (

        <context.Provider value={value}>
            {children}
        </context.Provider>

    )
}

export {
    context,
    Provider
};