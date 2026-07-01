import {useSelector} from "react-redux";

function DestinationFact() {
    const destinationSelected = useSelector(
        (state) => state.destinationStore.destinationSelected,
    );

    if(destinationSelected === null) {
        return <div className="text-center pt-4 text-warning">Please select a destination to see the fact about it.</div>;
    }
else{
    return ( 
<div className="text-center border p-3 m-3">
    <h4 className="text-success">{destinationSelected.name}</h4>
    <p className="text-center text-warning fs-4">Fun fact: {destinationSelected.fact}</p>
    <p className="text-center text-info">Days recommended: {destinationSelected.days}</p>
</div>
     );
}
    
}

export default DestinationFact;