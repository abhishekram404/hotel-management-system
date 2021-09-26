import axios from "axios";
import send_fetch_data_request from "./dashboardActions";

const send_check_in_request = (formData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/check-in", formData);
      const { data } = await res;
      if (data.type !== "data") {
        dispatch(check_in_failed(data));
        return;
      }

      dispatch(check_in_successful(data));
      dispatch(send_fetch_data_request());
    } catch (err) {
      dispatch(check_in_failed(err?.response?.data));
    }
  };
};

const check_in_successful = (data) => {
  return {
    type: "CHECK_IN_SUCCESSFUL",
    payload: data,
  };
};

const check_in_failed = (error) => {
  return {
    type: "CHECK_IN_FAILED",
    payload: error,
  };
};

export default send_check_in_request;

export const send_check_out_request = (formData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/check-out", formData);
      const { data } = await res;
      if (data.type !== "data") {
        dispatch({
          type: "CHECK_OUT_FAILED",
          payload: data,
        });
        clear("rooms", dispatch);
        return;
      }
      dispatch({
        type: "CHECK_OUT_SUCCESS",
        payload: data,
      });
      dispatch(send_fetch_data_request());

      // setTimeout(() => {
      //   dispatch({
      //     type: "CLEAR_MESSAGE",
      //     for: "rooms",
      //   });
      // }, 3000);
      // clear("rooms", dispatch);
    } catch (err) {
      dispatch({
        type: "CHECK_OUT_FAILED",
        payload: err?.response?.data,
      });
      clear("rooms", dispatch);
    }
  };
};

const clear = (name, dispatch) => {
  setTimeout(() => {
    dispatch({
      type: "CLEAR_MESSAGE",
      for: name,
    });
  }, 3000);
};
