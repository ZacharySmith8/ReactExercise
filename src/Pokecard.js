import React from "react";

function Pokecard(props){
    let src= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return (
        <div class="card col-3" >
          <p class="text-center">{props.name}</p>
          <img src={src}/>
          <div class="card-body">
            <p>TYPE:{props.type}</p>
            <p>EXP:{props.base_experience}</p>
          </div>
        </div>
        
    )
}



export {Pokecard};