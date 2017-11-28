import { combineReducers } from 'redux'

import app from './app';
import parks from './parks';

const rootReducer = combineReducers({
  app,
  parks
})

export default rootReducer
