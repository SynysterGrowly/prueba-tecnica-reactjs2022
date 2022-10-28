import React from "react";
import './index.css'


export default function Pagination(props) {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <>
    <div className="container">
      <button onClick={onLeftClick} className="page-button">◀</button>
      <div>
        {page} / {totalPages}
      </div>
      <button onClick={onRightClick} className="page-button">▶</button>
      </div>
    </>
  );
}