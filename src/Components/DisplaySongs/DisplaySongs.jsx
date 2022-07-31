import React from "react";
import DeleteSongButton from "../DeleteSongButton/DeleteSongButton";

const DisplaySongs  = ({songs,updateSongs}) => {
    return (  
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
            </thead>

            <tbody>
                {songs.map((song) => {
                    return (
                        <tr key={song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td><DeleteSongButton song={song} updateSongs = {updateSongs}/></td>
                            <td><button type='button'>Modify Song</button></td>
                         </tr>
                        
                    );
                })
                }

            </tbody>
                
        </table>

    
    );

}
 
export default DisplaySongs;