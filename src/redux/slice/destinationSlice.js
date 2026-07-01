import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    destinations: [
      {
        name: "Hong Khong",
        days: 7,
        fact: "World's longest covered escalator",
      },
      {
        name: "Japan",
        days: 10,
        fact: "Japan is mostly mountains",
      },
      {
        name: "New Zealand",
        days: 14,
        fact: "Last country in the world to be inhabited by humans",
      }
    ],
    destinationSelected: null,
  };
  
};

const destinationSlice = createSlice({
  name: "destination",
  initialState: initialState(),
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
      console.log(action.payload);
    },
     resetDestination: (state) => {      state.destinationSelected = null;
      state.destinations = initialState().destinations; //reset the destinations to the initial state, this is useful when we want to reset the app to the initial state.
    }
  }
});
export const destinationReducer = destinationSlice.reducer;
export const { destinationClicked, resetDestination } = destinationSlice.actions;