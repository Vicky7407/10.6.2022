import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import {rootsaga} from '../Saga/rootsaga';
import { watchAuth } from '../Saga/Auth.saga'
import { rootReducer } from './Rootreducer';


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk,sagaMiddleware]
// mount it on the Store
export const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

// then run the saga
sagaMiddleware.run(rootsaga)

// render the application
