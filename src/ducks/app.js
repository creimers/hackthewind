const SET_BACKGROUND_BLUR = 'SET_BACKGROUND_BLUR';

export const setBackgroundBlur = (blurRadius) => {
  return {
    type: SET_BACKGROUND_BLUR,
    blurRadius
  }
}

const defaultState = {
  backgroundBlurRadius: 0
}

const appReducer = (state=defaultState, action) => {
  switch (action.type) {

    case SET_BACKGROUND_BLUR:
      return {...state, backgroundBlurRadius: action.blurRadius};

    default:
      return state;
  }
}

export default appReducer;
