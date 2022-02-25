import React from "react";

const GridTile = props => {

    
  
    return (
        <div>     
            <img alt={props.obj.name} src={props.obj.name} ></img>
            <p>Pokemon</p>
            <p>#{props.obj.id} {props.obj.name}</p>
        </div>
    );
}

export default GridTile;