import React, { Fragment, useState } from "react";
import "./SearchSongs.css";

const SearchSongs = ({ searchField, songs, updateSongs }) => {
  const [fieldState, setFieldState] = useState("null");

  let testData = songs.map((song) => song[searchField]);
  let tData = testData.filter(
    (value, index) => testData.indexOf(value) === index
  );

  //console.log(tData);

  return (
    <React.Fragment>
      <label htmlFor={`${searchField}-content`}>{`${searchField}`}</label>

      <select
        name={`${searchField}-content`}
        id={`${searchField}-content`}
        onChange={(event) => {
          let selectedField = event.target.value;
          console.log(selectedField);
          //setFieldState(selectedField);
          //console.log(fieldState);
          let newSongs = songs.filter((song) => {
            if (song[searchField].includes(selectedField)) {
              return true;
            }
          });
          console.log(newSongs);
          if (newSongs.length !== 0) {
            updateSongs(newSongs);
          }
        }}
      >
        <option key={`${searchField}-base`}>{`${searchField}`}</option>
        {tData.map((value) => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

export default SearchSongs;
