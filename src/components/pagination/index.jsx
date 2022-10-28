import React from "react";


export default function Pagination(props) {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <>
      <button onClick={onLeftClick}>◀</button>
      <div>
        {page} / {totalPages}
      </div>
      <button onClick={onRightClick}>▶</button>
    </>
  );
}