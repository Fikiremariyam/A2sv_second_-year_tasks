import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi} from "../features/reducers/dummyData"

import counterReducer from "../features/reducers/counterslice"
//we cand install which ever it featcues default export 
export const store=  configureStore({
    reducer:{
        counter: counterReducer,
       [productsApi.reducerPath] : productsApi.reducer 
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware) 
} 
) 

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch)