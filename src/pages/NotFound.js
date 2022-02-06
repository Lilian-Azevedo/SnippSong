import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component {
  render() {
    return (
      <div data-testid="page-not-found" className='page-not-found'>
        <Link to="/search">
          <button type='button'>Voltar para página inicial</button>
        </Link>
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
