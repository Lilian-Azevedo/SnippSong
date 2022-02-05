import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div data-testid="page-not-found">
        <h3>Nenhum álbum foi encontrado</h3>
        <h1>
          Parece que está um pouco difícil ser alternativo por aqui,
          então como diria Raul Seixas:
          {' '}
        </h1>
        <br />
        <h2>TENTE OUTRA VEEEEEEEZ</h2>
      </div>);
  }
}
