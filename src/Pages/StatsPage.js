import React from "react";
import InspectTile from '../Components/InspectTile';

const StatsPage = props => {
    return <InspectTile pokemon={props.pokemon} onClick={props.viewToggle} />
}

export default StatsPage;