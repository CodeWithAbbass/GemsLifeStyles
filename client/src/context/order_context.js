import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/orderReducer";


const OrderContext = createContext();

const initialState = {
    orders: "",
    DOrders: "",
    PendingOrders: [],
    CompletedOrders: [],
}

const OrderProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const orderData = async (order) => {
        dispatch({ type: "PLACE_ORDER", payload: order })
    }

    const getAllOrders = async () => {
        try {
            const URL = 'https://gemlifestylesserver.gemlifestyles.com/api/orders/getallorders';
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json"
                },
                credentials: "include",
            });
            const data = await response.json();
            if (data.success) {
                dispatch({ type: "DASHBOARD_ORDERS", payload: data.orders });
                dispatch({ type: "PENDING_ORDERS" });
                dispatch({ type: "COMPLETED_ORDERS" });
            }
        } catch (error) {
            console.error(error);
        }
    }

    const OrderStatus = async (id, status) => {
        try {
            const URL = `https://gemlifestylesserver.gemlifestyles.com/api/orders/orderstatus/${id}`;
            const response = await fetch(URL, {
                method: 'PUT',
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify({ status }),
            });
            const data = await response.json();

            if (data.success) {
                alert("Order Status Updated Successfully!");
                dispatch({ type: "ORDER_STATUS", payload: data.Order });
            }
        } catch (error) {
            console.error(error);
        }
    }

    const getUserOrders = async () => {
        try {
            const URL = 'https://gemlifestylesserver.gemlifestyles.com/api/orders/getuserorders';
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json"
                },
                credentials: "include",
            });
            const data = await response.json();
            if (data.success) {
                dispatch({ type: "USER_ORDERS", payload: data.userOrder });
            }
        } catch (error) {
            console.error(error);
        }
    }

    const StatusFinder = (status) => {
        if (status === "Shipped" || status === "On The Way" || status === "Completed") {
            if (status === "On The Way" || status === "Completed") {
                if (status === "Completed") {
                    return 4;
                }
                return 3;
            }
            return 2;
        }
    }

    const DeleteOrder = async (id) => {
        try {
            let Confirmation = window.confirm('Are you sure you want to DELETE this Order from the GEMS?')
            const URL = `https://gemlifestylesserver.gemlifestyles.com/api/orders/deleteorder/${id}`;
            const response = await fetch(URL, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            if (Confirmation) {
                if (data.success) {
                    alert("Order Deleted Successfully!");
                    dispatch({ type: "DELETE_ORDER", payload: data.Order });
                }
            } else {
                alert("Order Deletetion Process Canceled Successfully!");
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
        <OrderContext.Provider value={{
            ...state,
            orderData,
            getAllOrders,
            OrderStatus,
            getUserOrders,
            StatusFinder,
            DeleteOrder,
        }}>
            {children}
        </OrderContext.Provider>
    );
};

// custom hook
const useOrderContext = () => {
    return useContext(OrderContext);
};

export { OrderProvider, OrderContext, useOrderContext };