const OrderReducer = (state, action) => {

  if (action.type === "PLACE_ORDER") {
    let order = action.payload;

    return {
      ...state,
      orders: [...state.orders, order],
    }
  }

  if (action.type === "USER_ORDERS") {
    let userOrders = action.payload;

    return {
      ...state,
      orders: userOrders,
    }
  }

  if (action.type === "DASHBOARD_ORDERS") {
    let orders = action.payload;

    return {
      ...state,
      DOrders: orders,
    }
  }

  if (action.type === "ORDER_STATUS") {
    let Order = action.payload;
    let PendingOrders = [];
    if (Order.status !== 'Completed') {
      PendingOrders = state.DOrders.map((item) => {
        if (item._id === Order._id) {
          item.status = Order.status;
        }
        return item;
      });
      return {
        ...state,
        PendingOrders: PendingOrders,
      }
    } else {
      PendingOrders = state.DOrders.filter(item => item._id !== Order._id);
      state.CompletedOrders.push(Order);
    }
    return {
      ...state,
      PendingOrders: PendingOrders,
    }
  }

  if (action.type === "PENDING_ORDERS") {
    const PendingOrders = state.DOrders.filter(item => item.status !== "Completed");

    return {
      ...state,
      PendingOrders: PendingOrders,
    }
  }

  if (action.type === "COMPLETED_ORDERS") {
    const CompletedOrders = state.DOrders.filter(item => item.status === "Completed");

    return {
      ...state,
      CompletedOrders: CompletedOrders,
    }
  }

  if (action.type === "DELETE_ORDER") {
    let Order = action.payload;
    let NewOrderList = state.CompletedOrders.filter(item => item._id !== Order._id);

    return {
      ...state,
      CompletedOrders: NewOrderList,
    }
  }

  return state;
};

export default OrderReducer;