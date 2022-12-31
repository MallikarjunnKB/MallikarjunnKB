import { title } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

const Header = () => {



    return (
        <div id="title" className="flex" tabIndex={1}>
            <Link to="/">
                {/* <h2 className="font-bold text-xl text-yellow-700 px-10">{title}</h2> */}
                <img src="https://uploads-ssl.webflow.com/6080464681216414c7d1d60b/6080468fecb6a579c58f35f4_hungerhub%20logo.png" />
            </Link>
            <Link to="/search"><span>Search</span></Link>
            <Link to="/about-us"><span>AboutUs</span></Link>
            <UserContext.Consumer>
                {({ email, setEmail }) => {
                    return <span>{email}</span>
                }}
            </UserContext.Consumer>
            {/* before hooks */}
        </div>
    )
}


export default Header;