import {createContext , useState } from "react";
import React from "react";
export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [username, setUserName] = useState("");
    const [isAuthenticated, setAuthenticated] = useState(false);
    
    const [events, setEvents] = useState([]);
    const [lang, setlang] = useState('EN');

    const logIn = ({username , isAuthenticated}) => {
        setUserName(username);
        setAuthenticated(isAuthenticated);
    }

    const logOut = () => {
        setUserName("");
        setAuthenticated(false);
    }

    return(<AppContext.Provider value={{username, isAuthenticated , logIn, logOut, events, setEvents, lang, setlang}}>{props.children}</AppContext.Provider>);
};

export default AppContextProvider;
