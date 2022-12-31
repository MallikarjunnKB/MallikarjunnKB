import AppLayout from '../App';
import AboutUs from '../components/AboutUs';
import ErrorComponent from '../components/ErrorComponent';
import ProfileComponent from '../components/ProfileComponent';
import RestaurantComponent from '../components/RestaurantComponent';
import SearchPageComponent from '../components/SearchPageComponent';


export const title = "Hunger HUB"

export const routesConfig = [
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
                element: <SearchPageComponent />
            },
            {
                path: "/about-us",
                element: <AboutUs />,
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