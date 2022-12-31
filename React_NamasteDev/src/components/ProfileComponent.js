import { Component } from "react";

// const ProfileComponent = () =>{
//     return (
//         <div>
//             <h1>Name : Mallikarjun</h1>
//         </div>
//     )
// }

//as soon as component is rendered, first constructor is called, then render function is called after that componentDidMount
//is called. after that componentDidUpdate is called.
//componentDidMount happens only first time, componentDidUpdate happens a lot of times 
//Mounted - renders fully
//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

//useEffect is a combination of componentDidMount() and componentDidUpdate()
//empty array(dependency array) in useEffect is equal to just componentDidMount(), just call it once in the beginning.
//componentDidUpdate() is equal to the dependency array variables
class ProfileComponent extends Component {
    //every class has a constructor
    constructor(props) {
        super(props); //have a super and in first line

        this.state = {
            // email: "mallikb@gmail.com",
            // phone: "9876543210",
            userInfo: {}

        };
        console.log("Profile - constructor");
    }

    async componentDidMount() {
        console.log("Profile - componentDidMount()")

        const data = await fetch("https://api.github.com/users/MallikarjunnKB");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
    }

    //any time any state changes componentDidUpdate() will get called
    componentDidUpdate(prevProps, prevState){
        console.log("Profile - componentDidUpdate()")
        if(prevProps.company !=this.props.company){

        }
        if(prevProps.avatar_url !=this.props.avatar_url){
            
        }
    }

    render() {
        console.log("Profile - render")
        return (
            <div>
                <img src={this.state.userInfo.avatar_url} style={{height: "200px", width: "200px"}}/>
                <h3>Name : {this.props.name}</h3>
                <h3>Email: {this.state.userInfo.company}</h3>
                <h3>Phone: {this.state.userInfo.bio}</h3>
                <h3>XYZ: {this.props.xyz}</h3>
                {/* props is a inbuilt keyword in react */}
            </div>
        )
    }
}

export default ProfileComponent;