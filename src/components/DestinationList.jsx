import { useSelector, useDispatch } from "react-redux"; //this is a function that allows us to access the state of the store. We will use this to get the value of the counter from the store.
import { destinationClicked } from "../redux/slice/destinationSlice"; //this is the action that we will dispatch to change the state of the destination. We will use this in our buttons to show the details of the destination when the user clicks on the details button.
function DestinationList() {
  const destinations = useSelector(
    (state) => state.destinationStore.destinations,
  );
  const dispatch = useDispatch();

  return destinations.map((destination, index) => (
    <div className="text-center row border-bottom" key={index}>
      <div className="col-8 pt-2">{destination.name}</div>
      <div className="col-4">
        <button onClick={() => dispatch(destinationClicked(destination))} className="btn btn-success form-control m-1">Details</button>
      </div>
    </div>
  ));
}

export default DestinationList;
