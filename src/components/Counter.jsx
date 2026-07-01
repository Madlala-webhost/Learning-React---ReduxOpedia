import { useSelector, useDispatch } from "react-redux"; //this is a function that allows us to access the state of the store. We will use this to get the value of the counter from the store.
import { increment, decrement } from "../redux/slice/counterSlice"; //these are the actions that we will dispatch to change the state of the counter. We will use these in our buttons to increment and decrement the counter.
import { useState } from "react";
import {
  decrementMultiplier,
  incrementMultiplier,
} from "../redux/slice/counterSlice"; //these are the actions that we will dispatch to change the state of the counter by a specific value. We will use these in our buttons to increment and decrement the counter by a specific value based on the multiplier state.

function Counter() {
  const [multiplier, setMultiplier] = useState(10); //this state will hold the value of the multiplier that we will use to increment and decrement the counter by a specific value. We will update this state when the user types in the input field.
  const count = useSelector((state) => state.counterStore.count); //useSelector takes a function that receives the state and returns the part of the state we want. In this case, we want the count from the counterStore.
  const dispatch = useDispatch(); //useDispatch is a function that returns the dispatch function. We will use this to dispatch actions to change the state of the counter.
  //function handleInputChange(e) {
  // const value = e.target.value;
  // if (value === "") {
  // If the input is empty, reset the count to the initial state
  //  dispatch({ type: "counter" });
  // } else {
  //  const multiplier = parseInt(value, 10);
  //  if (!isNaN(multiplier)) {
  // If the input is a valid number, update the count based on the multiplier
  //   dispatch({ type: "counter", payload: multiplier });
  //  console.log(multiplier);

  //    }
  //   }
  //   }

  return (
    <div className="m-4 rounded border text-center p-4">
      <h1 className="text-warning pt-2"> Counter App</h1>
      <hr />
      <span className="col-4 badge bg-secondary fs-1 p-3 mb-3">{count}</span>
      <div className="row g-3">
        <div className="pb-2 col-12 col-md-6">
          <div className="border p-2 rounded">
            <p className="text-success h3">Basic Counter</p>
            <button
              onClick={() => dispatch(increment())}
              className="btn btn-success m-2"
            >
              Increment
            </button>
            {/* This button will dispatch the increment action to increase the count */}
            <button
              onClick={() => dispatch(decrement())}
              className="btn btn-danger m-2"
            >
              Decrement
            </button>
            {/* This button will dispatch the decrement action to decrease the count */}
          </div>
        </div>
        <div className="pb-2 col-12 col-md-6">
          <div className="border p-2 rounded">
            <p className="text-success h3">Multiplier Counter</p>
            <input
              type="text"
              value={multiplier}
              placeholder="multiplier...."
              className="form-control my-2"
              onChange={(e) => setMultiplier(parseInt(e.target.value, 10))} //we are updating the multiplier state with the value of the input field. We are parsing the value to an integer because we want to use it as a number in our actions. The 10 in simple terms means we are parsing the value as a base 10 number, which is the standard number system we use. If the user types in a non-numeric value, parseInt will return NaN, which we can handle in our actions to prevent errors.
            />
            <button
              onClick={() => dispatch(incrementMultiplier(multiplier))} //we are sending the multiplier as the payload of the action, which will be used in the reducer to increment the count by the multiplier value.
              className="btn btn-success m-2"
            >
              Increment
            </button>
            {/* This button will dispatch the increment action to increase the count */}
            <button
              onClick={() => dispatch(decrementMultiplier(multiplier))} //we are sending the multiplier as the payload of the action, which will be used in the reducer to decrement the count by the multiplier value.
              className="btn btn-danger m-2"
            >
              Decrement
            </button>
            {/* This button will dispatch the decrement action to decrease the count */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
