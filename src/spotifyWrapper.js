
export const search = (query, type) => {
  return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(data => data.json);
};

export const searchAlbums = (album) => {
  search(album, 'album');
};

export const searchArtists = (artist) => {
  search(artist, 'artist');
};

export const searchTracks = (track) => {
  search(track, 'track');
};

export const searchPlaylists = (playlist) => {
  search(playlist, 'playlist');
};
