import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardComponent from './CardComponent';

const RestaurantComponent = () => {
    const { id } = useParams();

    const [resInfo, setResInfo] = useState([]);

    useEffect(() => {
        fetchRestaurantsInfo();
    }, [])

    async function fetchRestaurantsInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9578047&lng=77.7130364&menuId=" + id);
        const json = await data.json();
        console.log(json)
        setResInfo(json);
    }

    return (
        <CardComponent restaurant={resInfo} />
    )

}

export default RestaurantComponent;