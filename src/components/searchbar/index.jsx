import React, { useState } from "react";
import './index.css'

export default function Searchbar(props) {
  const [search, setSearch] = useState("");
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <>
      <div className="container-search">
        <div className="input-pokemon">
        <input className="search-input" placeholder="Ingrese nombre..." onChange={onChangeHandler} />
      </div>
      <div className="button-pokemon">
        <button className="search-button" onClick={onButtonClickHandler}>Buscar</button>
      </div>
      </div>
    </>
  );
}
