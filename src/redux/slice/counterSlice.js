import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 15 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    //these are actions that we can dispatch to change the state. They are functions that take the current state and an action and return a new state. We will use these actions in our components to change the state.
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },
    decrementMultiplier: (state, action) => {
      state.count -= action.payload;
    },
    incrementMultiplier: (state, action) => {
      state.count += action.payload;
    },
    resetCounter: (state) => {
      state.count = initialState.count;
    }
  },
});


export const { increment, decrement, decrementMultiplier, incrementMultiplier, resetCounter } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;   