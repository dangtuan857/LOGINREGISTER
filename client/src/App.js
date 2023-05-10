import Dashboard from "./Components/Dashboard/Dashboard";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

// Import React router dom
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";

//Lets create a router
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <Login />
            </div>
        ),
    },
    {
        path: "/register",
        element: (
            <div>
                <Register />
            </div>
        ),
    },
    {
        path: "/dashboard",
        element: (
            <div>
                <Dashboard />
            </div>
        ),
    },
]);

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
