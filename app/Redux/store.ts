import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { adminReducer, userReducer } from "./slice";
import thunk from 'redux-thunk'
import { encryptTransform } from "redux-persist-transform-encrypt";
import { error } from "console";

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    encryptTransform({
      secretKey: '1234',
      onError: function(e){
        console.error(e.message);
      },
    }),
  ],
}


const combinedReducer = combineReducers({admin: adminReducer, user: userReducer});

const persistedReducer = persistReducer(persistConfig, combinedReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export type RootState = ReturnType<typeof combinedReducer>

export const persistor = persistStore(store); 

