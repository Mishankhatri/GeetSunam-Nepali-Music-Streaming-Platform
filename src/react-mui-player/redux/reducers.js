import { combineReducers } from "redux";

import { RepeatMode, MediaState } from "./types";
import { Track, ActionTypes } from "./types";

function mediaState(state = MediaState.STOPPED, action) {
  switch (action.type) {
    case ActionTypes.PLAY:
      return MediaState.PLAYING;
    case ActionTypes.PAUSE:
      return MediaState.PAUSED;
    case ActionTypes.STOP:
      return MediaState.STOPPED;
    default:
      return state;
  }
}

function playlist(state = [new Track("", "", "", "", "")], action) {
  if (action.type === ActionTypes.UPDATE_PLAYLIST)
    return action.payload.playlist;
  if (action.type === ActionTypes.SET_PLAYER_STATE)
    return action.payload.playlist;
  else return state;
}

function currentTrack(state = 0, action) {
  if (action.type === ActionTypes.CHANGE_TRACK) return action.payload.index;
  if (action.type === ActionTypes.SET_PLAYER_STATE) {
    return action.payload.currentTrack;
  } else return state;
}

function shuffled(state = false, action) {
  if (action.type === ActionTypes.SHUFFLE) return action.payload.shuffle;
  if (action.type === ActionTypes.SET_PLAYER_STATE)
    return action.payload.shuffled;
  else return state;
}

function currentTime(state = 0, action) {
  if (action.type === ActionTypes.SET_CURRENT_TIME)
    return action.payload.currentTime;
  // if (action.type === ActionTypes.SET_PLAYER_STATE)
  //   return action.payload.currentTime;
  else return state;
}

function favourite(state = null, action) {
  if (action.type === ActionTypes.GET_TRACK_DETAILS)
    return action.payload.favourite;
  if (action.type === ActionTypes.SET_PLAYER_STATE)
    return action.payload.favourite;
  else return state;
}

function trackID(state = null, action) {
  if (action.type === ActionTypes.GET_TRACK_DETAILS)
    return action.payload.trackId;
  if (action.type === ActionTypes.SET_PLAYER_STATE)
    return action.payload.trackID;
  else return state;
}

function timeLeft(state = 0, action) {
  if (action.type === ActionTypes.SET_TIME_LEFT) return action.payload.timeLeft;
  // if (action.type === ActionTypes.SET_PLAYER_STATE)
  //   return action.payload.timeLeft;
  else return state;
}

function volume(state = 0, action) {
  if (action.type === ActionTypes.CHANGE_VOLUME) return action.payload.volume;
  if (action.type === ActionTypes.SET_PLAYER_STATE)
    return action.payload.volume;
  else return state;
}

function repeatMode(state = RepeatMode.NORMAL, action) {
  if (action.type === ActionTypes.SET_PLAYER_STATE)
    return action.payload.repeatMode;
  if (action.type !== ActionTypes.SET_REPEAT_MODE) return state;
  switch (state) {
    case RepeatMode.NORMAL:
      return RepeatMode.REPEAT_ALL;
    case RepeatMode.REPEAT_ALL:
      return RepeatMode.REPEAT_ONE;
    case RepeatMode.REPEAT_ONE:
      return RepeatMode.NORMAL;
    default:
      return state;
  }
}

export default combineReducers({
  mediaState,
  playlist,
  currentTrack,
  shuffled,
  currentTime,
  timeLeft,
  volume,
  repeatMode,
  favourite,
  trackID,
});
