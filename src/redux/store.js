import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import { destinationReducer } from "./slice/destinationSlice";

export const store = configureStore({
  //recommendation is to always have 1 store for the entire app, but you can have multiple if needed. This is the main store for the app.
  reducer: {
    counterStore: counterReducer,
    destinationStore: destinationReducer,
  }, //when you have a store you need to have a reducer, which is a function that takes the current state and an action and returns a new state. We will add reducers later when we create slices.
});

console.log(store.getState());