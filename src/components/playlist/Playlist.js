import  React, {useContext, useState, useRef} from 'react';
//import { song_list } from '../../context/songs'
import playerContext from '../../context/playerContext'
import { song_list } from '../../context/songs';

const Playlist = () => {
    const { SetCurrent, currentSong, songslist } = useContext(playerContext)
  
    const audio = useRef('audio_tag')

    const [dur, setDur] = useState(0)

    const fmtMSS = (s) => {
      return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
      
    }

    for(var i = 0; i<song_list.length; i++){       
        fmtMSS(dur);
    }

    const duracao = (event) =>{
      var durac = event.target.duration;
      for(var i = 0; i<song_list.length; i++){       
        var resposta = durac(i);
      }
    }

    return (
      <div className="playlist no_drag">,
      
        <div className="cabeçalho d-flex row">
          <div className='col-5 titulo'><h3>Titulo</h3></div>
          <div className='col-4 album'><h3>Album</h3></div>
          <div className='col-2 duracao'><h3>Duração</h3></div>
          <div className='col-1 data'><h3>Data</h3></div>
        </div>
        <ul className="loi">
          {songslist.map((song, i) => (
            <li
              className={'songContainer ' + (currentSong === i ? 'selected' : '')}
              key={i}
              onClick={() => {
                SetCurrent(i)
              }}
            > 
              <div className='musicContainer d-flex'>
                <div className='titulao d-flex'>
                  <div className="tmbn_song">
                    <i className="fas fa-play"></i>
                  </div>
                <div className="songmeta_playlist">
                  <span className="songname">{song.title}</span>
                  <span className="songauthors">{song.artistName}</span>
                </div>
                </div>            
                <div className='albumDesc'>{song.albumTitle}</div>
                <div className='duracaoDesc'>
                  
                <audio
                  onCanPlay={(e) => setDur(e.target.duration)}
                  ref={audio}
                  type="audio/mpeg"
                  preload="true"
                  src={songslist[currentSong].fileUrl}
                />
                    {fmtMSS(dur)}
                  </div>
                <div className='dataDesc'><h3>Data</h3></div>             
              </div>


            </li>
          ))}
        </ul>
        
      </div>
    )
  }
  
  export default Playlist
  