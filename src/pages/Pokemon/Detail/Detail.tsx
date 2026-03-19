import './index.css';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetail } from "../../../features/pokemon/detail/pokemonDetailSlice";
import { AppDispatch } from "../../../app/store";
import { getPokemonDetail } from "../../../features/pokemon/pokemonSelectors";

export const Detail = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { pokemon, loading, error } = useSelector(getPokemonDetail);

    console.log(pokemon);


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
        <div className="detailContainer">
            <h4>Pokemon Detail</h4>
            <h3>{pokemon?.name}</h3>

            <div className="imageWrapper">
                <img
                    className="pokemonImg"
                    src={pokemon?.sprites.front_default || ""}
                    alt={pokemon?.name}
                />
            </div>

            <div className="Container">
                <div className="containerColumn">
                    <h2>Stats</h2>
                    {pokemon?.stats.map((a) => (
                        <div className="statItem" key={a.stat.name}>
                            <span>{a.stat.name}</span>
                            <span>{a.base_stat}</span>
                        </div>
                    ))}
                </div>

                <div className="containerColumn">
                    <h2>Abilities</h2>
                    {pokemon?.abilities.map((a) => (
                        <p key={a.ability.name}>{a.ability.name}</p>
                    ))}
                </div>

                <div className="containerColumn">
                    <h2>Types</h2>
                    {pokemon?.types.map((a) => (
                        <p key={a.type.name}>{a.type.name}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}