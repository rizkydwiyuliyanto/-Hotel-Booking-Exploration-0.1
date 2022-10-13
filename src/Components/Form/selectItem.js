import motor from "../../assets/images/motorcycle.png";
import motor2 from "../../assets/images/motorcycle2.png";
import car from "../../assets/images/car.png";
import car2 from "../../assets/images/car2.png";
import bus from "../../assets/images/bus.png";
import bus2 from "../../assets/images/bus2.png";
import parking from "../../assets/images/parking.png";
import parking2 from "../../assets/images/parking2.png";
import bottle from "../../assets/images/wine.png";
import bottle2 from "../../assets/images/wine2.png";
import pet from "../../assets/images/dog.png";
import pet2 from "../../assets/images/dog2.png";
import animalCare from "../../assets/images/animal-therapy.png";
import animalCare2 from "../../assets/images/animal-therapy2.png";
import disability from "../../assets/images/disability.png"

const selectItem = 
  [
    {
      menuTitle: "Car park",
      menuDesc: "The choice of families",
      menuImg: parking,
      menuImg2: parking2,
      price: "20",
      id: "carpark",
      type: [
        
        {
          "option":"VEHICLE TYPE",
          "name":"vehicleType",
          select: [
              {
                  name: "Motorcycle",
                  price: "20",
                  imgUrl: motor,
                  imgUrl2: motor2
                },
                {
                  name: "Car",
                  price: "30",
                  imgUrl: car,
                  imgUrl2: car2
                },
                {
                  name: "Bus",
                  price: "50",
                  imgUrl: bus,
                  imgUrl2: bus2
                },
          ]
        },
        {
          "option":"PLACE TYPE",
          "name":"placeType",
          select: [
              {
                  name: "Default",
                  imgUrl: motor,
                  imgUrl2: motor,
                },
                {
                  name: "Disabled Parking spot",
                  imgUrl: disability,
                  imgUrl2: disability,
                },
          ]
        },

      ],
    },
    {
      menuTitle: "Bottle of wine",
      menuDesc: "Ventisquero Reserva Chardonnay Chardonnay/ Valle de Casablanca Aconcagua",
      menuImg: bottle,
      menuImg2: bottle2,
      price: "20",
      id: "bottleOfWine",
      type: [
        {
          "option":"PRODUCT",
          "name":"product",
          select: [
              {
                  name: "Bourbon",
                  price: "20",
                  imgUrl: bottle,
                  imgUrl2: bottle2
                },
                {
                  name: "Gin",
                  price: "30",
                  imgUrl: bottle,
                  imgUrl2: bottle2
                },
                {
                  name: "Vermouth",
                  price: "50",
                  imgUrl: bottle,
                  imgUrl2: bottle2
                },
                
                
          ]
        },
      ],
    },
    {
      menuTitle: "Stay of a pet",
      menuDesc: "Traveling with pets can seem like a daunting task",
      menuImg: pet,
      menuImg2: pet2,
      price: "50",
      id: "stayOfPet",
      type: [
        {
          "option":"LOCATION",
          "name":"location",
          select: [
              {
                  name: "Animal care",
                  price: "20",
                  imgUrl: animalCare,
                  imgUrl2: animalCare2
                },
          ]
        },
      ],
    }
  ]



export { selectItem };
