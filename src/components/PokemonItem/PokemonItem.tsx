import { memo } from "react";
import { pokemonListType } from "../../types";

type pokemonItemProps = {
    pokemon:pokemonListType,
    onClickItem:(url:string) => void
}

export const PokemonItem = memo(({pokemon, onClickItem}: pokemonItemProps)=>{
    console.log('pokemonItem');
    
    return(
        <div>
            <h3>{pokemon.name}</h3>
            <button onClick={() => onClickItem(pokemon.url)}>Click</button>
        </div>
    )
});