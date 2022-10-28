import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoriteContext";
import './index.css'

export default function Navbar() {
  const { favoritePokemons } = useContext(FavoriteContext);
  return (
    <>
      <div className="container-nav">
        <h2>Prueba tecnica</h2>
        {favoritePokemons.length} Pokemon favoritos ❤️
      </div>
    </>
  );
}