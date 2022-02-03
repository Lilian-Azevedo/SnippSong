import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  state = {
    inputName: '',
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const MIN_LETTERS = 2;
    const { inputName } = this.state;

    return (
      <div data-testid="page-search">
        <h1>Search</h1>
        <Header />
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
            disabled={ inputName.length < MIN_LETTERS }
          >
            Pesquisar
          </button>
        </div>
      </div>
    );
  }
}
