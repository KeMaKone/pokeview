import React from "react";
import InspectTile from '../Components/InspectTile';

const StatsPage = props => {
    return (
        <div className="StatsPage">
            <button className="returnbutton" onClick={props.viewToggle}>←</button>
            <InspectTile pokemon={props.pokemon} onClick={props.viewToggle} />
        </div> 
        );
}

export default StatsPage;