const UserReducer = (state, action) => {
  if (action.type === "USER") {
    let user = action.payload;

    return {
      ...state,
      user: user,
    }
  }

  if (action.type === "LOGOUT") {

    return {
      ...state,
      user: "",
    }
  }
  return state;
};

export default UserReducer;