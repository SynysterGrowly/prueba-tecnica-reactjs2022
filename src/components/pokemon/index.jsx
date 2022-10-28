import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoriteContext";


export default function Pokemon(props) {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "💙";
  return (
    <>
      <div className="card-top">
        <h3>N: {pokemon.id} {pokemon.name}</h3>
        <div className="image-pokemon">
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        </div>
        <button onClick={onHeartClick} className="likePoke"> Favorito {heart}</button>
      </div>

      <div className="card-bottom">

        {pokemon.types.map((type, index) => {
          return (
            <div key={index} className="pokemon-type-text">
              {" "}
              {type.type.name}
            </div>
          );
        })}

      </div>
    </>
  );
}
