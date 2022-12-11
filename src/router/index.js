import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import Categorys from '../views/categorys';
import Prod from "../views/prod";
import Cart from '../views/Cart';

export const router = createBrowserRouter([

    {
        path: "/",
        element: <App />
    },

    {
        path: "/category/:category",
        element: <Categorys />
    },

    {
        path: "/item/:id",
        element: <Prod />
    },
    {
        path: "/cart",
        element:<Cart/>
    },

]);