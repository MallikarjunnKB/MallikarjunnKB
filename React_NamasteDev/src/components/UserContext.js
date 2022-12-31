import { createContext } from 'react';

//const UserContext = createContext("dafault@gmail.com") //default value

const UserContext = createContext({
    email: "dafault@gmail.com",
    setEmail: () => { }
})

export default UserContext;