import axios from 'axios';

async function GetAllSongs({updateSongs}){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    updateSongs(response.data);
    return
}

export default GetAllSongs;