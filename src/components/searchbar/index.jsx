import React, { useState } from "react";


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
      <div className="input-pokemon">
        <input placeholder="Ingrese nombre..." onChange={onChangeHandler} />
      </div>
      <div className="button-pokemon">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </>
  );
}
