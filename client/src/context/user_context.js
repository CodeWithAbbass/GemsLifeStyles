import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/userReducer";


const UserContext = createContext();

const initialState = {
    user: [],
}

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const getUser = async () => {
        try {
            const URL = 'https://gemlifestylesserver.gemlifestyles.com/api/auth/getuser';
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json",
                },
                credentials: "include",
            });
            const data = await response.json();
            if (data.success) {
                dispatch({ type: "USER", payload: data.user });
            }
            else {
                const error = new Error(response.error);
                console.error(error);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const Logout = async () => {
        try {
            const URL = 'https://gemlifestylesserver.gemlifestyles.com/api/auth/logout';
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json"
                },
                credentials: "include",
            });
            const data = await response.json();
            if (data.success) {
                alert(data.message);
                dispatch({ type: "LOGOUT" });
            }
            else {
                const error = new Error(response.error);
                console.error(error);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, []);

    return (
        <UserContext.Provider value={{
            ...state,
            getUser,
            Logout,
        }}>
            {children}
        </UserContext.Provider>
    );
};

// custom hook
const useUserContext = () => {
    return useContext(UserContext);
};

export { UserProvider, UserContext, useUserContext };