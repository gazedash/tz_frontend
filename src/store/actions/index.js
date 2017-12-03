// @flow
import { createAction } from "redux-actions";
import api from "../../api";

export const getUsersAction = createAction("GET_USERS");
export const getAlbumsAction = createAction("GET_ALBUMS");
export const getPhotosAction = createAction("GET_PHOTOS");

const getUsers = () => {
  return (dispatch) => {
    return api.getUsers().then(users => dispatch(getUsersAction(users)));
  };
};

const getAlbums = userId => {
  console.log(userId);
  
  return dispatch => {
    console.log('hej');
    
    return api
      .getAlbums(userId)
      .then(albums => dispatch(getAlbumsAction({ albums, userId })));
  };
};

const getPhotos = albumId => {
  return dispatch => {
    return api
      .getPhotos(albumId)
      .then(photos => dispatch(getPhotosAction({ photos, albumId })));
  };
};

const actions = {
  getUsers,
  getPhotos,
  getAlbums,
  getAlbumsAction,
  getPhotosAction,
  getUsersAction
};

export default actions;
