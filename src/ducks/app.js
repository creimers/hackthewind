const SET_BACKGROUND_BLUR = 'SET_BACKGROUND_BLUR';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const SHOW_LOGIN_CARD = 'SHOW_LOGIN_CARD';

export const setBackgroundBlur = (blurRadius) => {
  return {
    type: SET_BACKGROUND_BLUR,
    blurRadius
  }
}

export const logInRequest = () => {
  return {
    type: LOG_IN_REQUEST
  }
}

export const logInSuccess = () => {
  return {
    type: LOG_IN_SUCCESS
  }
}

export const showLoginCard = () => {
  return {
    type: SHOW_LOGIN_CARD
  }
}

const defaultState = {
  backgroundBlurRadius: 0,
  isLoggingIn: false,
  showLoginCard: false
}

const appReducer = (state=defaultState, action) => {
  switch (action.type) {

    case SET_BACKGROUND_BLUR:
      return {...state, backgroundBlurRadius: action.blurRadius};

    case LOG_IN_REQUEST:
      return {...state, isLoggingIn: true};

    case LOG_IN_SUCCESS:
      return {...state, isLoggingIn: false};

    case SHOW_LOGIN_CARD:
      return {...state, showLoginCard: true};

    default:
      return state;
  }
}

export default appReducer;
