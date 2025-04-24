import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi} from "./dummyData"

import counterReducer from "../features/reducers/counterslice"
//we cand install which ever it featcues default export 
export const store=  configureStore({
    reducer:{
       [productsApi.reducerPath] : productsApi.reducer 
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productsApi.middleware) 
} 
) 


setupListeners(store.dispatch)