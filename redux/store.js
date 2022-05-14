import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { passReducer } from './reducers';

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const initialState = {};

const persistedReducer = persistReducer(persistConfig, reducers);
const Store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(thunk)
);
const persistor = persistStore(Store);

export { Store, persistor };
