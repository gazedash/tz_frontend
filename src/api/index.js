// @flow
const getUsers = () => {
  return fetch(actions.ENDPOINT + "/users")
    .then(response => response.json())
    .then(data => { console.log(data); return data})
    .catch(error => {
      throw new Error(error);
    });
};

const getAlbums = userId => {
  return fetch(actions.ENDPOINT + "/albums" + `?userId=${userId}`)
    .then(response => response.json())
    .catch(error => {
      throw new Error(error);
    });
};

const getPhotos = albumId => {
  return fetch(actions.ENDPOINT + "/photos" + `?albumId=${albumId}`)
    .then(response => response.json())
    .catch(error => {
      throw new Error(error);
    });
};

const actions = {
  getUsers,
  getPhotos,
  getAlbums,
  ENDPOINT: " https://jsonplaceholder.typicode.com"
};

export default actions;
