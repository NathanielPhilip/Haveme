export const setUsers = (user) => {
    return { type: "SET_USERS", payload: user };
  };
  
  const initialState = { users: null };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_USERS":
        return { ...state, users: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  