import React, { useState, useEffect, lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ErrorComponent from "./components/ErrorComponent";
import RestaurantComponent from "./components/RestaurantComponent";
//import SearchPageComponent from "./components/SearchPageComponent";
//import AboutUs from "./components/AboutUs"; //static import declaration
import ProfileComponent from "./components/ProfileComponent";
import Header from "./components/Header";

import UserContext from "./components/UserContext";
import ThemeContext from "./components/ThemeContext";


//lazy-loading / load on demand
//lazyload of AboutUs
//defer loading
const AboutUs = lazy(() => import("./components/AboutUs.js"));
const SearchPageComponent = lazy(() => import("./components/SearchPageComponent"));

const AppLayout = () => {
    const [emailId, setEmailId] = useState("akshay@namastedev.com");
    const [theme, setTheme] = useState("light")
    return (
        // <UserContext.Provider value="akshay@namastedev.com">
        <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
            <UserContext.Provider value={{ email: emailId, setEmail: setEmailId }}>
                <Header />
                {/* <RestaurantComponent /> */}
                {/* /restaurant/id */}
                {/* <SearchPageComponent /> */}
                {/* /search */}
                <Outlet />
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

const routesConfig = [
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: "/restaurant/:id", // we put a colon when we need dynamic id, react router takes care of it
                element: <RestaurantComponent />
            },
            {
                path: "/search",
                element: <Suspense fallback={<h1>Loading...</h1>}><SearchPageComponent /></Suspense>
            },
            {
                path: "/about-us",
                element: <Suspense fallback={<h1>Loading...</h1>}><AboutUs /></Suspense>,
                children: [
                    {
                        path: "profile", // nested paths dont require / symbol, just the name is enough
                        element: <ProfileComponent name={"Mallikarjun from props"} xyz={123} />
                    }
                ]
            }
        ]
    }
]

const appRouter = createBrowserRouter(routesConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
