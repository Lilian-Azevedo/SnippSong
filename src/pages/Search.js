import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from './Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumCard from '../components/AlbumCard';
import NotFound from './NotFound';

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

  albumsFounded = () => {
    const { searchAlbum, albums } = this.state;
    if (!albums.length) return (<NotFound />);
    return (
      <div>
        <h1>
          Resultado de álbuns de:
          {' '}
          {searchAlbum}
        </h1>
        <div>
          { albums.map((album) => (
            <div key={ Math.random() }>
              <AlbumCard { ...album } />
            </div>))}
        </div>
      </div>);
  }

  render() {
    const MIN_LETTERS = 2;
    const { inputName, loading, hasAlbums } = this.state;

    return (
      <div data-testid="page-search">
        <h1>Search</h1>
        <Header />
        <hr />
        { loading
          ? <Loading />
          : (
            <div>
              <input
                data-testid="search-artist-input"
                type="text"
                onChange={ this.handleInput }
                placeholder="Nome do artista"
                value={ inputName }
                name="inputName"
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
