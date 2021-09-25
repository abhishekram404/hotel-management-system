const roomReducer = (state = { type: "", details: {} }, action) => {
  switch (action.type) {
    case "ROOM_CREATION_SUCCESSFUL":
      return {
        ...state,
        type: "data",
        details: action.payload,
      };

    case "ROOM_CREATION_FAILED":
      return {
        ...state,
        type: "error",
        details: action.payload,
      };
    default:
      return state;
  }
};

export default roomReducer;
