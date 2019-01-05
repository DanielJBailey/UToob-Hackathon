import axios from 'axios';
import alert from 'sweetalert2';

const VIDEOS = "VIDEOS";
const ADD_VIDEO = "ADD_VIDEO";
const DELETE_VIDEO = "DELETE_VIDEO";

// REDUX ACTIONS

export const getVideos = () => {
    return (dispatch) => {
        axios.get('/api/videos')
        .then(res => dispatch({ type: VIDEOS, videos: res.data}))
    }
}

export const addVideo = (userId, video) => {
    alert(
        'Video Added!',
        'Your video has been successfully added!',
        'success'
    )
    return (dispatch) => {
        axios.post(`/api/users/${userId}/videos`, {video})
        .then(res => dispatch({ type: ADD_VIDEO, video: res.data}))
    }
}

export const deleteVideo = (userId, videoId) => {
    alert(
        'Video Deleted!',
        'Your video has been successfully removed!',
        'success'
    )
    return (dispatch) => {
        axios.delete(`/api/users/${userId}/videos/${videoId}`)
        .then( () => dispatch({ type: DELETE_VIDEO, videoId }))
    }
}

// REDUX REDUCER

export default (state = [], action ) => {
  switch(action.type) {
    case VIDEOS:
      return action.videos
    case ADD_VIDEO:
      return [action.video, ...state]
    case DELETE_VIDEO:
      return state.filter( a => a.id !== action.id )
    default:
      return state;
  } 
}