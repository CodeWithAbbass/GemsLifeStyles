const AdminReducer = (state, action) => {
  if (action.type === "ADMIN") {
    let admin = action.payload;
    
    return {
      ...state,
      admin: admin,
    }
  }

  if (action.type === "ADMIN_LOGOUT") {
    
    return {
      ...state,
      admin: "",
    }
  }
  return state;
};

export default AdminReducer;