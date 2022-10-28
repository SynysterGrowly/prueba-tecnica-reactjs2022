import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoriteContext";

export default function Navbar() {
  const { favoritePokemons } = useContext(FavoriteContext);
  return (
    <>
      <div>{favoritePokemons.length} Pokemon favoritos ❤️ </div>
    </>
  );
}