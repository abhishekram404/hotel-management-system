import axios from "axios";

export const send_room_add_request = (formData) => {
  return async (dispatch) => {
    try {
      // return;
      const res = await axios.post("/add-room", formData);
      const { data, error } = await res;
      if (error && Object.keys(error).length >= 1) {
        dispatch(room_creation_failed(error));
        return;
      }
      dispatch(room_creation_successful(data));
    } catch (err) {
      dispatch(room_creation_failed(err?.response?.data));
    }
  };
};

const room_creation_successful = (data) => {
  return {
    type: "ROOM_CREATION_SUCCESSFUL",
    payload: data,
  };
};

const room_creation_failed = (error) => {
  return {
    type: "ROOM_CREATION_FAILED",
    payload: error,
  };
};
