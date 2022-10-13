import beds from "../../assets/images/bed.png";
import area from "../../assets/images/wide.png";
import guests from "../../assets/images/guests.png";
import bathroom from "../../assets/images/bathroom.png";
import stair from "../../assets/images/stairs.png";

const category = [
    {
        "nameCategory":"BEDS",
        "total" :"3",
        "imgUrl" : beds
    },
    {
        "nameCategory":"AREA",
        "total" :"60",
        "imgUrl" : area,
        "unit":"m"
    },
    {
        "nameCategory":"GUESTS",
        "total" :"6",
        "imgUrl" : guests
    },
    {
        "nameCategory":"BATHROOM",
        "total":"1",
        "imgUrl" : bathroom
    },
    {
        "nameCategory" :"FLOOR",
        "total" :"4",
        "imgUrl" : stair
    }
]

export {
    category
}