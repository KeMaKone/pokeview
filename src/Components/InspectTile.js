import React, {useState, useEffect} from "react";
import { Grid } from "react-loader-spinner";
import Tile from './Tile';

const InspectTile = props => {
    const [pokemon, setPokemon] = useState(props.obj);
    
    useEffect(()=> {
        setPokemon(props.pokemon);
    }, [props])

    if (pokemon === null || pokemon === undefined){
        return <Grid className="Tile" color="#00BFFF" height={80} width={80} />
    }

    const generateText = () => {
        var abilities = "";
        var types = "";
        pokemon.abilities.forEach(ability => abilities += ability.ability.name + " ");
        pokemon.types.forEach(type => types += type.type.name + " " );
        console.log(abilities)
        console.log(types)

        return([`ID:\t${pokemon.id}`, 
                `Name:\t${pokemon.name}`, 
                `Height:\t${pokemon.height}`, 
                `Weight:\t${pokemon.weight}`,
                `Abilities:\t${abilities}`,
                `Types:\t${types}`,
                `Health:\t${pokemon.stats[0].base_stat}`,
                `Attack:\t${pokemon.stats[0].base_stat}`,
                `Defence:\t${pokemon.stats[0].base_stat}`,
                `Special Attack:\t${pokemon.stats[0].base_stat}`,
                `Special Defence:\t${pokemon.stats[0].base_stat}`,
                `Speed:\t${pokemon.stats[0].base_stat}`,]);
    }

    return (
        <Tile img={{"alt":pokemon.name, "src":pokemon.sprites.front_default}} text={generateText()} onClick={props.onClick}/>
    );
}

export default InspectTile;