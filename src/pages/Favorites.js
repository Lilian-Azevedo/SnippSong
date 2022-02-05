import React, { Component } from 'react';
import Header from '../components/Header';
/* import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';
import MusicCard from '../components/MusicCard'; */

export default class Favorites extends Component {
  /* state = { musicsFavorites: [] };

  componentDidMount() {
    this.getFavoritesFromLocal();
  }

  getFavoritesFromLocal = async () => {
    const response = await getFavoriteSongs();
    if (response) {
      this.setState({
        musicsFavorites: [...response],
      });
    }
  } */

  render() {
    // const { musicsFavorites } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        <h1>Favorites</h1>
        {/*  { loading
          ? <Loading />
          : (
            <div>
              { musicsFavorites.map((music) => music.trackId
            && (
              <div key={ Math.random() } id={ music.trackId }>
                <MusicCard
                  { ...music }
                  onHandleFavorite={ this.inputFavorite }
                  favorite={ this.isFavorite(music.trackId) }
                />
              </div>))}
            </div>)} */}
      </div>);
  }
}
