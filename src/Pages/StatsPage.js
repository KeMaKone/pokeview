import React, {useState} from "react";
import InspectTile from '../Components/InspectTile';

const StatsPage = () => {
    const [pokemon, setPokemon] = useState([]);

    return <InspectTile obj={pokemon}></InspectTile>
}

export default StatsPage;