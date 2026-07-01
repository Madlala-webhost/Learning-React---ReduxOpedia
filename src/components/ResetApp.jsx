import { useSelector, useDispatch } from "react-redux";
import { resetDestination } from "../redux/slice/destinationSlice";
import {resetCounter} from "../redux/slice/counterSlice";

function ResetApp() {
    const dispatch = useDispatch();

    return ( 
        <div className="text-center">
            <button onClick={() => {dispatch(resetDestination()); dispatch(resetCounter());}} className="btn btn-warning">Reset App</button>
        </div>
     );
}

export default ResetApp;