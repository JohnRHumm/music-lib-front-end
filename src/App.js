import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';



function App() {

    const [songs,updateSongs] = useState([]);

    useEffect(()=>{
       getAllSongs();
       
    },[]);

    async function getAllSongs(){
      const response = await axios.get('http://127.0.0.1:8000/music/');
      updateSongs(response.data);
      console.log(response.data);

    }
  return (
    <div >
      <DisplaySongs songs = {songs}/>
    </div>
  );
}



export default App;
