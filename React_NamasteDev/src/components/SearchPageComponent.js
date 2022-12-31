import { useEffect, useState, useContext } from "react";
import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import ThemeContext from "./ThemeContext";
import UserContext from "./UserContext";

const SearchPageComponent = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [stateName, setStateName] = useState("");

    const { email, setEmail } = useContext(UserContext);
    const { theme, setTheme } = useContext(ThemeContext);

    //Render my component with []
    //Make an APi call and fill filteredRestaurants

    useEffect(() => {
        console.log("hello world");
        fetchData();

    }, [])

    const fn = (x) => {
        console.log(x);
        setStateName(x);
    }

    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9621948&lng=77.7115841&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

        console.log(json?.data?.cards[2]?.data?.data?.cards)
    }

    return (
        <div className="card-container">
            <h4>Search Component Context : {email}</h4>
            <button onClick={() => setEmail("search@namastedev.com")}>Update from search page</button>
            <button onClick={() => { setTheme(theme === "dark" ? "light" : "dark") }}>Update Theme : {theme}</button>
            <SearchBar fn={fn} setFilteredRestaurants={setFilteredRestaurants} listOfRestaurants={listOfRestaurants} />
            <CardContainer stateName={stateName} filteredRestaurants={filteredRestaurants.length ? filteredRestaurants : listOfRestaurants} />
        </div>

    )
}

export default SearchPageComponent;