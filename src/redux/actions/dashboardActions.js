import axios from "axios";

const send_fetch_data_request = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/all");

      const { data } = await res;
      if (data.type !== "data") {
        dispatch(data_fetch_failed(data));
        return;
      }
      dispatch(data_fetched_successfully(data));
    } catch (err) {
      dispatch(data_fetch_failed(err?.response?.data));
    }
  };
};

const data_fetched_successfully = (data) => {
  return {
    type: "DATA_FETCHED_SUCCESSFULLY",
    payload: data,
  };
};

const data_fetch_failed = (error) => {
  return {
    type: "DATA_FETCH_FAILED",
    payload: error,
  };
};

export default send_fetch_data_request;
