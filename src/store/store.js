import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {rootReducer} from "./root-reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {thunk} from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./root-saga";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user', 'categories']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

const middlewares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(Boolean);

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
const composedEnhanced = composeEnhancer(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composedEnhanced)
export const  persistor = persistStore(store)
sagaMiddleware.run(rootSaga)