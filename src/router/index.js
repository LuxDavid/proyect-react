import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import Categorys from '../views/categorys';
import Prod from "../views/prod";

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

]);