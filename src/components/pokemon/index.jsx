import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoriteContext";
import './index.css'


export default function Pokemon(props) {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;

  console.log(pokemon);

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "💙";
  return (
    <>
      <div className="pokemon-card-container">
          <div className="pokemon-card">
            <div className="background">
                <img src={pokemon.sprites.front_default} className="image" alt="" />
            </div>

            <div className="content">
              <p className="pokemon-name">N: {pokemon.id} {pokemon.name}</p>
              {pokemon.types.map((type, index) => {
              return (
                <>
                  <div className="type-container">
                    <span key={index} className="pokemon-type">{type.type.name}</span>
                  </div>
                </>
                );
              })}

              <p>Abilities</p>
              {pokemon.abilities.map((ability, index) => {
                return (
                  <>
                    <div className="pokemon-stats">
                        <span key={index} >{ability.ability.name}</span>
                    </div>

                  </>
                  );
              })}

              {pokemon.game_indices.map((game, index) => {
                return (
                  <>
                    <div className="pokemon-stats">
                        <span key={index} >{}</span>
                    </div>

                  </>
                  );
              })}


              <p className="pokemon-logo">
                <button onClick={onHeartClick} className="likePoke"> Favorito {heart}</button>
              </p>
            </div>
          </div>
      </div>

    </>
  );
}
