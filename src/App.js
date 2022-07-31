import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplaySongs from "./Components/DisplaySongs/DisplaySongs";
import GetAllSongs from "./Components/GetAllSongs/GetAllSongs";
import SearchSongs from "./Components/SearchSongs/SearchSongs";

function App() {
  const [songs, updateSongs] = useState([]);

  useEffect(() => {
    GetAllSongs({ updateSongs });
  }, []);

  return (
    <div>
      <DisplaySongs songs={songs} updateSongs={updateSongs} />
      <SearchSongs
        searchField="genre"
        songs={songs}
        updateSongs={updateSongs}
      />
      <SearchSongs
        searchField="artist"
        songs={songs}
        updateSongs={updateSongs}
      />
      <SearchSongs
        searchField="album"
        songs={songs}
        updateSongs={updateSongs}
      />
      <SearchSongs
        searchField="title"
        songs={songs}
        updateSongs={updateSongs}
      />
    </div>
  );
}

export default App;
