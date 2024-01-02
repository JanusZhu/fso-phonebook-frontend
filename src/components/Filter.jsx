import React from "react";
import { useState } from "react";
const Filter = (props) => {
  const { filterString, setFilterString } = props;
  const changeFilterString = (e) => {
    setFilterString(e.target.value);
  };
  return (
    <div>
      <h2>Filter</h2>
      <div>
        filter shown with: <input onChange={changeFilterString} />
      </div>
    </div>
  );
};

export default Filter;
