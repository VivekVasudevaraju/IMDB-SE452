/**
 * This reducer functions are used to manage the global state for User
 */

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        userName: action.userName,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        zipcode: action.zipcode,
        state: action.state,
        city: action.city,
        phoneNumber: action.phoneNumber,
      };
    case "LOGOUT":
      return {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        zipcode: "",
        state: "",
        city: "",
        phoneNumber: "",
      };
    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
  };
}
