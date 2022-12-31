import {useContext} from 'react';
import ThemeContext from './ThemeContext';


const CardComponent = ({ restaurant, stateName }) => {
    if (!restaurant?.data)
        return null
    //const {img, name, cusine, stars} = restaurant;
    console.log('hi', restaurant?.data)

    const { name, cuisines, avgRating, cloudinaryImageId } = restaurant?.data

    const {theme, setTheme} = useContext(ThemeContext);

    return (
        <div id="card" className="card" style={{
            backgroundColor: theme === "light" ? "#fff" : "#000"
        }}>
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
            <h5>State: {stateName}</h5>
        </div>
    )
}

export const BeautifulCardComponent = () => {
    return (
        <div className="style-container">
            <CardComponent />
        </div>
    )
}

export default CardComponent;
