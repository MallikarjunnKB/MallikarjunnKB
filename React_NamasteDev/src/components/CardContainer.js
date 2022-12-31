import { Link } from "react-router-dom"
import CardComponent from "./CardComponent"
import NoResultsComponent from "./NoResultsComponent"

//Dealing with Arrays, using a map
const CardContainer = ({ filteredRestaurants, stateName }) =>
    !filteredRestaurants.length ? (
        <NoResultsComponent />
    ) : (

        filteredRestaurants.map((restaurant) => (
            <Link key={restaurant?.data.id} to={`/restaurant/${restaurant?.data.id}`}>
                <CardComponent stateName={stateName} restaurant={restaurant} key={restaurant?.data?.id} />
            </Link>
        ))
    )

export default CardContainer