import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';





const makeStore = () =>
    configureStore({
        reducer: {
   
        },
        middleware(getDefaultMiddleware) {
            return getDefaultMiddleware().concat(
               
            )
        },
      
    });



export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];

export const wrapper = createWrapper(makeStore);