import React from 'react';
import axios from 'axios';
import GetAllSongs from '../GetAllSongs/GetAllSongs';


const DeleteSongButton = ({song,updateSongs}) =>{
    
    const DeleteSong = async (event) =>{
        event.preventDefault();
        let id = event.target.getAttribute('id');
        let path = 'http://127.0.0.1:8000/music/' + id +'/';
        const response = await axios.delete(path);
        GetAllSongs({updateSongs})
        return
    };

    
    return (

        <button
            type='button'
            onClick = {DeleteSong}
            id={song.id}
        >
            Delete Song
        </button>

        
    )
    
}

export default DeleteSongButton;