const roomReducer = (state = { data: {}, error: {} }, action) => {
  switch (action.type) {
    case "ROOM_CREATION_SUCCESSFUL":
      return {
        ...state,
        data: action.payload,
        error: {},
      };

    case "ROOM_CREATION_FAILED":
      return {
        ...state,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default roomReducer;
