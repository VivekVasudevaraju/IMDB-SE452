/**
 * This reducer functions are used to manage the global state for User
 */

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return {
        id: action.id,
        username: action.username,
        access_token: action.access_token,
      };
    case "LOGOUT":
      return {
        id: "",
        username: "",
        access_token: "",
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
