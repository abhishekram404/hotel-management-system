import axios from "axios";
import send_fetch_data_request from "./dashboardActions";

const send_employee_add_request = (formData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/add-employee", formData);

      if (data.type !== "data") {
        dispatch({
          type: "EMPLOYEE_ADD_FAILED",
          payload: data,
        });
        return;
      }

      dispatch({
        type: "EMPLOYEE_ADD_SUCCESSFUL",
        payload: data,
      });
      dispatch(send_fetch_data_request());
    } catch (err) {
      dispatch({
        type: "EMPLOYEE_ADD_FAILED",
        payload: err?.response?.data,
      });
    }
  };
};

export default send_employee_add_request;
