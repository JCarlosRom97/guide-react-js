import { useSelector, useDispatch } from "react-redux"
import { getPokemons } from "../../../features/pokemon/pokemonSelectors";
import { fetchPokemonList } from "../../../features/pokemon/list/pokemonListSlice";
import { useCallback, useEffect } from "react";
import { AppDispatch } from "../../../app/store";
import { PokemonItem } from "../../../components/PokemonItem/PokemonItem";
import { useNavigate } from "react-router-dom";

export const Pokemon = () => {
    const { pokemons } = useSelector(getPokemons);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()


    const handleClick = useCallback((url: string) => {
        console.log(url);
        
        const id = url.split("/").filter(Boolean).pop();
        console.log(id);
        
        navigate(`/pokemon/detail/${id}`)
    }, [navigate])

    useEffect(() => {
        dispatch(fetchPokemonList());
    }, [dispatch]);

    return (
        <div>
            <h2>Pokemon</h2>
            <div className="horizontalContainer">
                {pokemons.map((p) => <PokemonItem key={p.url} pokemon={p} onClickItem={(url) => handleClick(url)} />)}
            </div>
        </div>
    )
}