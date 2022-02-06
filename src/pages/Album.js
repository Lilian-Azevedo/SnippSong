import React, { Component } from 'react';
import { string, shape } from 'prop-types';
import Header from '../components/Header';
import Loading from './Loading';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

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

  getFavoritesFromLocal = async () => {
    const response = await getFavoriteSongs();
    if (response) {
      this.setState({
        musicsFavorites: response,
        loading: false,
      });
    }
  }

  inputFavorite = async ({ target }) => {
    const { musics } = this.state;
    const { id, checked } = target;
    this.setState({ loading: true });
    const musicFound = musics.find((music) => music.trackId === Number(id));
    const response = checked ? await addSong(musicFound) : await removeSong(musicFound);
    if (response) {
      this.getFavoritesFromLocal();
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
      <div data-testid="page-album" className='page-album'>
        <Header />
        { loading
          ? <Loading />
          : (
            <section className='main-album-page'>
              <div className='container-photo-album'>
                <img
                  className="photoAlbum"
                  src={ artworkUrl100 }
                  alt={ artistName }
                />
                <h2 data-testid="album-name">{collectionName}</h2>
                <h4 data-testid="artist-name">{artistName}</h4>
              </div>
              <div className='music-list'>
                { musics.map((music) => music.trackId
              && (
                <div key={ Math.random() } id={ music.trackId }>
                  <MusicCard
                    { ...music }
                    onHandleFavorite={ this.inputFavorite }
                    favorite={ this.isFavorite(music.trackId) }
                  />
                </div>))}
              </div>
            </section>)}
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
