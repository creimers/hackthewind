const FETCH_PRICE_REQUEST = 'FETCH_PRICE_REQUEST';
const FETCH_PRICE_SUCCESS = 'FETCH_PRICE_SUCCESS';

export const fetchPriceRequest = () => {
  return {
    type: FETCH_PRICE_REQUEST
  }
}

export const fetchPriceSuccess = (data, dateString) => {
  return {
    type: FETCH_PRICE_SUCCESS,
    data,
    dateString
  }
}

export const fetchPriceData = (dateString) => {
  console.log(dateString)
  return dispatch => {
    dispatch(fetchPriceRequest())
    const year = dateString.split('-')[0]
    const month = dateString.split('-')[1]
    const day = dateString.split('-')[2]
    const url = `https://cdn.rawgit.com/creimers/hackthewind/a8a836a7/src/data/${year}.${month}.${day}.json`
    return fetch(url, { mode: 'cors' })
      .then(response => response.text())
      .then(json => dispatch(fetchPriceSuccess(json, dateString)))
  }
}

const defaultState = {
  pricesPerDate: {},
  isFetching: false
}

const parkReducer = (state=defaultState, action) => {
  switch (action.type) {
    
    case FETCH_PRICE_REQUEST:
      return {...state, isFetching: true}

    case FETCH_PRICE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pricesPerDate: {...state.pricesPerDate, [action.dateString]: action.data}
      }

    default:
      return state;
  }
}

export default parkReducer;
