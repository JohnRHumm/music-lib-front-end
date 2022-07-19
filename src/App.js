import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
import GetAllSongs from './Components/GetAllSongs/GetAllSongs';



function App() {

    const [songs,updateSongs] = useState([]);

    useEffect(()=>{
       GetAllSongs({updateSongs});
       
    },[]);

    
  return (
    <div >
      <DisplaySongs songs = {songs} updateSongs = {updateSongs}/>
    </div>
  );
}



export default App;
