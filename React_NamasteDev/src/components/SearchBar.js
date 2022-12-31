import React, { useState } from "react";
import stateObj from '../utils/state-city.json';
import useCities from "./useCities";

const searchRestaurants = (searchText, listOfRestaurants) => {
    //logic for searching inside data
    return listOfRestaurants.filter((res) => (
        res?.data?.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    ))

}


const SearchBar = ({ fn, setFilteredRestaurants, listOfRestaurants }) => {
    const [searchText, setSearchText] = useState("")
    const [stateName, setStateName] = useState("Uttarakhand");
    const [cityName, setCityName] = useState("");

    const cityList = useCities(stateName);

    return (
        <div className="search">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const filteredRestaurants = searchRestaurants(searchText, listOfRestaurants);
                    console.log(filteredRestaurants);
                    setFilteredRestaurants(filteredRestaurants);
                  
                }}>
                <input
                    id="restaurant"
                    placeholder="restaurant"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}></input>

                <select value={stateName} onChange={(e) => {
                    setStateName(e.target.value)
                    fn(e.target.value);
                }}>
                    {Object.keys(stateObj).map((state) => {
                        return <option key={state} value={state}>{state}</option>
                    })}
                </select>
                <select value={cityName} onChange={(e) => {
                    setCityName(e.target.value)
                }}>
                    {cityList.map((city) => {
                        return <option key={city} value={city}>{city}</option>
                    })}
                </select>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;