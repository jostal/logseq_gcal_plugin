import React, {useEffect, useState} from 'react'

export const UserContext = React.createContext('');

const LoginContext = ({children}) => {
    const [user, setUser] = useState({
        signedIn: false,
        accessToken: null,
    });

    useEffect(() => {
        // @ts-ignore
        const existingUser = JSON.parse(localStorage.getItem('user'));
        if (existingUser !== null && !user.signedIn) {
            setUser({
                signedIn: true,
                accessToken: existingUser.accessToken
            })
        } else {
            if (user.signedIn && !existingUser) {
                localStorage.setItem('user', JSON.stringify(user))
            }
        }
    }, [user]);

    return (
        <>
            {/* @ts-ignore */}
                <UserContext.Provider value={[user, setUser]}>
                    {children}
                </UserContext.Provider>
        </>

    )
}

export default LoginContext