import React, {useReducer} from 'react';
import playerReducer from './playerReducer'
import playerContext from './playerContext'

import { song_list } from './songs';

import {
  SET_CURRENT_SONG,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_SONGS_ARRAY,
} from '../types'
import { resolvePath } from 'react-router-dom';

const PlayerState = (props) => {
  const initialState = {
    currentSong: 0,
    songslist: song_list,
    repeat: false,
    random: false,
    playing: false,
    audio: null,
  }
  const [state, dispatch] = useReducer(playerReducer, initialState)

  // Set songs array
  const songsSet = (songArr) =>
    dispatch({ type: SET_SONGS_ARRAY, data: songArr })
  // Set playing state
  const togglePlaying = () =>
    dispatch({ type: TOGGLE_PLAYING, data: state.playing ? false : true })
  // Set current song
  const SetCurrent = (id) => dispatch({ type: SET_CURRENT_SONG, data: id })

  // Prev song
  const prevSong = () => {
    if (state.currentSong === 0) {
      SetCurrent(state.songslist.length - 1)
    } 
    else {
      SetCurrent(state.currentSong - 1)
    }
  }

  // Next song
  const nextSong = () => {
    if (state.currentSong === state.songslist.length - 1) {
      SetCurrent(0)
    } else {
      SetCurrent(state.currentSong + 1)
    }
  } 
   // Repeat song
   const repeatSong = (teste2, testando) => {
    if(state.currentSong === testando){
        console.log(teste2, testando)
    }else{
        nextSong()
    } 
  }

  // Repeat and Random
  const toggleRepeat = (id) =>
    dispatch({ type: TOGGLE_REPEAT, data: state.repeat ? false : true })
  const toggleRandom = (id) =>
    dispatch({ type: TOGGLE_RANDOM, data: state.random ? false : true })

  // End of Song
  const handleEnd = () => {
    // Check for random and repeat options
    if (state.random) {
      return dispatch({
        type: SET_CURRENT_SONG,
        data: ~~(Math.random() * state.songslist.length),
      })
    } else {
      if (state.repeat) {
        var teste2 = state.currentSong
        var testando = 0;
        repeatSong(teste2,testando)
      } /*else if(state.currentSong === state.song_list.length - 1) {
        return
      }*/ else {
        nextSong()      
      }      
    }
  }

  return (
    <playerContext.Provider
      value={{
        currentSong: state.currentSong,
        songs: state.songs,
        songslist: state.songslist,
        repeat: state.repeat,
        random: state.random,
        playing: state.playing,
        audio: state.audio,
        nextSong,
        prevSong,
        repeatSong,
        SetCurrent,
        toggleRandom,
        toggleRepeat,
        togglePlaying,
        handleEnd,
        songsSet,
      }}
    >
      {props.children}
    </playerContext.Provider>
  )
}

export default PlayerState
