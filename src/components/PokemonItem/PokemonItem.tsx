import { memo } from "react";
import { pokemonListType } from "../../types";

type pokemonItemProps = {
    pokemon: pokemonListType,
    onClickItem: (url: string) => void
}

export const PokemonItem = memo(({ pokemon, onClickItem }: pokemonItemProps) => {
    return (
        <div className="Item item--small">
            <h3>{pokemon.name}</h3>
            <button onClick={() => onClickItem(pokemon.url)}>Go!</button>
        </div>
    )
});