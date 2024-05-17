import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './session';

const store = configureStore({
    reducer: {
        session: sessionReducer,
    },
    middleware: (getDefaultMiddleware) =>
        process.env.NODE_ENV !== 'production'
        ? getDefaultMiddleware().concat(require('redux-logger').default)
        : getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
