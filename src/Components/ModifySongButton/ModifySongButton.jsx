import React, { useState } from "react";
import ModifySongModal from "../ModifySongModal/ModifySongModal";

const ModifySongButton = ({ song,updateSongs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => {
    setIsOpen(true);
    event.preventDefault();
    let id = event.target.getAttribute("id");
    return;
  };

  return (
    <div>
      <button type="button" id={`modSong${song.id}`} onClick={handleClick}>
        Modify Song
      </button>
      {isOpen && <ModifySongModal setIsOpen={setIsOpen} song={song} updateSongs={updateSongs} />}
    </div>
  );
};

export default ModifySongButton;
