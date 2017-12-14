import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import mainReducer from './reducers/index'

const loggerMiddleware = createLogger()

export default function configureStore (preloadedState) {
  return createStore(
    mainReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
}
