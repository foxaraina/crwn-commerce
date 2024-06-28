import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {rootReducer} from "./root-reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user', 'categories']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [logger];

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
const composedEnhanced = composeEnhancer(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composedEnhanced)
export const  persistor = persistStore(store)