import { createContext, useEffect, useReducer } from "react";
import { useGetRequest } from "../hooks/requestMethods";
import useProfileStore from "../store/useProfileStore";
import shallow from "zustand/shallow";


export const AuthContext = createContext();


export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload };
        case "LOGOUT":
            return { user: null };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
    });

    // stirage management
    const [setUserProfile] = useProfileStore(
        (state) => [state.setUserProfile],
        shallow
    );

    const { data, getData, } = useGetRequest();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            dispatch({ type: 'LOGIN', payload: user })
        }
    }, [])

    useEffect(() => {
        if (state?.user && !Boolean(data)) {
            getData('/api/user/profile/', state?.user.token)
            
            
        }
        if(data) {
            setUserProfile(data)
        }

    }, [state, data, getData, setUserProfile])


    // console.log("AuthContext state:", state );
    // console.log(userProfile)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};