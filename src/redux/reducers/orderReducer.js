const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_RESPONSE_RECEIVED":
      return;
    default:
      return state;
  }
};

export default orderReducer;
