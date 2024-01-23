import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import ListOfHouses from "../Dashboard/ListOfHouses/ListOfHouses";
import AddHouse from "../Dashboard/AddHouse/AddHouse";

const Routes = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<Register></Register>
            }
        ]
    },
    {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        children: [
            {
                path:"houseList",
                element:<ListOfHouses></ListOfHouses>
            },
            {
                path:"addHouse",
                element:<AddHouse></AddHouse>
            }
        ]
    }
])

export default Routes;