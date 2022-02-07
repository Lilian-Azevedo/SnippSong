import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from './Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumCard from '../components/AlbumCard';
import NotFoundAlbum from './NotFoundAlbum';

const INICIAL_DATA = { inputName: '' };

export default class Search extends Component {
  state = { ...INICIAL_DATA,
    searchAlbum: '',
    loading: false,
    hasAlbums: false,
    albums: [],
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = async (elem) => {
    this.setState({
      searchAlbum: elem,
      ...INICIAL_DATA,
      loading: true });
    const response = await searchAlbumsAPI(elem);
    if (response) {
      this.setState({
        loading: false,
        hasAlbums: true,
        albums: [...response],
      });
    }
  }

  handleEnterClick = (event) => {
    const { inputName } = this.state;
    if (event.key === 'Enter') {
      return this.handleClick(inputName);
    }
  }

  albumsFounded = () => {
    const { searchAlbum, albums } = this.state;
    if (!albums.length) return (<NotFoundAlbum />);
    return (
      <div className="container-albums">
        <h1>
          Resultado de álbuns de:
          {' '}
          {searchAlbum}
        </h1>
        <div className="list-albums">
          { albums.map((album) => (
            <div key={ Math.random() } className="album-item">
              <AlbumCard { ...album } />
            </div>))}
        </div>
      </div>);
  }

  render() {
    const MIN_LETTERS = 2;
    const { inputName, loading, hasAlbums } = this.state;

    return (
      <div data-testid="page-search" className="page-search">
        <Header />
        { loading
          ? <Loading />
          : (
            <div className="container-search">
              <input
                autoComplete="off"
                data-testid="search-artist-input"
                type="text"
                placeholder="Nome do artista"
                value={ inputName }
                name="inputName"
                onChange={ this.handleInput }
                onKeyDown={ this.handleEnterClick }
              />
              <button
                type="button"
                data-testid="search-artist-button"
                onClick={ () => this.handleClick(inputName) }
                disabled={ inputName.length < MIN_LETTERS }
              >
                Pesquisar
              </button>
            </div>)}
        { hasAlbums && this.albumsFounded()}
      </div>
    );
  }
}
