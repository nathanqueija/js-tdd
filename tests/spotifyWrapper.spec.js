import { expect } from 'chai';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/spotifyWrapper';

describe('Spotify Wrapper', () => {
  context('SMOKE TESTS', () => {
    // search (generic)

    // searchAlbums

    // searchArtists

    // searchTracks

    // searchPlaylists

    it('should exists the search method', () => {
      expect(search).to.exist;
    });

    it('should exists the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exists the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exists the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exists the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  context('GENERIC SEARCH', () => {
    it('shoud call fetch function', () => {

    });
  })
});
