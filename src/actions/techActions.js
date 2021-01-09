import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_TECHS_LOADING
} from "./types";

let baseUrl = process.env.REACT_APP_BASE_URL

// Get logs from server
export const getTechs = () => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await fetch(`${baseUrl}techs`);
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  }
};

// Add tech to server
export const addTech = (tech) => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await fetch(`${baseUrl}techs`, {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  }
};

// Delete tech from server
export const deleteTech = (id) => async dispatch => {
  try {
    dispatch(setLoading());

    await fetch(`${baseUrl}techs/${id}`, { method: 'DELETE' });

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_TECHS_LOADING
  }
};