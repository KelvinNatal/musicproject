import React from "react";

import '../../main.css';
import '../../input.css'
import Header from "../../components/header";
import Controls from "../../components/controls/Controls";
import Actions from "../../components/playlist/Actions";
import Playlist from "../../components/playlist/Playlist";
import PlayerState from "../../context/PlayerState";

const PlayerPage = () => {
    return (
      <>
          
                <PlayerState>
                <div className="main">
                    <div className="top">
                        <Header/>
                        <Actions/>
                        <Playlist/>
                    </div>
                    <Controls/>
                </div>
                </PlayerState>
          
      </>   
    );
  }
  
  export default PlayerPage;
  