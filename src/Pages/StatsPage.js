import React from "react";
import InspectTile from '../Components/InspectTile';

const StatsPage = props => {
    return (
        <div className="StatsPage">
            <button onClick={props.viewToggle}>Return</button>
            <InspectTile pokemon={props.pokemon} onClick={props.viewToggle} />
        </div> 
        );
}

export default StatsPage;