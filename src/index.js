import React from "react";
import ReactDom from "react-dom";
import App from './App';
import Book from "./Book";
import Extras from "./layout/Booking/Extras/Extras";
import Payment from "./layout/Booking/Payment/Payment";
import Dates_Room from "./layout/Booking/Dates_Room/Dates_Room";
import Confirmation from "./layout/Booking/Confirmation/Confirmation";
import { createRoot } from "react-dom/client";
import Root from "./Root";
import { Provider } from "./useContext";
import { 
    createBrowserRouter,
    RouterProvider 
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children: [
            {
                path:"book",
                element: <Book/>,
                children: [
                    {
                        path: "extras",
                        element: <Extras/>
                    },
                    {
                        path:"payment",
                        element:<Payment/>
                    },
                    {
                        path:"dates&rooms",
                        element: <Dates_Room/>
                    },
                    {
                        path:"confirmation",
                        element: <Confirmation/>
                    }
                ]
            },
        ]
    }
])

createRoot(document.getElementById("root")).render(
    <Provider>
        <RouterProvider router={ router }/>
    </Provider>
)
// ReactDom.render(<App/>, document.getElementById("root"))