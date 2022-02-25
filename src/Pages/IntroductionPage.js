import React, { useEffect, useState } from "react";
import GridTile from "../Components/GridTile";

const baseApiCall = 'https://pokeapi.co/api/v2/pokemon/';

var limit = 20;


function generateRandoms(){
    const maxPokemonIndex = 898;
    const nums = [];
    for(var i = 0; i < limit; i++){
        nums[i] = Math.floor(Math.random() * maxPokemonIndex + 1);
    }
    return nums;
}

function getNewRoster(){
    let pokemons = [];
    const nums = generateRandoms();
    nums.forEach(id => {
        pokemons.push(fetch(baseApiCall+id).then(res => res.json()));
    });
    return pokemons;    
}

const IntroductionPage = props =>{
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        setPokemons(getNewRoster())
    }, [])

    const handlePokemonChange = pokemon => {
        props.changePokemon(pokemon)
    }

    return(
        <ul className="IntroPage">
            { pokemons.map((pokemon, idx) => (
                <GridTile key={idx} obj={pokemon} viewToggle={props.viewToggle} changePokemon={handlePokemonChange} />
            ))}
        </ul>
    );
}

export default IntroductionPage;