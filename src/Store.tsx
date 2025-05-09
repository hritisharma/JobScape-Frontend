// Store.ts

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import userReducer from "./Slices/UserSlice";
import profileReducer from "./Slices/ProfileSlice";
import filterReducer from "./Slices/FilterSlice"
import sortReducer from "./Slices/SortSlice";
import authReducer from "./Slices/AuthSlice";

// 1. Combine reducers
const rootReducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    filter: filterReducer,
    sort: sortReducer,
    jwt: authReducer
});

// 2. Configure persist
const persistConfig = {
    key: "root",
    storage,
};

// 3. Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Needed for redux-persist
        }),
});

// 5. Persistor for PersistGate
export const persistor = persistStore(store);
