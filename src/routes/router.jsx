import { createBrowserRouter } from "react-router-dom";
import FullWidthLayouts from "../Layout/FullWidthLayouts";
import NewUser from "../pages/NewUser";
import AllUsersList from "../pages/AllUsersList";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <FullWidthLayouts></FullWidthLayouts>,
        children: [
            {
                path: '/',
                element: <AllUsersList></AllUsersList>,
                loader: () => fetch('http://localhost:5000/all-users')
            },
            {
                path: '/new-user',
                element: <NewUser></NewUser>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register', 
                element: <Register></Register>
            }
            
        ]
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
]);

export default router;