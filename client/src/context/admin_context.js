import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/adminReducer";


const AdminContext = createContext();
const initialState = {
    admin: "",
}

const AdminProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const adminData = (admin) => {
        dispatch({ type: "ADMIN", payload: admin });
    }

    const adminLogout = async () => {
        try {
          const URL = 'https://gemlifestylesserver.gemlifestyles.com/api/auth/adminlogout';
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
            dispatch({ type: "ADMIN_LOGOUT" });
          }
          else {
            const error = new Error(response.error);
            console.log(error);
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
        <AdminContext.Provider value={{
            ...state,
            adminData,
            adminLogout,
        }}>
            {children}
        </AdminContext.Provider>
    );
};

// custom hook
const useAdminContext = () => {
    return useContext(AdminContext);
};

export { AdminProvider, AdminContext, useAdminContext };