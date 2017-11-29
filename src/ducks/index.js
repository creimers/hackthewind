import { combineReducers } from 'redux'

import app from './app';
import parks from './parks';
import price from './price';

const rootReducer = combineReducers({
  app,
  parks,
  price
})

export default rootReducer
