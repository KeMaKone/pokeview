import React, {useState, useEffect} from "react";
import Tile from './Tile';

const InspectTile = props => {
    const [pokemon, setPokemon] = useState(props.obj);
    
    useEffect(()=> {
        setPokemon(props.pokemon);
    }, [props])

    if (pokemon === null || pokemon === undefined){
        return <p>LOADING</p>
    }

    return (
        <Tile img={{"alt":pokemon.name, "src":pokemon.sprites.front_default}} 
        text={[`#${pokemon.id}`, `Name: ${pokemon.name}`, `Height: ${pokemon.height}`, `Weight: ${pokemon.weight}`]} 
        onClick={props.onClick}/>
    );
}

export default InspectTile;