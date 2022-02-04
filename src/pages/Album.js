import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import Header from '../components/Header';
import Loading from './Loading';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class Album extends Component {
  state = { musics: [], infoArtist: [], loading: false, musicsFavorites: [] };

  componentDidMount() {
    this.getMusicsFromAlbum();
    this.getFavoritesFromLocal();
  }

  getMusicsFromAlbum = async () => {
    const { match: { params } } = this.props;
    const response = await getMusics(params.id);
    if (response) {
      this.setState({
        musics: [...response],
        infoArtist: response[0],
      });
    }
  }

  getFavoritesFromLocal = () => {
    // const { musicsFavorites } = this.state;
    const response = getFavoriteSongs();
    if (response) {
      this.setState({
        loading: false,
      });
    }
  }

  inputFavorite = async ({ target }) => {
    const { musics } = this.state;
    this.setState({
      loading: true,
    });

    const musicFound = musics.find((music) => music.trackId === Number(target.id));
    this.setState(({ musicsFavorites }) => (
      { musicsFavorites: [...musicsFavorites, musicFound] }
    ));
    const response = await addSong(musicFound);
    if (response) {
      this.setState({
        loading: false,
      });
    }
  }

  isFavorite = (id) => {
    const { musicsFavorites } = this.state;
    return musicsFavorites.some(({ trackId }) => id === trackId);
  }

  render() {
    const { musics,
      infoArtist,
      loading } = this.state;
    const { artistName, artworkUrl100, collectionName } = infoArtist;
    return (
      <div data-testid="page-album">
        <Header />
        { loading
          ? <Loading />
          : (
            <div>
              <div>
                <img
                  className="photoAlbum"
                  src={ artworkUrl100 }
                  alt={ artistName }
                />
                <h2 data-testid="album-name">{collectionName}</h2>
                <h4 data-testid="artist-name">{artistName}</h4>
              </div>
              { musics.map((music) => music.trackId
            && (
              <div key={ Math.random() } id={ music.trackId }>
                <MusicCard
                  { ...music }
                  onHandleFavorite={ this.inputFavorite }
                  favorite={ this.isFavorite(music.trackId) }
                />
              </div>))}
            </div>)}
      </div>);
  }
}

Album.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired,
    }).isRequired,
  }).isRequired,
};
