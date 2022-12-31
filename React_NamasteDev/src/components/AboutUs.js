import { Outlet } from "react-router-dom"
import React from "react"
import UserContext from "./UserContext";

//React 18 doesn’t need import react from react
// const AboutUs = () => {
//     return (
//         <>
//             <h1>About Us</h1>
//             <h2>our kool food ordering app</h2>
//             <Outlet />
//         </>
//     )
// }

class AboutUs extends React.Component {
    constructor() {
        console.log("AboutUs - constructor")
        super();
    }

    componentDidMount() {
        console.log("AboutUs - componentDidMount()")
    }

    render() { // whatever this function returns we put it to DOM, render() is compulsary
        console.log("AboutUs - render")
        return (
            <>
                <UserContext.Consumer>
                    {({ email, setEmail }) => {
                        return (
                            <>
                                <h4>About US Context : {email}</h4>
                                <button onClick={()=>{
                                    setEmail("aboutus@email.com")
                                }}>Update Email</button>
                            </>
                        )
                    }}
                </UserContext.Consumer>
                <h1>About Us - class Component</h1>
                <Outlet />
            </>
        )

    }
}

export default AboutUs;


/*

<Parent
  <child


Parent - constructor
Parent - render
child - constructor
child - render
child - componentDidMount
child2 - constructor
child2 - render
child2 - componentDidMount
Parent - componentDidMount
*/