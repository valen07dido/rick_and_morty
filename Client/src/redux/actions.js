import axios from "axios";
const { REACT_APP_URL_BACKEND } = process.env;
console.log(REACT_APP_URL_BACKEND);
export const addFav = (character) => {
  const endpoint = `${REACT_APP_URL_BACKEND}/fav`;
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      console.error({ error: error.message });
    }
  };
};

export const removeFav = (id) => {
  const endpoint = `${REACT_APP_URL_BACKEND}/fav/${id}`;
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      dispatch({
        type: "REMOVE_FAV",
        payload: response.data,
      });
    } catch (error) {
      console.error({ error: error.message });
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: "FILTER",
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: "ORDER",
    payload: order,
  };
};
