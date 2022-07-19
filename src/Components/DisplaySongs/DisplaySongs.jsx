import React from "react";
import axios from 'axios';



const DeleteSong = async (e) =>{
    e.preventDefault();
    let id = e.target.getAttribute('song_id');
    let path = 'http://127.0.0.1:8000/music/' + id +'/';
    const response = await axios.delete(path);
    console.log(response);
    return
};

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
                            <td><button type='button' song_id={song.id} onClick = {DeleteSong} >Delete Song</button></td>
                            <td><button type='button' >Modify Song</button></td>
                         </tr>
                        
                    );
                })
                }

            </tbody>
                
        </table>


        
    );
}
 
export default DisplaySongs;