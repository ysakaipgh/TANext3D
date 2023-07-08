import { configureStore } from "@reduxjs/toolkit";
import { type Store, combineReducers } from "redux";
import positionSlice, { initialState as positionState } from "~/stores/position/slice";

const rootReducer = combineReducers({
  position: positionSlice.reducer,
});

const preloadedState = () => {
  return { position: positionState };
};

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const createStore = () => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState(),
  });
};

export default createStore;