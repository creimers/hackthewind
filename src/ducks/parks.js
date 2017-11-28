const FETCH_PARKS_REQUEST = 'FETCH_PARKS_REQUEST';
const FETCH_PARKS_SUCCESS = 'FETCH_PARKS_SUCCESS';

export const fetchParksRequest = () => {
  return {
    type: FETCH_PARKS_REQUEST
  }
}

export const fetchParksSuccess = () => {
  return {
    type: FETCH_PARKS_SUCCESS
  }
}

const defaultState = {
  parks: [
    {name: 'Park 1', slug: 'park1'},
    {name: 'Park 2', slug: 'park2'},
    {name: 'Park 3', slug: 'park3'},
  ],
  isFetching: false
}

const parkReducer = (state=defaultState, action) => {
  switch (action.type) {
    
    case FETCH_PARKS_REQUEST:
      return {...state, isFetching: true}

    case FETCH_PARKS_SUCCESS:
      return {...state, isFetching: false}

    default:
      return state;
  }
}

export default parkReducer;
