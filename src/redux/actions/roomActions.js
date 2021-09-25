import axios from "axios";

export const send_room_add_request = (formData) => {
  return async (dispatch) => {
    try {
      // console.log(formData);
      // return;
      const { data: res } = await axios.post("/add-room", formData);

      const { data, error } = await res;
      console.log(data, error);
      if (Object.keys(error).length >= 1) {
        dispatch(room_creation_failed(error));
        return;
      }
      dispatch(room_creation_successful(data.data));
    } catch (err) {
      dispatch(room_creation_failed(err.error));
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
