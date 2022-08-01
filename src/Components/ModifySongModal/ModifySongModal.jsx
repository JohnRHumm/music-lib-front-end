import React, { useState } from "react";
import axios from "axios";
import "./ModifySongModal.css";
import GetAllSongs from "../GetAllSongs/GetAllSongs";

const ModifySongModal = ({ setIsOpen, song, updateSongs }) => {
  //console.log("Modal reached");
  //console.log(song);
  const [title, setTitle] = useState(song.title);
  const [album, setAlbum] = useState(song.album);
  const [artist, setArtist] = useState(song.artist);
  const [releaseDate, setReleaseDate] = useState(song.release_date);
  const [genre, setGenre] = useState(song.genre);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTitle(e.target["title"].value);
    setAlbum(e.target["album"].value);
    setArtist(e.target["artist"].value);
    setReleaseDate(e.target["date"].value);
    setGenre(e.target["genre"].value);
    let putRequest = {
      id: song.id,
      title: title,
      album: album,
      artist: artist,
      release_date: releaseDate,
      genre: genre,
    };
    // song.title = title;
    // song.album = album;
    // song.artist = artist;
    // song.release_date = releaseDate;
    // song.genre = genre;
    let path = "http://127.0.0.1:8000/music/" + song.id + "/";
    const response = await axios.put(path, putRequest);
    GetAllSongs({ updateSongs });

    console.log(path);
    console.log(putRequest);
    setIsOpen(false);

    return;
  };

  return (
    <>
      <div className="darkBG">
        <div className="centered">
          <div className="modal">
            <div className="modalHeader">
              <h4 className="heading">Modify {song.title}</h4>
            </div>
            <form className="actionsContainer" onSubmit={handleSubmit}>
              <label htmlFor="title">Title</label>
              <input
                name="title"
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="artist">Artist</label>
              <input
                name="artist"
                id="artist"
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
              />
              <label htmlFor="album">Album</label>
              <input
                name="album"
                id="album"
                type="text"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
              />
              <label htmlFor="date">Release Date</label>
              <input
                name="date"
                id="date"
                type="date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
              />
              <label htmlFor="genre">Genre</label>
              <input
                name="genre"
                id="genre"
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />

              <input
                name="updateSong"
                id="updateSong"
                type="submit"
                value="Update Song"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModifySongModal;

//</>onClick={() => setIsOpen(false)}>
