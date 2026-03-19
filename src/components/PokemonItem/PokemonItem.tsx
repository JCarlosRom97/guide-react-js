import './styles.css'
import { memo } from "react";
import { pokemonListType } from "../../types";

type pokemonItemProps = {
    pokemon: pokemonListType,
    onClickItem: (url: string) => void
}

export const PokemonItem = memo(({ pokemon, onClickItem }: pokemonItemProps) => {
  return (
    <div
      className="pokemonCard"
      onClick={() => onClickItem(pokemon.url)}
    >
      <div className="pokemonCardContent">
        <h3>{pokemon.name}</h3>
        <span className="pokemonCTA">View details →</span>
      </div>
    </div>
  );
});