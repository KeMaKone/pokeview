import React, { useEffect, useState } from "react";
import Tile from "./Tile";

const GridTile = props => {
    const [pokemon, setPokemon] = useState(props.obj);
    
    useEffect(()=> {
        props.obj.then(result => setPokemon(result));
    })

    if(pokemon.sprites === undefined){
        return <p>LOADING</p>
    }

    return (
        <Tile img={{"alt":pokemon.name, "src":pokemon.sprites.front_default}} text={[`#${pokemon.id} ${pokemon.name}`]} onClick={props.onClick}/>
    );
}
/*
    <div> 
            <img alt={pokemon.name} src={pokemon.sprites.front_default} />
            <p>#{pokemon.id} {pokemon.name}</p>
        </div>
*/

export default GridTile;