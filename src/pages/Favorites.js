import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from './Loading';
import MusicCard from '../components/MusicCard';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

export default class Favorites extends Component {
  state = { loading: true, musicsFavorites: [] };

  componentDidMount() {
    this.getFavoritesFromLocal();
  }

  getFavoritesFromLocal = async () => {
    const response = await getFavoriteSongs();
    if (response) {
      this.setState({
        musicsFavorites: [...response],
        loading: false,
      });
    }
  }

  inputFavorite = async ({ target }) => {
    const { musicsFavorites } = this.state;
    const { id, checked } = target;
    this.setState({ loading: true });
    const musicFound = musicsFavorites.find((music) => music.trackId === Number(id));
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
    const { musicsFavorites, loading } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        <h1>Favorites</h1>
        { loading
          ? <Loading />
          : (
            <div>
              { musicsFavorites.map((music) => (
                <div key={ Math.random() }>
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
