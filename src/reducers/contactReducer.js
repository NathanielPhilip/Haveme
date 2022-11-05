const initialState = {
    contacts: [],
  };
  
  // selectors
  export const selectContacts = (state) => {
    return state.contact.contacts;
  };
  
  // action creators
  export const addUsers = (contacts) => {
    return { type: "ADD_USERS", payload: contacts };
  };
  
  export const deleteUser = (id) => {
    return { type: "DELETE_ITEM", payload: id };
  };
  
  export const editUser = (id, newItem) => {
    return { type: "EDIT_ITEM", payload: { id, new: newItem } };
  };
  
  // reducer
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USERS":
        return {
          ...state,
          contacts: action.payload,
        };
      case "DELETE_ITEM":
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id !== action.payload
          ),
        };
  
      case "EDIT_ITEM":
        return {
          ...state,
          contacts: state.contacts.map((contact) => {
            if (contact.id === action.payload.id) {
              return action.payload.new;
            } else {
              return contact;
            }
          }),
        };
      default:
        return state;
    }
  };
  export default contactReducer;
  