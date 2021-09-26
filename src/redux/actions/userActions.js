import axios from "axios";

const send_login_request = (formData) => {
  return async (dispatch) => {
    const res = await axios.post("/login", formData);

    const { data } = await res;
    if (data.type === "error") {
      dispatch({
        type: "LOGIN_FAILED",
        payload: data,
      });
      return;
    }

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });
  };
};

export const send_logout_request = () => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/logout");

      const { data } = await res;
      if (data.type === "error") {
        dispatch({
          type: "LOGOUT_FAILED",
          payload: data,
        });
        return;
      }

      dispatch({
        type: "LOGOUT_SUCCESS",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "LOGOUT_SUCCESS",
        payload: err?.response?.data,
      });
    }
  };
};

export default send_login_request;
