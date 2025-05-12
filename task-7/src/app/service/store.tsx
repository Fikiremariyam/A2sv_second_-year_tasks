import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi} from "../features/reducers/dummyData"
import { jobsapi } from "../features/reducers/jobs";

import counterReducer from "../features/reducers/counterslice"
//we cand install which ever it featcues default export 
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [jobsapi.reducerPath]: jobsapi.reducer,
      
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware, jobsapi.middleware), // Add the new API middleware here
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch)