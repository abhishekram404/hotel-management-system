import axios from "axios";

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
      console.log(res.data);
      console.log("Make a reducer for check out, bruh!");
    } catch (err) {
      console.log(err.response.data);
      console.log("Make a reducer for check out, bruh!");
    }
  };
};
