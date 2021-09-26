const allReducers = (
  state = {
    isUserLoggedIn: false,
    message: "",
    details: {
      orders: {},
      customers: {},
      rooms: {},
      dashboard: {},
      user: {},
    },
    type: "",
  },
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        type: "data",
        isUserLoggedIn: true,
        details: {
          ...state.details,
          user: action.payload,
        },
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        type: "error",
        isUserLoggedIn: false,
        details: {
          ...state.details,
          user: action.payload,
        },
      };

    case "DATA_FETCHED_SUCCESSFULLY":
      return {
        ...state,
        type: "data",
        details: {
          ...state.details,
          dashboard: action.payload,
        },
        isUserLoggedIn: true,
      };
    case "DATA_FETCH_FAILED":
      return {
        ...state,
        type: "error",
        details: {
          ...state.details,
          dashboard: action.payload,
        },
        isUserLoggedIn: false,
      };

    case "CHECK_IN_SUCCESSFUL":
      return {
        ...state,
        type: "data",
        details: {
          ...state.details,
          orders: action.payload,
        },
      };
    case "CHECK_IN_FAILED":
      return {
        ...state,
        type: "error",
        details: { ...state.details, orders: action.payload },
      };

    case "ROOM_CREATION_SUCCESSFUL":
      return {
        ...state,
        type: "data",
        details: {
          ...state.details,
          rooms: action.payload,
        },
      };

    case "ROOM_CREATION_FAILED":
      return {
        ...state,
        type: "error",
        details: {
          ...state.details,
          rooms: action.payload,
        },
      };

    case "LOGOUT_SUCCESS":
      return {
        ...state,
        type: "data",
        isUserLoggedIn: false,
        details: {
          ...state.details,
          user: action.payload,
        },
      };
    case "LOGOUT_FAILED":
      return {
        ...state,
        type: "error",
        isUserLoggedIn: false,
        details: {
          ...state.details,
          user: action.payload,
        },
      };
    case "SET_FROM_COOKIE":
      return {
        ...state,
        isUserLoggedIn: action.payload,
      };

    default:
      return state;
  }
};

export default allReducers;