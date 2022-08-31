import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import {rootsaga} from '../Saga/rootsaga';
import { watchAuth } from '../Saga/Auth.saga'
import { persistStore, persistReducer } from 'redux-persist'
import { rootReducer } from './Rootreducer';
import storage from 'redux-persist/lib/storage'


// create the saga middleware
const persistConfig = {
  key: 'root',
  storage,
  whitelist:['Auth']
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk,sagaMiddleware]
const persistedReducer = persistReducer(persistConfig, rootReducer)
// mount it on the Store
export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
  )
  export let persistor = persistStore(store)

// then run the saga
sagaMiddleware.run(rootsaga)

// render the application
