import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SET_LOGS_LOADING,
  LOGS_ERROR,
  SEARCH_LOGS
} from "./types";

let baseUrl = process.env.REACT_APP_BASE_URL

// Get logs from server
export const getLogs = () => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await fetch(`${baseUrl}logs`);
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

// Add log to server
export const addLog = (log) => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await fetch(`${baseUrl}logs`, {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText
    });
  }
};

// Delete log from server
export const deleteLog = (id) => async dispatch => {
  try {
    dispatch(setLoading());

    await fetch(`${baseUrl}logs/${id}`, { method: 'DELETE' });

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText
    });
  }
};

// Update log
export const updateLog = log => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await fetch(`${baseUrl}logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText
    });
  }
};

// Search logs
export const searchLogs = (text) => async dispatch => {
  try {
    dispatch(setLoading());

    const res = await fetch(`${baseUrl}logs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText
    });
  }
};

// Set current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  }
};

// Clear current log
export const clearCurrentLog = () => {
  return {
    type: CLEAR_CURRENT
  }
};

export const setLoading = () => {
  return {
    type: SET_LOGS_LOADING
  }
};