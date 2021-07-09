export const FETCH_SUCCESS_ACTION = "ETCH_SUCCESS_ACTION";
export const FETCH_FAILED_ACTION = "FETCH_FAILED_ACTION";

export const fetchDataSuccessAction = (data) => ({
  type: FETCH_SUCCESS_ACTION,
  data: data,
});

export const fetchDataFailedAction = (data) => ({
  type: FETCH_FAILED_ACTION,
  data: data,
});
