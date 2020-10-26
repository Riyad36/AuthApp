import React, { useState } from 'react'

const AuthContext = React.createContext();

const AuthProvider = (props) => {


    const [Currentuser, setCurrentuser] = useState({})
    const [isLoggedIn, setisLoggedIn] = useState(false)


    return (

        <AuthContext.Provider
            value={{
                Currentuser: Currentuser,
                setCurrentuser: setCurrentuser,
                isLoggedIn: isLoggedIn,
                setisLoggedIn: setisLoggedIn,
            }}
        >
            {props.children}

        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };