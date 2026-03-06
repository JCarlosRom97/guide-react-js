import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetail } from "../../../features/pokemon/detail/pokemonDetailSlice";
import { AppDispatch } from "../../../app/store";
import { getPokemonDetail } from "../../../features/pokemon/pokemonSelectors";

export const Detail = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { pokemon, loading, error } = useSelector(getPokemonDetail);

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchPokemonDetail(Number(id)));
        }
    }, [dispatch, id])

    if (loading)
        return (
            <h2>Loading...</h2>)

    if (error)
        return (
            <h2>Error...</h2>)

    return (
        <div>
            <h4>Pokemon Detail</h4>
            <h3>{pokemon?.name}</h3>
        </div>
    )
}