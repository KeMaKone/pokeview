import React, { useEffect, useState } from "react";
import { Grid } from "react-loader-spinner";
import Tile from "./Tile";

const GridTile = props => {
    const [pokemon, setPokemon] = useState(props.obj);
    
    useEffect(()=> {
        props.obj.then(result => setPokemon(result));
    })

    if(pokemon.sprites === undefined){
        return <Grid color="#00BFFF" height={80} width={80} />
    }

    const handleClick = e => {
        e.preventDefault();
        props.changePokemon(pokemon);
        props.viewToggle();
    }

    return (
        <Tile img={{"alt":pokemon.name, "src":pokemon.sprites.front_default}} text={[`#${pokemon.id}\t${pokemon.name}`]} onClick={handleClick}/>
    );
}

export default GridTile;